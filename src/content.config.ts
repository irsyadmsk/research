import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Satu berkas Markdown = satu karya murid. Berkas berawalan _ (mis. _contoh.md) diabaikan.
const karya = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/karya" }),
  schema: z.object({
    judul: z.string(),
    penulis: z.array(z.string()).min(1),
    jenjang: z.enum(["sma", "mahasiswa"]),
    kelas: z.string().optional(),
    tahun: z.number().int(),
    pendekatan: z.enum(["kualitatif", "kuantitatif", "campuran"]),
    tema: z.string(),
    lokasi: z.string().optional(),
    ringkasan: z.string(),
    pembimbing: z.string().default("Muhammad Irsyad Sirojul Khoeir"),
    pdf: z.string().url().optional(),
    poster: z.string().url().optional(),
    // wajib true: murid (dan orang tua bagi murid di bawah umur) sudah mengizinkan karya ditayangkan
    izin: z.boolean(),
  }),
});

export const collections = { karya };
