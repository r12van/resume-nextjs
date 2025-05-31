export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      {/* Bagian Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up">
          Halo, Saya Rizvan!
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up delay-200">
          Seorang Fullstack Developer yang Bersemangat
        </p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-400">
          Saya senang membangun solusi digital yang inovatif dan berorientasi pengguna. Jelajahi portofolio saya untuk melihat beberapa pekerjaan terbaru saya.
        </p>
      </section>

      {/* Bagian Call to Action (Opsional) */}
      <div className="animate-fade-in-up delay-600">
        <a
          href="/projects" // Akan kita buat nanti
          className="bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-700 transition-all duration-300 py-3 px-8 rounded-full text-lg font-semibold shadow-lg"
        >
          Lihat Proyek Saya
        </a>
      </div>
    </main>
  );
}