// Bahan Racik Judul: bidang kajian, teori, dan pola judul.
// Satu sumber untuk alat Racik Judul (dan nanti glosarium teori).

export const BIDANG = {
  umum:{n:"Sosiologi Umum",t:["penggunaan media sosial","perubahan gaya hidup remaja","kerja sama warga dalam kerja bakti","perundungan di sekolah","kerajinan gerabah Plered","wisata Waduk Jatiluhur","tradisi kuliner sate maranggi","budaya nongkrong di Taman Sri Baduga","pengaruh budaya Sunda dalam pergaulan"],s:["pelajar SMA","mahasiswa","remaja","warga kampung","pedagang kaki lima","pengrajin gerabah"],x:["intensitas penggunaan media sosial","peran keluarga","pergaulan teman sebaya","keaktifan dalam organisasi"],y:["interaksi sosial dengan keluarga","kepedulian sosial","prestasi belajar","sikap toleransi"]},
  digital:{n:"Sosiologi Digital & Media",t:["budaya flexing di Instagram","penggunaan TikTok sebagai sumber informasi","praktik self-branding di LinkedIn","fenomena FOMO","aktivisme digital"],s:["mahasiswa Gen Z","remaja SMA","pekerja muda","ibu rumah tangga"],x:["intensitas penggunaan media sosial","paparan konten influencer","literasi digital"],y:["perilaku konsumtif","kecemasan sosial","partisipasi politik daring"]},
  keluarga:{n:"Sosiologi Keluarga",t:["pola asuh orang tua pekerja","pernikahan dini","keluarga jarak jauh","peran ayah dalam pengasuhan","perceraian"],s:["keluarga pekerja migran","pasangan muda","orang tua tunggal","remaja"],x:["pola komunikasi keluarga","status sosial ekonomi orang tua","tingkat pendidikan orang tua"],y:["kenakalan remaja","kepuasan pernikahan","kemandirian anak"]},
  pendidikan:{n:"Sosiologi Pendidikan",t:["budaya mencontek","perundungan di sekolah","komersialisasi pendidikan","sistem zonasi PPDB","ketimpangan akses pendidikan"],s:["siswa SMA","mahasiswa rantau","guru honorer","santri"],x:["modal budaya keluarga","dukungan teman sebaya","iklim sekolah"],y:["prestasi akademik","motivasi belajar","aspirasi pendidikan"]},
  agama:{n:"Sosiologi Agama",t:["tren hijrah anak muda","moderasi beragama","pengajian daring","toleransi antarumat beragama","komodifikasi agama"],s:["komunitas hijrah","jemaah majelis taklim","pemuda lintas iman","mahasiswa muslim"],x:["religiusitas","intensitas mengikuti kajian daring","interaksi lintas agama"],y:["sikap toleransi","perilaku filantropi","identitas keagamaan"]},
  kota:{n:"Sosiologi Perkotaan",t:["gentrifikasi kawasan kota lama","kehidupan pengemudi ojek daring","permukiman padat bantaran sungai","pemanfaatan ruang publik taman kota","urbanisasi"],s:["pengemudi ojek daring","warga bantaran sungai","pedagang kaki lima","pekerja komuter"],x:["mobilitas sosial","kepadatan permukiman","jam kerja"],y:["kohesi sosial","tingkat stres","partisipasi warga"]},
  desa:{n:"Sosiologi Pedesaan",t:["perubahan sosial akibat dana desa","alih fungsi lahan pertanian","tradisi gotong royong","regenerasi petani","pengembangan desa wisata"],s:["petani muda","masyarakat adat","perangkat desa","pelaku desa wisata"],x:["program dana desa","akses informasi pertanian","modal sosial"],y:["kesejahteraan rumah tangga petani","partisipasi pembangunan desa","minat bertani generasi muda"]},
  gender:{n:"Sosiologi Gender",t:["peran ganda perempuan pekerja","representasi maskulinitas di media sosial","kekerasan berbasis gender online","kepemimpinan perempuan","stereotip gender dalam pekerjaan"],s:["perempuan pekerja pabrik","laki-laki muda","perempuan kepala keluarga","mahasiswi"],x:["internalisasi stereotip gender","dukungan suami","akses ekonomi"],y:["keputusan berkarier","pembagian kerja domestik","pemberdayaan perempuan"]},
  ekonomi:{n:"Sosiologi Ekonomi",t:["gaya hidup paylater","kerja gig di platform digital","UMKM perempuan","budaya ngopi di kedai kopi kekinian","jeratan pinjaman online"],s:["pekerja gig","pelaku UMKM","mahasiswa","pekerja kantoran muda"],x:["gaya hidup hedonis","literasi keuangan","jaringan sosial"],y:["penggunaan paylater","keberlanjutan usaha","perilaku menabung"]},
  politik:{n:"Sosiologi Politik",t:["politik identitas dalam pemilu","partisipasi politik pemilih pemula","praktik politik uang","fenomena buzzer politik","gerakan mahasiswa"],s:["pemilih pemula","aktivis mahasiswa","warga desa","relawan politik"],x:["paparan informasi politik di media sosial","kepercayaan terhadap institusi","identitas kelompok"],y:["partisipasi politik","sikap apatis politik","preferensi memilih"]},
  kesehatan:{n:"Sosiologi Kesehatan",t:["stigma terhadap ODHIV","kesehatan mental mahasiswa","pengobatan tradisional","penolakan vaksinasi","pencegahan stunting"],s:["mahasiswa tingkat akhir","ibu balita","penyintas gangguan jiwa","kader posyandu"],x:["dukungan sosial","stigma sosial","pengetahuan kesehatan"],y:["perilaku mencari bantuan","kepatuhan berobat","kesejahteraan psikologis"]},
  lingkungan:{n:"Sosiologi Lingkungan",t:["pengelolaan sampah berbasis komunitas","konflik agraria di wilayah tambang","gaya hidup zero waste","adaptasi terhadap banjir rob","gerakan bank sampah"],s:["masyarakat pesisir","komunitas peduli lingkungan","warga sekitar tambang","nelayan"],x:["kesadaran lingkungan","modal sosial","paparan kampanye lingkungan"],y:["perilaku pro-lingkungan","partisipasi pengelolaan sampah","resiliensi komunitas"]},
  budaya:{n:"Sosiologi Budaya",t:["fandom K-Pop","pelestarian tradisi lokal","budaya nongkrong di coffee shop","komodifikasi budaya","subkultur skateboard"],s:["penggemar K-Pop","komunitas adat","anak muda perkotaan","seniman tradisional"],x:["fanatisme","intensitas konsumsi budaya populer","identitas etnis"],y:["perilaku konsumtif","pelestarian budaya lokal","solidaritas kelompok"]},
  menyimpang:{n:"Perilaku Menyimpang & Kriminologi",t:["kekerasan jalanan klitih","judi online","penyalahgunaan narkoba","geng motor","residivisme"],s:["remaja","mantan narapidana","pelajar","anggota geng motor"],x:["kontrol sosial keluarga","pengaruh teman sebaya","keterikatan dengan sekolah"],y:["perilaku menyimpang","kenakalan remaja","keterlibatan judi online"]},
  kerja:{n:"Sosiologi Industri & Kerja",t:["budaya hustle","burnout pekerja kreatif","fenomena quiet quitting","kerja jarak jauh","kehidupan buruh perempuan pabrik"],s:["pekerja kreatif","karyawan startup","buruh pabrik","pekerja remote"],x:["beban kerja","budaya organisasi","keseimbangan kerja dan hidup"],y:["kepuasan kerja","burnout","loyalitas karyawan"]}
};

// core/q = rumusan judul kualitatif; quant = nama teori saat dipakai menguji hipotesis
export const TEORI = [
  {id:"konstruksi",n:"Konstruksi Sosial",w:"Peter L. Berger dan Thomas Luckmann",core:(t,s)=>`Konstruksi Sosial ${t} di Kalangan ${s}`,q:(t,s)=>`Bagaimana ${s} mengonstruksi makna ${t} melalui proses eksternalisasi, objektivasi, dan internalisasi?`},
  {id:"dramaturgi",n:"Dramaturgi",w:"Erving Goffman",core:(t,s)=>`Dramaturgi ${t} pada ${s}`,q:(t,s)=>`Bagaimana ${s} mengelola kesan (impression management) di panggung depan dan panggung belakang dalam ${t}?`},
  {id:"bourdieu",n:"Habitus dan Modal",w:"Pierre Bourdieu",core:(t,s)=>`Habitus dan Modal ${s} dalam ${t}`,q:(t,s)=>`Bagaimana habitus serta modal ekonomi, sosial, budaya, dan simbolik membentuk praktik ${t} pada ${s}?`,quant:"Teori Modal Pierre Bourdieu"},
  {id:"weber",n:"Tindakan Sosial",w:"Max Weber",core:(t,s)=>`Tindakan Sosial ${s} dalam ${t}`,q:(t,s)=>`Tipe tindakan sosial apa (rasional instrumental, rasional nilai, afektif, atau tradisional) yang melatarbelakangi ${t} pada ${s}?`},
  {id:"simbolik",n:"Interaksionisme Simbolik",w:"Herbert Blumer",core:(t,s)=>`Makna Simbolik ${t} bagi ${s}`,q:(t,s)=>`Bagaimana ${s} memaknai simbol-simbol dalam ${t} melalui interaksi sehari-hari?`},
  {id:"fenomenologi",n:"Fenomenologi",w:"Alfred Schutz",core:(t,s)=>`Pengalaman ${s} dalam ${t}`,q:(t,s)=>`Apa motif sebab (because motive) dan motif tujuan (in-order-to motive) ${s} dalam ${t}?`,m:"Studi Fenomenologi"},
  {id:"strukturasi",n:"Strukturasi",w:"Anthony Giddens",core:(t,s)=>`Agen dan Struktur dalam ${t} pada ${s}`,q:(t,s)=>`Bagaimana ${s} sebagai agen mereproduksi atau mengubah struktur sosial dalam ${t}?`},
  {id:"modalsosial",n:"Modal Sosial",w:"Robert D. Putnam",core:(t,s)=>`Modal Sosial ${s} dalam ${t}`,q:(t,s)=>`Bagaimana jaringan, norma, dan kepercayaan di antara ${s} bekerja dalam ${t}?`,quant:"Teori Modal Sosial Robert D. Putnam"},
  {id:"foucault",n:"Relasi Kuasa",w:"Michel Foucault",core:(t,s)=>`Relasi Kuasa dan Wacana dalam ${t} pada ${s}`,q:(t,s)=>`Bagaimana wacana dan relasi kuasa bekerja mendisiplinkan ${s} dalam ${t}?`},
  {id:"baudrillard",n:"Masyarakat Konsumsi",w:"Jean Baudrillard",core:(t,s)=>`Konsumsi Tanda dalam ${t} di Kalangan ${s}`,q:(t,s)=>`Bagaimana ${s} mengonsumsi nilai tanda, bukan sekadar nilai guna, dalam ${t}?`,quant:"Teori Masyarakat Konsumsi Jean Baudrillard"},
  {id:"durkheim",n:"Solidaritas Sosial",w:"Émile Durkheim",core:(t,s)=>`Solidaritas Sosial ${s} dalam ${t}`,q:(t,s)=>`Bentuk solidaritas apa (mekanik atau organik) yang terbangun di antara ${s} dalam ${t}?`,quant:"Teori Solidaritas Émile Durkheim"},
  {id:"merton",n:"Fungsionalisme",w:"Robert K. Merton",core:(t,s)=>`Fungsi Manifes dan Laten ${t} bagi ${s}`,q:(t,s)=>`Apa fungsi manifes, fungsi laten, dan disfungsi ${t} bagi ${s}?`,quant:"Teori Strain Robert K. Merton"},
  {id:"hirschi",n:"Kontrol Sosial",w:"Travis Hirschi",core:(t,s)=>`Ikatan Sosial ${s} dan ${t}`,q:(t,s)=>`Bagaimana kelekatan, komitmen, keterlibatan, dan keyakinan ${s} berkaitan dengan ${t}?`,quant:"Teori Kontrol Sosial Travis Hirschi"},
  {id:"konflik",n:"Konflik Sosial",w:"Ralf Dahrendorf",core:(t,s)=>`Konflik Kepentingan dalam ${t} pada ${s}`,q:(t,s)=>`Kelompok kepentingan apa yang terlibat dalam ${t} dan bagaimana distribusi otoritas memicu konflik di antara ${s}?`},
  {id:"sutherland",n:"Asosiasi Diferensial",w:"Edwin H. Sutherland",core:(t,s)=>`Proses Belajar Sosial ${s} dalam ${t}`,q:(t,s)=>`Bagaimana ${s} mempelajari nilai dan teknik ${t} melalui interaksi dalam kelompok intim?`,quant:"Teori Asosiasi Diferensial Edwin H. Sutherland"}
];

export const GENERIK = [
  {core:(t,s)=>`Dinamika ${t} pada ${s}`,q:(t,s)=>`Bagaimana dinamika ${t} berlangsung pada ${s}, dan faktor apa saja yang memengaruhinya?`},
  {core:(t,s)=>`Strategi Adaptasi ${s} dalam Menghadapi ${t}`,q:(t,s)=>`Bagaimana strategi adaptasi yang dilakukan ${s} dalam menghadapi ${t}?`},
  {core:(t,s)=>`Praktik ${t} di Kalangan ${s}`,q:(t,s)=>`Bagaimana praktik ${t} dijalankan dan dimaknai oleh ${s}?`},
  {core:(t,s)=>`Pola Interaksi Sosial ${s} dalam ${t}`,q:(t,s)=>`Bagaimana pola interaksi sosial yang terbentuk di antara ${s} dalam ${t}?`},
  {core:(t,s)=>`Pergeseran Nilai Sosial dalam ${t} pada ${s}`,q:(t,s)=>`Nilai sosial apa yang bergeser dalam ${t} pada ${s}, dan apa pemicunya?`}
];

export const KUANT = [
  {m:"Survei",core:(x,y)=>`Pengaruh ${x} terhadap ${y}`,q:(x,y,z,s)=>`Seberapa besar pengaruh ${x} terhadap ${y} pada ${s}?`,h:(x,y,z,s)=>`Terdapat pengaruh yang signifikan ${x} terhadap ${y} pada ${s}.`},
  {m:"Korelasional",core:(x,y)=>`Hubungan antara ${x} dan ${y}`,q:(x,y,z,s)=>`Apakah terdapat hubungan yang signifikan antara ${x} dan ${y} pada ${s}?`,h:(x,y,z,s)=>`Terdapat hubungan positif yang signifikan antara ${x} dan ${y} pada ${s}.`},
  {m:"Komparatif",core:(x,y)=>`Perbedaan ${y} Ditinjau dari ${x}`,q:(x,y,z,s)=>`Apakah terdapat perbedaan ${y} pada ${s} berdasarkan ${x}?`,h:(x,y,z,s)=>`Terdapat perbedaan ${y} yang signifikan pada ${s} berdasarkan ${x}.`},
  {m:"Eksperimen Semu",core:(x,y)=>`Efektivitas ${x} dalam Meningkatkan ${y}`,q:(x,y,z,s)=>`Apakah ${x} efektif meningkatkan ${y} pada ${s}?`,h:(x,y,z,s)=>`Kelompok ${s} yang memperoleh perlakuan ${x} menunjukkan ${y} yang lebih tinggi daripada kelompok kontrol.`},
  {m:"Survei",core:(x,y)=>`Faktor-Faktor yang Memengaruhi ${y}`,q:(x,y,z,s)=>`Faktor apa saja, termasuk ${x}, yang memengaruhi ${y} pada ${s}?`,h:(x,y,z,s)=>`${x} berpengaruh signifikan terhadap ${y} pada ${s}.`},
  {m:"Survei",core:(x,y)=>`Kontribusi ${x} terhadap ${y}`,q:(x,y,z,s)=>`Seberapa besar kontribusi ${x} dalam menjelaskan variasi ${y} pada ${s}?`,h:(x,y,z,s)=>`${x} memberikan kontribusi yang signifikan terhadap ${y} pada ${s}.`},
  {m:"Survei",z:true,core:(x,y,z)=>`Pengaruh ${x} terhadap ${y} dengan ${z} sebagai Variabel Moderasi`,q:(x,y,z,s)=>`Apakah ${z} memperkuat atau memperlemah pengaruh ${x} terhadap ${y} pada ${s}?`,h:(x,y,z,s)=>`${z} memoderasi pengaruh ${x} terhadap ${y} secara signifikan.`},
  {m:"Survei",z:true,core:(x,y,z)=>`Pengaruh ${x} terhadap ${y} melalui ${z} sebagai Variabel Mediasi`,q:(x,y,z,s)=>`Apakah ${z} memediasi pengaruh ${x} terhadap ${y} pada ${s}?`,h:(x,y,z,s)=>`${x} berpengaruh tidak langsung terhadap ${y} melalui ${z}.`}
];
export const MLABEL = {"Survei":"Studi Survei","Korelasional":"Studi Korelasional","Komparatif":"Studi Komparatif","Eksperimen Semu":"Studi Eksperimen Semu"};
export const QUAL_M = ["Studi Kasus","Studi Fenomenologi","Studi Etnografi","Studi Grounded Theory","Studi Naratif"];

// jenjang SMA kelas 10: konsep dasar sosiologi, bahasa lebih sederhana
export const KONSEP = [
  {id:"interaksi",n:"Interaksi Sosial",core:(t,s)=>`Bentuk Interaksi Sosial ${s} dalam ${t}`,q:(t,s)=>`Bagaimana bentuk interaksi sosial (kerja sama, persaingan, atau konflik) yang terjadi di antara ${s} dalam ${t}?`},
  {id:"norma",n:"Nilai dan Norma",core:(t,s)=>`Peran Nilai dan Norma Sosial dalam ${t} pada ${s}`,q:(t,s)=>`Nilai dan norma sosial apa saja yang berperan dalam ${t} pada ${s}?`},
  {id:"sosialisasi",n:"Sosialisasi",core:(t,s)=>`Peran Agen Sosialisasi dalam ${t} pada ${s}`,q:(t,s)=>`Bagaimana keluarga, sekolah, teman sebaya, dan media massa berperan dalam ${t} pada ${s}?`},
  {id:"gejala",n:"Gejala Sosial",core:(t,s)=>`${t} sebagai Gejala Sosial di Kalangan ${s}`,q:(t,s)=>`Mengapa ${t} muncul sebagai gejala sosial di kalangan ${s}, dan apa dampaknya?`},
  {id:"identitas",n:"Keberagaman dan Identitas",core:(t,s)=>`Identitas Sosial ${s} dalam ${t}`,q:(t,s)=>`Bagaimana ${t} membentuk identitas sosial ${s}?`},
  {id:"dampak",n:"Dampak Sosial",core:(t,s)=>`Dampak ${t} terhadap Kehidupan Sosial ${s}`,q:(t,s)=>`Apa saja dampak positif dan negatif ${t} terhadap kehidupan sosial ${s}?`},
  {id:"upaya",n:"Upaya Menyikapi",core:(t,s)=>`Upaya ${s} dalam Menyikapi ${t}`,q:(t,s)=>`Upaya apa saja yang dilakukan ${s} dalam menyikapi ${t}?`}
];
export const KUANT_SMA = [
  {core:(x,y)=>`Pengaruh ${x} terhadap ${y}`,q:(x,y,s)=>`Apakah ${x} berpengaruh terhadap ${y} pada ${s}?`,h:(x,y,s)=>`${x} berpengaruh terhadap ${y} pada ${s}.`},
  {core:(x,y)=>`Hubungan ${x} dengan ${y}`,q:(x,y,s)=>`Apakah ada hubungan antara ${x} dengan ${y} pada ${s}?`,h:(x,y,s)=>`Semakin tinggi ${x}, semakin tinggi pula ${y} pada ${s}.`},
  {core:(x,y)=>`Perbedaan ${y} Berdasarkan ${x}`,q:(x,y,s)=>`Apakah ${y} pada ${s} berbeda jika dilihat dari ${x}?`,h:(x,y,s)=>`Terdapat perbedaan ${y} pada ${s} berdasarkan ${x}.`}
];
export const KECAMATAN = ["Purwakarta","Jatiluhur","Babakancikao","Bungursari","Campaka","Cibatu","Plered","Sukatani","Darangdan","Bojong","Wanayasa","Kiarapedes","Pasawahan","Pondoksalam","Tegalwaru","Maniis","Sukasari"];
export const LOKASI_CEPAT = ["Purwakarta","Kabupaten Purwakarta","Kecamatan Plered, Kabupaten Purwakarta","Kecamatan Jatiluhur, Kabupaten Purwakarta"];
