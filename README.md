# research.irsyads.com

**Irsyads Research · Ruang Riset Sosiologi.** Ruang belajar penelitian sosiologi untuk siswa SMA kelas 10 dan mahasiswa: alur penelitian, alat Racik Judul, dan etalase karya murid.

Dibuat oleh Muhammad Irsyad Sirojul Khoeir · [irsyads.com](https://irsyads.com)

> Aturan kerja mengikuti `README.md` di folder `Github`: satu branch `main`, uji coba di `Folder UJI`, tidak ada rilis tanpa konfirmasi pemilik. **Push ke `main` memicu deploy.** Commit yang belum boleh tayang memakai awalan `[skip ci]`.

## Isi

| Alamat | Berkas | Isi |
|---|---|---|
| `/` | `src/pages/index.astro` | Beranda |
| `/alur/` | `src/pages/alur.astro` | Sembilan langkah penelitian, catatan Kelas 10/Mahasiswa, daftar centang |
| `/alat/judul/` | `src/pages/alat/judul.astro` | Racik Judul Sosiologi. Data di `src/data/judul.js`, logika di `src/scripts/judul.js`, gaya di `src/styles/judul.css` |
| `/karya/` | `src/pages/karya/` | Galeri karya murid dari `src/content/karya/*.md` |

Stack: Astro 7 statis, tanpa backend. Warna dan huruf mengikuti merek irsyads (ivory, navy, academic blue; Playfair Display, Libre Baskerville, Plus Jakarta Sans), didefinisikan di `src/styles/global.css`.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
```

## Menambah karya murid

1. Salin `src/content/karya/_contoh.md` menjadi berkas baru, mis. `2026-plered-gerabah.md`. Nama berkas menjadi alamat: `/karya/2026-plered-gerabah/`.
2. Isi data di bagian atas berkas (judul, penulis, jenjang, tahun, pendekatan, tema, ringkasan).
3. PDF atau poster besar diunggah ke media.irsyads.com, lalu tautannya dimasukkan ke `pdf` / `poster`. Jangan menaruh berkas besar di repo.
4. Ubah `izin: true` **hanya setelah** murid (dan orang tua bagi murid di bawah umur) mengizinkan karya ditayangkan. Karya dengan `izin: false` tidak dibangun.
5. Repo ini **publik**. Jangan memasukkan NIS, nomor HP, alamat rumah, nilai, atau foto wajah narasumber tanpa izin.

## Deploy

Cloudflare Workers dengan aset statis (Worker `research`, akun irsyads.com). Pengaturannya di `wrangler.jsonc`, termasuk domain khusus `research.irsyads.com` yang dipasang otomatis saat deploy.

Deploy manual dari komputer yang sudah `wrangler login`:

```bash
npm run deploy
```

Deploy otomatis lewat GitHub Actions (`.github/workflows/deploy.yml`) berjalan setiap push ke `main` bila secret `CLOUDFLARE_API_TOKEN` tersedia di repo. Tanpa secret itu, build tetap diuji tetapi deploy dilewati. Menambah atau mengubah berkas workflow butuh izin `workflow` pada login GitHub CLI: `gh auth refresh -s workflow`.

## Rencana

1. ✅ Fondasi situs, Beranda, Racik Judul, Alur Penelitian, kerangka Karya Murid
2. Karya murid pertama dan templat poster
3. Glosarium teori dan konsep (`/teori/`) dari `src/data/judul.js`
4. Pencarian karya dan saringan tema
