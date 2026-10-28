import { BIDANG, TEORI, GENERIK, KUANT, MLABEL, QUAL_M, KONSEP, KUANT_SMA, KECAMATAN, LOKASI_CEPAT } from "../data/judul.js";

const SMALL = new Set("di ke dari dan atau pada dalam terhadap antara bagi untuk dengan sebagai oleh yang serta melalui tentang akan atas".split(" "));
function titleCase(str){
  return str.split(/\s+/).filter(Boolean).map((tok,i,arr)=>{
    const [ , pre, core, post] = tok.match(/^([("'“]*)(.*?)([)"'”:,.;]*)$/);
    if(!core) return tok;
    let out;
    if(/[A-Z]/.test(core.slice(1)) || (core === core.toUpperCase() && /[A-Z]/.test(core))) out = core;
    else {
      const lower = core.toLowerCase();
      const afterBreak = i === 0 || /[:(]$/.test(arr[i-1]) || pre.includes("(");
      out = (!afterBreak && SMALL.has(lower)) ? lower : lower.split("-").map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join("-");
    }
    return pre + out + post;
  }).join(" ");
}
const sentence = s => s.charAt(0).toUpperCase()+s.slice(1);
const pick = a => a[Math.floor(Math.random()*a.length)];
const shuffle = a => { a = a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]} return a; };
const esc = s => String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const $ = id => document.getElementById(id);
const radio = name => document.querySelector(`input[name=${name}]:checked`).value;
const surname = w => w.split(" dan ")[0].split(" ").pop();

function read(){
  const v = id => $(id).value.trim().replace(/\s+/g," ");
  return {
    ap: radio("ap"), lv: radio("lv"),
    t: v("topik") || "fenomena yang diteliti", s: v("subjek") || "masyarakat",
    l: v("lokasi").replace(/^di\s+/i,""), y: v("tahun"), teori: $("teori").value,
    mq: $("mqual").value, mn: $("mquant").value,
    x: v("vx") || "variabel X", vy: v("vy") || "variabel Y", z: v("vz"),
    has:{t:!!v("topik"), s:!!v("subjek"), l:!!v("lokasi")}
  };
}
const locOf = d => d.l ? ` di ${d.l}` : "";
const yrOf = d => d.y ? ` Tahun ${d.y}` : "";

function qualTitles(d){
  const L = locOf(d), Y = yrOf(d);
  const pool = d.teori ? TEORI.filter(x=>x.id===d.teori) : shuffle(TEORI).slice(0,6);
  const out = [];
  pool.forEach(th=>{
    const tag = `${th.n} · ${surname(th.w)}`;
    const m = d.mq || th.m || pick(QUAL_M);
    out.push({k:"qual", title:`${th.core(d.t,d.s)}${L}${Y} (${m})`, q:th.q(d.t,d.s), tags:[m, tag]});
    const g = pick(GENERIK);
    out.push({k:"qual", title:`${g.core(d.t,d.s)}${L}${Y}: Perspektif ${th.n} ${th.w}`, q:th.q(d.t,d.s), tags:[d.mq || th.m || pick(QUAL_M), tag]});
  });
  GENERIK.forEach(g=>{
    const m = d.mq || pick(QUAL_M);
    out.push({k:"qual", title:`${g.core(d.t,d.s)}${L}${Y} (${m})`, q:g.q(d.t,d.s), tags:[m]});
  });
  // teori dipilih: utamakan judul bertopang teori
  return d.teori ? [...out.slice(0,2), ...shuffle(out.slice(2))] : shuffle(out);
}

function quantTitles(d){
  const L = locOf(d), Y = yrOf(d);
  let tpl = KUANT.filter(t=>!t.z || d.z);
  if(d.mn) tpl = tpl.filter(t=>t.m===d.mn);
  const thList = d.teori ? TEORI.filter(x=>x.id===d.teori && x.quant) : shuffle(TEORI.filter(x=>x.quant)).slice(0,2);
  const groups = tpl.map((t,i)=>{
    const core = t.core(d.x,d.vy,d.z);
    const tags = [MLABEL[t.m]];
    const args = [d.x,d.vy,d.z,d.s];
    const base = {k:"quant", q:t.q(...args), h:t.h(...args), tags};
    const g = [
      {...base, title:`${core} pada ${d.s}${L}${Y}`},
      {...base, title:`${core} (${MLABEL[t.m]} pada ${d.s}${L}${Y})`}
    ];
    const th = thList[i % Math.max(thList.length,1)];
    if(th) g.push({...base, title:`${core} pada ${d.s}${L}: Pengujian ${th.quant}`, tags:[...tags, `${th.n} · ${surname(th.w)}`]});
    return shuffle(g);
  });
  // satu judul per pola dulu agar hasil beragam
  return [...shuffle(groups.map(g=>g[0])), ...shuffle(groups.flatMap(g=>g.slice(1)))];
}

function smaQual(d){
  const L = locOf(d), Y = yrOf(d);
  const pool = d.teori ? KONSEP.filter(x=>x.id===d.teori) : KONSEP;
  const out = [];
  pool.forEach(k=>{
    out.push({k:"qual", title:`${k.core(d.t,d.s)}${L}${Y}`, q:k.q(d.t,d.s), tags:["Observasi dan Wawancara", k.n]});
    out.push({k:"qual", title:`${k.core(d.t,d.s)} (Studi Kasus${L}${Y})`, q:k.q(d.t,d.s), tags:["Studi Kasus", k.n]});
  });
  return d.teori ? out : [...shuffle(out.filter((_,i)=>i%2===0)), ...shuffle(out.filter((_,i)=>i%2===1))];
}
function smaQuant(d){
  const L = locOf(d), Y = yrOf(d);
  const groups = KUANT_SMA.map(t=>{
    const core = t.core(d.x,d.vy), args=[d.x,d.vy,d.s];
    const base = {k:"quant", q:t.q(...args), h:t.h(...args), hl:"Dugaan sementara (hipotesis)", tags:["Angket"]};
    return shuffle([{...base, title:`${core} pada ${d.s}${L}${Y}`}, {...base, title:`${core} (Survei Angket pada ${d.s}${L})`}]);
  });
  return [...shuffle(groups.map(g=>g[0])), ...shuffle(groups.map(g=>g[1]))];
}

let current = [], lastD = null;
function generate({scroll=false}={}){
  const d = read();
  const Q = d.lv==="sma" ? smaQual : qualTitles, N = d.lv==="sma" ? smaQuant : quantTitles;
  d.lim = d.lv==="sma" ? 15 : 20;
  let items;
  if(d.ap==="qual") items = Q(d).slice(0,8);
  else if(d.ap==="quant") items = N(d).slice(0,8);
  else items = [...Q(d).slice(0,4), ...N(d).slice(0,4)];
  items.forEach(it=>{ it.title = titleCase(it.title); it.q = sentence(it.q); if(it.h) it.h = sentence(it.h); });
  render(items, d);
  if(scroll && matchMedia("(max-width: 900px)").matches){
    $("hasil").scrollIntoView({behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block:"start"});
  }
}

function render(items, d){
  current = items; lastD = d;
  const nq = items.filter(i=>i.k==="qual").length, nn = items.length-nq;
  $("summary").innerHTML = `<strong>${items.length} judul</strong> diracik` + (nq&&nn ? ` · ${nq} kualitatif · ${nn} kuantitatif` : nq ? " · kualitatif" : " · kuantitatif");
  $("jump-n").textContent = items.length;
  const saved = getSaved().map(s=>s.title);
  $("cards").innerHTML = items.map((it,i)=>{
    const words = it.title.replace(/[():]/g," ").split(/\s+/).filter(Boolean).length;
    const unitF = it.k==="qual" ? "fenomena" : "variabel";
    const fOk = it.k==="qual" ? d.has.t : true;
    const isSaved = saved.includes(it.title);
    const long = words > d.lim;
    return `<article class="card ${it.k}" style="--i:${i}">
      <div class="meta"><span class="chip">${it.k==="qual"?"Kualitatif":"Kuantitatif"}</span>${it.tags.map(t=>`<span class="tag">${esc(t)}</span>`).join("")}</div>
      <h3 class="judul">${esc(it.title)}</h3>
      <dl><div><dt>Rumusan masalah</dt><dd>${esc(it.q)}</dd></div>${it.h?`<div><dt>${it.hl||"Hipotesis (H₁)"}</dt><dd>${esc(it.h)}</dd></div>`:""}</dl>
      <div class="foot">
        <span class="count${long?" long":""}" title="${long?`Lebih dari ${d.lim} kata, pertimbangkan untuk dipangkas`:"Panjang judul wajar"}">${words} kata</span>
        <span class="units"><span class="unit${fOk?"":" miss"}">${unitF}</span><span class="unit">·</span><span class="unit${d.has.s?"":" miss"}">subjek</span><span class="unit">·</span><span class="unit${d.has.l?"":" miss"}">lokasi</span></span>
        <button type="button" class="btn sm" data-copy="${i}">Salin</button>
        <button type="button" class="btn sm${isSaved?" saved":""}" data-save="${i}" aria-pressed="${isSaved}">${isSaved?"Tersimpan":"Simpan"}</button>
      </div>
    </article>`;
  }).join("");
}

const KEY = "research:racik-judul:saved";
let memSaved = null;
function getSaved(){
  if(memSaved===null){ try{ memSaved = JSON.parse(localStorage.getItem(KEY)) || []; }catch(e){ memSaved = []; } }
  return memSaved;
}
function setSaved(a){ memSaved = a; try{ localStorage.setItem(KEY, JSON.stringify(a)); }catch(e){} renderSaved(); }
function renderSaved(){
  const a = getSaved();
  $("saved-empty").hidden = a.length>0;
  $("saved").hidden = a.length===0;
  $("copyall").hidden = a.length===0;
  $("saved-n").textContent = a.length ? `(${a.length})` : "";
  $("saved").innerHTML = a.map((s,i)=>`<li><span class="n">${String(i+1).padStart(2,"0")}</span><span class="t">${esc(s.title)}<span class="k ${s.k}">${s.k==="qual"?"Kual":"Kuan"}</span></span><button type="button" class="x" data-del="${i}" aria-label="Hapus judul ini">×</button></li>`).join("");
}

function toast(msg){ const t=$("toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(toast.h); toast.h=setTimeout(()=>t.classList.remove("show"),1800); }
function flash(btn, label){ const old = btn.dataset.label || btn.textContent; btn.dataset.label = old; btn.textContent = label; btn.classList.add("ok"); clearTimeout(btn._t); btn._t = setTimeout(()=>{ btn.textContent = old; btn.classList.remove("ok"); }, 1400); }
function copyText(text, el, btn){
  const fallback = () => { const r=document.createRange(); r.selectNodeContents(el); const s=getSelection(); s.removeAllRanges(); s.addRange(r); toast("Teks dipilih, salin dengan Ctrl+C atau tahan lalu Salin"); };
  try{ navigator.clipboard.writeText(text).then(()=>{ if(btn) flash(btn,"Tersalin ✓"); toast("Judul disalin"); }, fallback); }catch(e){ fallback(); }
}

$("cards").addEventListener("click", e=>{
  const c = e.target.closest("[data-copy]"), s = e.target.closest("[data-save]");
  if(c){ const it=current[+c.dataset.copy]; copyText(it.title, c.closest(".card").querySelector(".judul"), c); }
  if(s){
    const it=current[+s.dataset.save]; const a=getSaved().slice();
    const idx=a.findIndex(x=>x.title===it.title);
    if(idx>=0){ a.splice(idx,1); s.classList.remove("saved"); s.textContent="Simpan"; s.setAttribute("aria-pressed","false"); toast("Dihapus dari daftar"); }
    else { a.push({title:it.title,k:it.k}); s.classList.add("saved","pop"); s.textContent="Tersimpan"; s.setAttribute("aria-pressed","true"); setTimeout(()=>s.classList.remove("pop"),400); toast("Judul disimpan"); }
    setSaved(a);
  }
});
$("saved").addEventListener("click", e=>{
  const d=e.target.closest("[data-del]"); if(!d) return;
  const a=getSaved().slice(); const [rm]=a.splice(+d.dataset.del,1); setSaved(a);
  document.querySelectorAll("[data-save]").forEach(b=>{ if(current[+b.dataset.save].title===rm.title){ b.classList.remove("saved"); b.textContent="Simpan"; b.setAttribute("aria-pressed","false"); } });
});
$("copyall").addEventListener("click", e=>copyText(getSaved().map((s,i)=>`${i+1}. ${s.title}`).join("\n"), $("saved"), e.currentTarget));

// isi pilihan
$("bidang").innerHTML = Object.entries(BIDANG).map(([k,b])=>`<option value="${k}">${b.n}</option>`).join("");
function fillTeori(){
  const sma = radio("lv")==="sma";
  $("teori-label").textContent = sma ? "Konsep sosiologi kelas 10" : "Teori / perspektif";
  $("teori").innerHTML = sma
    ? `<option value="">Acak dari semua konsep</option>` + KONSEP.map(k=>`<option value="${k.id}">${k.n}</option>`).join("")
    : `<option value="">Acak dari berbagai teori</option>` + TEORI.map(t=>`<option value="${t.id}">${t.n} (${t.w})</option>`).join("");
}
$("kecamatan").innerHTML = KECAMATAN.map(k=>`<option value="Kecamatan ${k}, Kabupaten Purwakarta"></option>`).join("") + `<option value="Kabupaten Purwakarta"></option>`;
$("lok-chips").innerHTML = LOKASI_CEPAT.map(l=>`<button type="button" data-lok="${l}">${l.replace(", Kabupaten Purwakarta","")}</button>`).join("");
$("lok-chips").addEventListener("click", e=>{ const b=e.target.closest("[data-lok]"); if(b){ $("lokasi").value=b.dataset.lok; generate(); } });

function setPlaceholders(){
  const b = BIDANG[$("bidang").value];
  $("topik").placeholder = "mis. " + b.t[0]; $("subjek").placeholder = "mis. " + b.s[0];
  $("vx").placeholder = "mis. " + b.x[0]; $("vy").placeholder = "mis. " + b.y[0];
}
function syncGroups(){
  const ap = radio("ap"), sma = radio("lv")==="sma";
  $("g-qual").hidden = ap==="quant" || sma; $("g-quant").hidden = ap==="qual"; $("f-mquant").hidden = sma;
}
function syncTeoriLink(){
  const id = $("teori").value;
  $("teori-link").hidden = !id;
  if(id){
    $("teori-link").href = `/teori/#${id}`;
    $("teori-link").textContent = `Pelajari ${radio("lv")==="sma" ? "konsep" : "teori"} ini di glosarium →`;
  }
}
$("teori").addEventListener("change", syncTeoriLink);
$("bidang").addEventListener("change", setPlaceholders);
$("inspirasi").addEventListener("click", e=>{
  const b = BIDANG[$("bidang").value];
  $("topik").value = pick(b.t); $("subjek").value = radio("lv")==="sma" && Math.random()<.5 ? "siswa kelas 10" : pick(b.s);
  $("vx").value = pick(b.x); $("vy").value = pick(b.y);
  e.currentTarget.classList.remove("spin"); void e.currentTarget.offsetWidth; e.currentTarget.classList.add("spin");
  generate();
});
document.querySelectorAll("input[name=ap]").forEach(r=>r.addEventListener("change", ()=>{ syncGroups(); generate(); }));
document.querySelectorAll("input[name=lv]").forEach(r=>r.addEventListener("change", ()=>{
  const sma = r.value==="sma";
  if(sma && /^(mahasiswa|pelajar SMA)$/i.test($("subjek").value.trim())) $("subjek").value = "siswa kelas 10";
  if(!sma && /^siswa kelas 10$/i.test($("subjek").value.trim())) $("subjek").value = "mahasiswa";
  fillTeori(); syncTeoriLink(); syncGroups(); generate();
}));
$("f").addEventListener("submit", e=>{ e.preventDefault(); generate({scroll:true}); });
$("acak").addEventListener("click", ()=>generate());

// contoh awal agar halaman langsung menunjukkan hasil
$("bidang").value = "umum";
$("topik").value = "penggunaan media sosial";
$("subjek").value = "pelajar SMA";
$("lokasi").value = "Purwakarta";
$("vx").value = "intensitas penggunaan media sosial";
$("vy").value = "interaksi sosial dengan keluarga";
// tautan dari glosarium: /alat/judul/?lv=sma&teori=interaksi
const params = new URLSearchParams(location.search);
if(params.get("lv")==="sma"){ $("lv-sma").checked = true; $("subjek").value = "siswa kelas 10"; }
fillTeori();
if(params.get("teori") && [...$("teori").options].some(o=>o.value===params.get("teori"))) $("teori").value = params.get("teori");
syncTeoriLink(); setPlaceholders(); syncGroups(); renderSaved(); generate();
