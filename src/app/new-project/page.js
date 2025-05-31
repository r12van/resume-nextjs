// src/app/new-project/page.js
'use client'; // Tandai sebagai Client Component karena ada useState dan interaksi form

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Untuk navigasi setelah submit

export default function NewProjectPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [demoUrl, setDemoUrl] = useState('');
  const [technologies, setTechnologies] = useState(''); // Akan disimpan sebagai string dipisahkan koma
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [imageFile, setImageFile] = useState(null); // State baru untuk file gambar

  const router = useRouter(); // Inisialisasi router

  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah refresh halaman
    setLoading(true);
    setError(null);
    setSuccess(false);

    // Konversi string technologies menjadi array
    const technologiesArray = technologies.split(',').map(tech => tech.trim()).filter(tech => tech !== '');
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('githubUrl', githubUrl);
    formData.append('demoUrl', demoUrl);
    formData.append('technologies', JSON.stringify(technologiesArray)); // Kirim array sebagai string JSON

    if (imageFile) {
      formData.append('image', imageFile); // Lampirkan file gambar
    }
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        body: formData, // Kirim FormData
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Gagal menambahkan proyek');
      }

      setSuccess(true);
      // Bersihkan form
      setTitle('');
      setDescription('');
      setImageUrl('');
      setGithubUrl('');
      setDemoUrl('');
      setTechnologies('');

      // Navigasi kembali ke halaman proyek setelah 2 detik
      setTimeout(() => {
        router.push('/projects');
      }, 2000);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-gray-100 text-gray-800">
      <section className="max-w-3xl w-full bg-white p-8 md:p-10 rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 text-center mb-8">
          Tambah Proyek Baru
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-1">
              Judul Proyek
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-1">
              Deskripsi
            </label>
            <textarea
              id="description"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-md"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="imageUpload" className="block text-lg font-medium text-gray-700 mb-1">
              Upload Gambar (thumbnail)
            </label>
            <input
              type="file"
              id="imageUpload"
              className="mt-1 block w-full text-gray-900 border border-gray-300 rounded-md shadow-sm cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImageFile(file);
                  // Tampilkan preview gambar (opsional)
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setImageUrl(reader.result); // Menggunakan imageUrl untuk preview
                  };
                  reader.readAsDataURL(file);
                } else {
                  setImageFile(null);
                  setImageUrl('');
                }
              }}
              accept="image/*" // Batasi hanya file gambar
            />
            {imageUrl && ( // Tampilkan preview gambar jika ada
              <div className="mt-4">
                <img src={imageUrl} alt="Preview" className="max-w-full h-auto rounded-md shadow-md" />
              </div>
            )}
            <p className="mt-1 text-sm text-gray-500">Maksimal 2MB, format JPG/PNG/WEBP.</p>
          </div>

          <div>
            <label htmlFor="githubUrl" className="block text-lg font-medium text-gray-700 mb-1">
              URL GitHub (Opsional)
            </label>
            <input
              type="text"
              id="githubUrl"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-md"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="demoUrl" className="block text-lg font-medium text-gray-700 mb-1">
              URL Demo (Opsional)
            </label>
            <input
              type="text"
              id="demoUrl"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-md"
              value={demoUrl}
              onChange={(e) => setDemoUrl(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="technologies" className="block text-lg font-medium text-gray-700 mb-1">
              Teknologi (Pisahkan dengan koma)
            </label>
            <input
              type="text"
              id="technologies"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-md"
              value={technologies}
              onChange={(e) => setTechnologies(e.target.value)}
              placeholder="Contoh: React, Next.js, Tailwind CSS"
            />
          </div>

          {error && (
            <p className="text-red-600 text-center text-sm">{error}</p>
          )}
          {success && (
            <p className="text-green-600 text-center text-sm">Proyek berhasil ditambahkan! Mengarahkan...</p>
          )}

          <button
            type="submit"
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            }`}
            disabled={loading}
          >
            {loading ? 'Menambahkan...' : 'Tambah Proyek'}
          </button>
        </form>
      </section>
    </main>
  );
}