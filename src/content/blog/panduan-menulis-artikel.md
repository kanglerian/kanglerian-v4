---
title: "Cara Menambah Tulisan Baru di Website Ini"
description: "Panduan praktis membuat artikel baru menggunakan format Markdown (.md) tanpa perlu utak-atik kode program."
pubDate: 2026-10-26
tags: ["tutorial", "markdown", "panduan"]
draft: false
---

Untuk membuat artikel baru di website ini, Anda cukup membuat file berekstensi `.md` di dalam folder `src/content/blog/`.

Contoh frontmatter yang perlu diisi di bagian paling atas file:

```markdown
---
title: "Judul Tulisan Anda"
description: "Deskripsi singkat mengenai isi tulisan untuk SEO Google."
pubDate: 2026-10-26
tags: ["topik1", "topik2"]
draft: false
---
```

Tulis isi artikel dengan sintaks Markdown standar. Astro akan otomatis:
- Membuat URL halaman baru sesuai nama file.
- Menambahkan tulisan ke daftar arsip artikel di `/blog`.
- Mengatur SEO, Open Graph, dan JSON-LD.
