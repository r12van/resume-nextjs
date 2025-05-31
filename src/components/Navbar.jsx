'use client'; // Tandai sebagai Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname(); // Untuk mengetahui rute aktif

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Saya', href: '/about' },
    { name: 'Proyek', href: '/projects' }, // Akan kita buat nanti
    { name: 'Kontak', href: '/contact' },   // Akan kita buat nanti
  ];

  // Tambahkan state untuk toggle menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 p-4 fixed w-full z-20 top-0 shadow-xl transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo atau Nama Anda */}
        <Link
          href="/"
          className="flex items-center text-white text-2xl font-extrabold tracking-wide hover:text-yellow-300 transition-colors duration-300"
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 object-contain mr-3 drop-shadow-lg"
          />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-400">
            Rizvan
          </span>
        </Link>

        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-white/10 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-1 w-7 bg-white rounded transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block h-1 w-7 bg-white rounded my-1 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-1 w-7 bg-white rounded transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>

        {/* Navigasi Link */}
        <div
          className={`
            flex-col md:flex-row md:flex space-y-4 md:space-y-0 md:space-x-8
            absolute md:static top-16 left-0 w-full md:w-auto bg-gradient-to-b md:bg-none from-indigo-800/95 to-pink-700/95 md:from-transparent md:to-transparent
            px-6 md:px-0 py-6 md:py-0 shadow-lg md:shadow-none rounded-b-2xl md:rounded-none
            transition-all duration-300
            ${menuOpen ? 'flex' : 'hidden md:flex'}
          `}
        >
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  relative px-3 py-2 text-lg font-semibold rounded-lg
                  transition-all duration-300
                  ${isActive
                    ? 'text-yellow-300 bg-white/10 shadow-inner'
                    : 'text-white hover:text-yellow-200 hover:bg-white/10'}
                  group
                `}
                onClick={() => setMenuOpen(false)}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Fancy underline animation */}
                <span
                  className={`
                    absolute left-3 right-3 bottom-1 h-0.5 rounded-full
                    bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300
                    scale-x-0 group-hover:scale-x-100 transition-transform duration-300
                    ${isActive ? 'scale-x-100' : ''}
                  `}
                ></span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}