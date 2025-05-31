// src/app/contact/page.js
import Link from 'next/link';

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      href: "mailto:me@rizvan.my.id",
      icon: (
        <svg className="w-8 h-8 text-teal-600 mr-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2.003 5.884L10 9.81v6.843l-7.997-3.926C1.98 13.064 2 13.047 2 13.012V5.884zm11.997 3.926l7.997-3.926v7.128c0 .035-.003.05-.003.065L14 16.653V9.81zM12 11.233l-10-4.908V5.084l10 4.908L22 5.084v1.241l-10 4.908z"/>
        </svg>
      ),
      text: "me@rizvan.my.id",
      color: "text-blue-600 hover:text-blue-800"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/r12van/",
      icon: (
        <svg className="w-8 h-8 text-blue-700 mr-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      text: "LinkedIn Anda",
      color: "text-blue-600 hover:text-blue-800"
    },
    {
      label: "GitHub",
      href: "https://github.com/r12van",
      icon: (
        <svg className="w-8 h-8 text-gray-800 mr-4" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.475.083.677-.209.677-.468 0-.232-.008-.88-.013-1.744-2.782.604-3.369-1.344-3.369-1.344-.454-1.15-.11-1.458-.11-1.458.387-.272.03-.266.03-.266.42-.03.64.28.64.28.364.64.953.456 1.187.35.037-.272.144-.457.265-.56C7.54 14.333 4.545 13.064 4.545 7.747c0-1.282.46-2.327 1.21-3.155-.122-.272-.524-1.492.115-3.117 0 0 1-.318 3.3.12.947-.264 1.956-.396 2.977-.396 1.022 0 2.032.132 2.977.396 2.29-2.438 3.29-.12 3.29-.12.64 1.625.232 2.845.116 3.117.75.828 1.21 1.873 1.21 3.155 0 5.32-3.007 6.58-5.86 6.945.15.128.283.376.283.758 0 .548-.008.99-.013 1.192 0 .26.2.55.677.468C20.135 20.197 23 16.442 23 12.017 23 6.484 18.522 2 12 2Z" clipRule="evenodd" />
        </svg>
      ),
      text: "GitHub Anda",
      color: "text-gray-800 hover:text-black"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-gradient-to-br from-teal-500 via-green-400 to-green-700 text-white relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-300 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-green-400 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>
      <section className="relative z-10 max-w-xl w-full bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl text-center text-gray-800 border border-white/40">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-700 via-green-600 to-blue-600 mb-6 drop-shadow-lg leading-tight">
          Hubungi Saya
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-700">
          Tertarik untuk berkolaborasi atau sekadar ingin menyapa? Jangan ragu untuk menghubungi saya melalui saluran di bawah ini. Saya akan berusaha membalas secepatnya!
        </p>
        <div className="space-y-6">
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-white/70 to-white/40 shadow-md hover:scale-105 transition-all duration-300 hover:shadow-xl hover:from-teal-100/80 hover:to-green-100/80 ${c.color} font-semibold text-lg md:text-xl`}
            >
              <span className="transition-transform duration-300 group-hover:scale-110">{c.icon}</span>
              <span className="underline decoration-dotted underline-offset-4 group-hover:decoration-solid">{c.text}</span>
            </a>
          ))}
          <div className="mt-10">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white hover:from-blue-700 hover:to-teal-600 transition-all duration-300 py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}