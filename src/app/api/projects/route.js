// src/app/api/projects/route.js

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises'; // Menggunakan fs.promises untuk operasi asinkron

// Inisialisasi PrismaClient (best practice untuk Next.js)
let prisma;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

// Tidak perlu lagi export const config = { api: { bodyParser: false } };
// Next.js App Router secara otomatis menangani ini dengan request.formData()

// --- FUNGSI GET (Tidak berubah) ---
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json({ message: "Failed to fetch projects", error: error.message }, { status: 500 });
  }
}

// --- FUNGSI POST (Diubah total untuk request.formData()) ---
export async function POST(request) {
  try {
    // 1. Dapatkan FormData dari request
    const formData = await request.formData();

    // 2. Ambil field teks
    const title = formData.get('title');
    const description = formData.get('description');
    const githubUrl = formData.get('githubUrl') || null;
    const demoUrl = formData.get('demoUrl') || null;

    // Technologies masih dikirim sebagai string JSON
    const technologiesString = formData.get('technologies');
    const technologies = technologiesString ? JSON.parse(technologiesString) : [];

    // 3. Ambil file gambar
    const imageFile = formData.get('image'); // Ini akan menjadi objek File atau null

    // Validasi sederhana
    if (!title || !description) {
      return NextResponse.json({ message: "Judul dan deskripsi proyek harus diisi." }, { status: 400 });
    }

    let imageUrl = null;
    if (imageFile && imageFile instanceof File && imageFile.size > 0) {
      // Validasi tipe file
      const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
      if (!allowedMimeTypes.includes(imageFile.type)) {
        return NextResponse.json({ message: "Tipe file gambar tidak diizinkan. Hanya JPG, PNG, WEBP." }, { status: 400 });
      }

      // Validasi ukuran file (maksimal 2MB)
      if (imageFile.size > 2 * 1024 * 1024) {
        return NextResponse.json({ message: "Ukuran file gambar terlalu besar. Maksimal 2MB." }, { status: 400 });
      }

      // Konversi file ke buffer
      const buffer = Buffer.from(await imageFile.arrayBuffer());

      // Buat nama file unik
      const fileExtension = path.extname(imageFile.name || ''); // Pastikan ada ekstensi
      const uniqueFilename = `${Date.now()}-${Math.round(Math.random() * 1E9)}${fileExtension}`;
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      const filePath = path.join(uploadDir, uniqueFilename);

      // Pastikan direktori uploads ada
      await fs.mkdir(uploadDir, { recursive: true });

      // Tulis buffer ke file
      await fs.writeFile(filePath, buffer);

      // URL untuk di simpan di database dan diakses dari frontend
      imageUrl = `/uploads/${uniqueFilename}`;
    }

    // 4. Buat proyek baru di database menggunakan Prisma
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        imageUrl,
        githubUrl,
        demoUrl,
        technologies,
      },
    });

    return NextResponse.json(newProject, { status: 201 });

  } catch (error) {
    console.error("Error creating project (with upload):", error);
    // Lebih spesifik dalam pesan error jika bisa
    let errorMessage = "Gagal menambahkan proyek.";
    // Anda bisa memeriksa error.message untuk pesan spesifik dari Prisma
    // Misalnya, jika validasi database gagal, atau koneksi
    return NextResponse.json(
      {
        message: errorMessage,
        error: error.message,
        stack: process.env.NODE_ENV !== 'production' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}