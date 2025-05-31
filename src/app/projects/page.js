// export default function Projects() {
//   // Data dummy untuk proyek Anda
//   const projects = [
//     {
//       id: 1,
//       title: 'Aplikasi E-commerce Modern',
//       description: 'Membangun platform e-commerce responsif dengan fitur keranjang belanja, checkout, dan manajemen produk. Menggunakan Next.js, React, dan Tailwind CSS.',
//       imageUrl: 'https://via.placeholder.com/400x250?text=Project+1', // Ganti dengan gambar proyek Anda
//       githubUrl: 'https://github.com/your-username/project-1', // Ganti dengan link GitHub Anda
//       demoUrl: 'https://demo-project-1.vercel.app', // Ganti dengan link demo (opsional)
//       technologies: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
//     },
//     {
//       id: 2,
//       title: 'Sistem Manajemen Tugas',
//       description: 'Aplikasi web untuk mengelola daftar tugas harian dengan fitur prioritas, batas waktu, dan kategori. Dibangun dengan React dan Express.js API.',
//       imageUrl: 'https://via.placeholder.com/400x250?text=Project+2', // Ganti dengan gambar proyek Anda
//       githubUrl: 'https://github.com/your-username/project-2',
//       demoUrl: 'https://demo-project-2.vercel.app',
//       technologies: ['React', 'Express.js', 'PostgreSQL', 'Redux'],
//     },
//     {
//       id: 3,
//       title: 'Blog Pribadi Responsif',
//       description: 'Blog statis yang cepat dan SEO-friendly, menampilkan artikel-artikel tentang pengembangan web dan teknologi. Menggunakan Next.js untuk SSG.',
//       imageUrl: 'https://via.placeholder.com/400x250?text=Project+3', // Ganti dengan gambar proyek Anda
//       githubUrl: 'https://github.com/your-username/project-3',
//       demoUrl: 'https://demo-project-3.vercel.app',
//       technologies: ['Next.js', 'Markdown', 'CSS Modules'],
//     },
//     // Tambahkan proyek-proyek Anda yang lain di sini
//     // {
//     //   id: 4,
//     //   title: '[Nama Proyek Anda]',
//     //   description: '[Deskripsi singkat proyek Anda]',
//     //   imageUrl: 'https://via.placeholder.com/400x250?text=Project+4',
//     //   githubUrl: 'https://github.com/your-username/project-4',
//     //   demoUrl: 'https://demo-project-4.vercel.app',
//     //   technologies: ['[Tech 1]', '[Tech 2]'],
//     // },
//   ];
// src/app/projects/page.js
import Image from 'next/image'; // Gunakan next/image untuk optimasi

async function getProjects() {
  // Panggil API Route yang sudah dibuat
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, {
    cache: 'no-store', // Contoh: untuk selalu mengambil data terbaru
    // next: { revalidate: 3600 } // Contoh: untuk ISR (revalidate setiap jam)
  });

  if (!res.ok) {
    // Ini akan mengaktifkan error.js terdekat
    throw new Error('Failed to fetch projects');
  }

  return res.json();
}

export default async function Projects() { // Component menjadi async
  const projects = await getProjects(); // Ambil data proyek

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24 bg-gray-50 text-gray-800">
      <section className="w-full max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 text-center mb-12">
          Proyek-Proyek Saya
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length === 0 ? (
            <p className="text-center text-xl col-span-full">Belum ada proyek ditambahkan.</p>
          ) : (
            projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={400} // Tentukan lebar asli gambar
                    height={250} // Tentukan tinggi asli gambar
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-4 text-base">{project.description}</p>
                  {project.technologies && Array.isArray(project.technologies) && project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  <div className="flex justify-start space-x-4 mt-auto">
                    {/* ... (Link GitHub dan Demo seperti sebelumnya) ... */}
                    {project.githubUrl && (
                     <a
                       href={project.githubUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors duration-200"
                     >
                       <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                         <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.475.083.677-.209.677-.468 0-.232-.008-.88-.013-1.744-2.782.604-3.369-1.344-3.369-1.344-.454-1.15-.11-1.458-.11-1.458.387-.272.03-.266.03-.266.42-.03.64.28.64.28.364.64.953.456 1.187.35.037-.272.144-.457.265-.56C7.54 14.333 4.545 13.064 4.545 7.747c0-1.282.46-2.327 1.21-3.155-.122-.272-.524-1.492.115-3.117 0 0 1-.318 3.3.12.947-.264 1.956-.396 2.977-.396 1.022 0 2.032.132 2.977.396 2.29-2.438 3.29-.12 3.29-.12.64 1.625.232 2.845.116 3.117.75.828 1.21 1.873 1.21 3.155 0 5.32-3.007 6.58-5.86 6.945.15.128.283.376.283.758 0 .548-.008.99-.013 1.192 0 .26.2.55.677.468C20.135 20.197 23 16.442 23 12.017 23 6.484 18.522 2 12 2Z" clipRule="evenodd" />
                       </svg>
                       GitHub
                     </a>
                   )}
                   {project.demoUrl && (
                     <a
                       href={project.demoUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors duration-200"
                     >
                       <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-2h2v2zm0-4H9V7h2v6zm4-5h-2V7h2v2z"/>
                       </svg>
                       Demo
                     </a>
                   )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}