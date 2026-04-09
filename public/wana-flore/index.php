<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wana Flore - Floral Design & Decoration Bandung</title>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'wana-dark': '#1A1A1A', // Elegant Charcoal
                        'wana-light': '#FDFCFB', // Pearl White
                        'wana-accent': '#B4976A', // Muted Champagne Gold
                        'wana-text': '#2D2D2D', // Deep Gray
                    },
                    fontFamily: {
                        'serif': ['"Playfair Display"', 'serif'],
                        'sans': ['Montserrat', 'sans-serif'],
                    }
                }
            }
        }
    </script>

    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest"></script>

    <style>
        /* Custom Styles for smooth fade-ins */
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .font-handwritten {
            font-family: 'Great Vibes', cursive;
            font-size: 3rem;
            letter-spacing: 0.04em;
        }

        .gallery-card {
            border-radius: 2rem;
            overflow: hidden;
            position: relative;
            min-height: 16rem;
        }
        .gallery-card::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.18) 100%);
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        .gallery-card:hover::after {
            opacity: 1;
        }
        .gallery-card img {
            transition: transform 0.8s ease;
        }
        .gallery-card:hover img {
            transform: scale(1.06);
        }
        .gallery-card-caption {
            position: absolute;
            inset: auto 0 0 0;
            bottom: 0;
            left: 0;
            right: 0;
            color: #f8fafc;
            z-index: 10;
            text-shadow: 0 20px 45px rgba(0, 0, 0, 0.38);
            width: 100%;
            padding: 1.25rem 1.5rem 1.5rem;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
        }
        .gallery-card-caption p {
            font-size: 0.72rem;
            letter-spacing: 0.24em;
            text-transform: uppercase;
            margin-bottom: 0.5rem;
            color: rgba(248, 250, 252, 0.92);
        }
        .gallery-card-caption h4 {
            font-size: 1.35rem;
            line-height: 1.2;
            margin: 0;
            font-weight: 600;
            word-break: break-word;
        }
        @media (max-width: 768px) {
            /* .gallery-card-caption {
                bottom: 0.75rem;
                left: 0.75rem;
                right: 0.75rem;
                padding: 0.85rem;
                max-width: calc(100% - 1.5rem);
            } */
            .gallery-card-caption p {
                font-size: 0.65rem;
                letter-spacing: 0.18em;
            }
            .gallery-card-caption h4 {
                font-size: 1.1rem;
            }
        }
        .section-subtitle {
            color: #b4976a;
            letter-spacing: 0.35em;
            text-transform: uppercase;
            font-size: 0.75rem;
            font-weight: 600;
        }
        .section-heading {
            font-size: 2.75rem;
            line-height: 1.05;
            margin-bottom: 1rem;
        }
        .section-heading.small {
            font-size: 2.1rem;
        }
        
        /* Hero Overlay */
        .hero-overlay {
            background: linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(15,15,15,0.75) 100%);
        }
    </style>
</head>
<body class="font-sans text-wana-text bg-wana-light antialiased selection:bg-wana-dark selection:text-white">

    <!-- Navigation -->
    <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 bg-transparent py-4">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex justify-between items-center">
                <!-- Logo -->
                <a href="#" class="font-serif text-2xl font-bold tracking-wider text-white transition-colors duration-300" id="nav-logo">
                    WANA FLORE
                </a>

                <!-- Desktop Menu -->
                <div class="hidden md:flex space-x-8 items-center">
                    <a href="#tentang" class="text-sm font-medium tracking-widest uppercase text-white hover:text-wana-accent transition duration-300 nav-link">Tentang</a>
                    <a href="#layanan" class="text-sm font-medium tracking-widest uppercase text-white hover:text-wana-accent transition duration-300 nav-link">Layanan</a>
                    <a href="#galeri" class="text-sm font-medium tracking-widest uppercase text-white hover:text-wana-accent transition duration-300 nav-link">Koleksi</a>
                    <a href="#kontak" class="text-sm font-medium tracking-widest uppercase text-white hover:text-wana-accent transition duration-300 nav-link">Kontak</a>
                    <a href="https://wa.me/6287722551606" target="_blank" class="border border-white text-white px-5 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-wana-dark transition duration-300 nav-btn">Pesan Sekarang</a>
                </div>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-btn" class="md:hidden text-white focus:outline-none">
                    <i data-lucide="menu" class="w-6 h-6"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Panel -->
        <div id="mobile-menu" class="hidden absolute top-full left-0 w-full bg-wana-light shadow-lg border-t border-gray-200">
            <div class="flex flex-col px-6 py-4 space-y-4">
                <a href="#tentang" class="text-wana-dark uppercase tracking-widest text-sm py-2 mobile-link">Tentang Kami</a>
                <a href="#layanan" class="text-wana-dark uppercase tracking-widest text-sm py-2 mobile-link">Layanan</a>
                <a href="#galeri" class="text-wana-dark uppercase tracking-widest text-sm py-2 mobile-link">Koleksi</a>
                <a href="#kontak" class="text-wana-dark uppercase tracking-widest text-sm py-2 mobile-link">Kontak</a>
                <a href="https://wa.me/6287722551606" target="_blank" class="bg-wana-dark text-white text-center px-4 py-3 text-sm uppercase tracking-widest mt-4">Hubungi Kami</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="relative h-screen flex items-center justify-center overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Floral Arrangement Background" class="w-full h-full object-cover" />
            <div class="absolute inset-0 hero-overlay"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 text-center px-6 max-w-4xl mx-auto fade-in">
            <span class="block text-wana-accent text-sm md:text-base tracking-[0.3em] uppercase mb-4 bg-wana-dark bg-opacity-50 px-4 py-2">Floral Design & Decoration</span>
            <h1 class="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">Seni Rangkaian Bunga & Estetika Ruang</h1>
            <p class="text-lg text-gray-200 mb-10 font-light max-w-2xl mx-auto">Menghadirkan harmoni visual antara rangkaian bunga, ruang, dan pengalaman estetis yang elegan dalam setiap detail dekorasi.</p>
            <a href="#tentang" class="inline-flex items-center text-white border-b border-white pb-1 hover:text-wana-accent hover:border-wana-accent transition duration-300 uppercase tracking-widest text-sm">
                Temukan Cerita Kami
                <i data-lucide="chevron-down" class="ml-2 w-4 h-4"></i>
            </a>
        </div>
    </header>

    <!-- About Section -->
    <section id="tentang" class="py-24 md:py-32 bg-wana-light">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="flex flex-col lg:flex-row items-center gap-16">
                <div class="w-full lg:w-1/2 fade-in">
                    <img src="https://images.unsplash.com/photo-1583228858294-6745cb25969e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Wana Flore Design Process" class="w-full h-[500px] object-cover rounded-t-full shadow-xl" />
                </div>
                <div class="w-full lg:w-1/2 fade-in">
                    <div class="section-subtitle mb-3">Tentang Wana Flore</div>
                    <h3 class="section-heading font-serif text-wana-dark mb-8 leading-snug">Estetika Modern, Clean, & Elegan</h3>
                    <p class="text-gray-600 leading-relaxed mb-6 font-light text-justify">
                        Wana Flore merupakan brand floral design yang berfokus pada pengembangan konsep dekorasi dan rangkaian bunga dengan pendekatan estetika modern, clean, dan elegan. Menggabungkan elemen botanical, komposisi ruang, dan storytelling visual, Wana Flore menghadirkan solusi dekorasi yang tidak hanya indah secara visual, tetapi juga memiliki karakter dan nilai artistik yang kuat.
                    </p>
                    <p class="text-gray-600 leading-relaxed mb-10 font-light text-justify">
                        Kami berkomitmen untuk memberikan hasil yang terkurasi, berkualitas, dan sesuai dengan positioning premium setiap klien. Setiap rangkaian yang kami buat adalah representasi dari keindahan alam yang dirancang secara profesional.
                    </p>
                    <div class="font-handwritten text-wana-dark opacity-80">
                        wana flore
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="layanan" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-8 text-center fade-in">
            <div class="section-subtitle mb-3">Layanan Kami</div>
            <h3 class="section-heading font-serif text-wana-dark mb-16">Kurasi Keindahan Untuk Anda</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <!-- Service 1 -->
                <div class="group cursor-pointer h-full overflow-hidden rounded-[28px] bg-wana-light shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <div class="overflow-hidden h-80">
                        <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Wedding Decoration" class="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                    </div>
                    <div class="p-8 flex flex-col justify-between h-full">
                        <div>
                            <h4 class="text-2xl font-serif text-wana-dark mb-4">Dekorasi Pernikahan</h4>
                            <p class="text-gray-500 font-light text-sm leading-relaxed">Konsep ruang dan pelaminan bernuansa elegan yang menceritakan kisah cinta Anda melalui visual botanical.</p>
                        </div>
                        <div class="mt-8">
                            <span class="inline-flex items-center text-wana-accent uppercase tracking-widest text-xs font-semibold transition group-hover:text-wana-dark">
                                Jelajahi Rangkaian
                                <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- Service 2 -->
                <div class="group cursor-pointer h-full overflow-hidden rounded-[28px] bg-wana-light shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <div class="overflow-hidden h-80">
                        <img src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Hand Bouquet" class="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                    </div>
                    <div class="p-8 flex flex-col justify-between h-full">
                        <div>
                            <h4 class="text-2xl font-serif text-wana-dark mb-4">Hand Bouquet Premium</h4>
                            <p class="text-gray-500 font-light text-sm leading-relaxed">Buket bunga terkurasi untuk momen spesial, dirangkai dengan gaya modern dan sentuhan personal.</p>
                        </div>
                        <div class="mt-8">
                            <span class="inline-flex items-center text-wana-accent uppercase tracking-widest text-xs font-semibold transition group-hover:text-wana-dark">
                                Jelajahi Detail
                                <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <!-- Service 3 -->
                <div class="group cursor-pointer h-full overflow-hidden rounded-[28px] bg-wana-light shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <div class="overflow-hidden h-80">
                        <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Corporate Event" class="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                    </div>
                    <div class="p-8 flex flex-col justify-between h-full">
                        <div>
                            <h4 class="text-2xl font-serif text-wana-dark mb-4">Acara & Korporat</h4>
                            <p class="text-gray-500 font-light text-sm leading-relaxed">Pengembangan konsep dekorasi meja dan ruangan untuk acara bisnis, peluncuran produk, maupun gala dinner.</p>
                        </div>
                        <div class="mt-8">
                            <span class="inline-flex items-center text-wana-accent uppercase tracking-widest text-xs font-semibold transition group-hover:text-wana-dark">
                                Jelajahi Atmosfer
                                <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gallery Preview -->
    <section id="galeri" class="py-12 bg-wana-light">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="mb-10 text-center fade-in">
                <div class="section-subtitle mb-3">Koleksi Kami</div>
                <h3 class="section-heading font-serif text-wana-dark">Galeri Rangkaian yang Harmonis</h3>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4">
                <div class="gallery-card row-span-2 fade-in bg-black md:col-span-2 md:h-[610px]">
                    <img src="https://images.unsplash.com/photo-1639664341873-9a5ab1170013?q=80&w=1519&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Koleksi 1" class="absolute inset-0 w-full h-full object-cover" />
                    <div class="gallery-card-caption">
                        <p>Wedding</p>
                        <h4>Pelaminan Elegan</h4>
                    </div>
                </div>
                <div class="gallery-card fade-in h-64 md:h-full">
                    <img src="https://images.unsplash.com/photo-1567418938902-aa650a3eb346?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Koleksi 2" class="absolute inset-0 w-full h-full object-cover" />
                    <div class="gallery-card-caption">
                        <p>Bouquet</p>
                        <h4>Sentuhan Premium</h4>
                    </div>
                </div>
                <div class="gallery-card fade-in h-64 md:h-full">
                    <img src="https://images.unsplash.com/photo-1617105200065-24d8a552e89b?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0" alt="Koleksi 3" class="absolute inset-0 w-full h-full object-cover" />
                    <div class="gallery-card-caption">
                        <p>Decor</p>
                        <h4>Detail Artistik</h4>
                    </div>
                </div>
                <div class="gallery-card fade-in h-64 md:h-full">
                    <img src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" alt="Koleksi 4" class="absolute inset-0 w-full h-full object-cover" />
                    <div class="gallery-card-caption">
                        <p>Event</p>
                        <h4>Atmosfer Premium</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact & Info Section -->
    <section id="kontak" class="py-24 bg-wana-dark text-wana-light relative">
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <!-- Info -->
                <div class="fade-in">
                    <div class="section-subtitle mb-3">Kontak & Konsultasi</div>
                    <h2 class="section-heading small font-serif mb-8">Kunjungi Studio Kami</h2>
                    <p class="text-gray-300 font-light mb-12 max-w-md">Diskusikan visi dekorasi impian Anda bersama tim kami. Hubungi kami untuk mengatur jadwal konsultasi.</p>
                    
                    <div class="space-y-8">
                        <div class="flex items-start">
                            <i data-lucide="map-pin" class="w-6 h-6 text-wana-accent mr-4 mt-1 flex-shrink-0"></i>
                            <div>
                                <h4 class="font-semibold mb-1 uppercase tracking-wider text-sm">Alamat</h4>
                                <p class="font-light text-gray-300">Jl. Turangga, Lkr. Sel., Kec. Lengkong,<br>Kota Bandung, Jawa Barat</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <i data-lucide="clock" class="w-6 h-6 text-wana-accent mr-4 mt-1 flex-shrink-0"></i>
                            <div>
                                <h4 class="font-semibold mb-1 uppercase tracking-wider text-sm">Jam Operasional</h4>
                                <p class="font-light text-gray-300">Buka Setiap Hari<br>Tutup pukul 18.00 WIB</p>
                            </div>
                        </div>
                        
                        <div class="flex items-start">
                            <i data-lucide="phone" class="w-6 h-6 text-wana-accent mr-4 mt-1 flex-shrink-0"></i>
                            <div>
                                <h4 class="font-semibold mb-1 uppercase tracking-wider text-sm">Hubungi Kami</h4>
                                <a href="https://wa.me/6287722551606" target="_blank" class="font-light text-gray-300 hover:text-wana-accent transition duration-300">
                                    0877-2255-1606 (WhatsApp)
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Dynamic Google Review Widget -->
                    <div class="mt-10 p-6 border border-gray-800 bg-[#222222] rounded-sm max-w-sm hover:border-wana-accent transition duration-500 group">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center gap-2">
                                <div id="google-rating-stars" class="flex text-yellow-500 gap-1">
                                    <!-- Skeleton Loader for Stars -->
                                    <div class="w-4 h-4 rounded-full bg-gray-700 animate-pulse"></div>
                                    <div class="w-4 h-4 rounded-full bg-gray-700 animate-pulse delay-75"></div>
                                    <div class="w-4 h-4 rounded-full bg-gray-700 animate-pulse delay-150"></div>
                                </div>
                                <span id="google-rating-score" class="font-bold text-white text-lg">...</span>
                            </div>
                            <!-- Google Logo -->
                            <svg viewBox="0 0 24 24" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                        </div>
                        <p id="google-review-count" class="font-light text-gray-400 text-sm mb-4 animate-pulse">Memuat ulasan dari Google...</p>
                        <a id="google-review-link" href="#" target="_blank" class="inline-flex items-center text-wana-accent group-hover:text-white transition duration-300 text-xs uppercase tracking-wider font-semibold opacity-0">
                            Baca Ulasan di Google <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>
                        </a>
                    </div>
                </div>

                <!-- Contact Form / CTA -->
                <div class="bg-white text-wana-dark p-8 md:p-12 fade-in">
                    <h3 class="text-2xl font-serif mb-6">Mulai Rencanakan Momen Anda</h3>
                    <form class="space-y-6" onsubmit="event.preventDefault(); window.open('https://wa.me/6287722551606?text=Halo%20Wana%20Flore,%20saya%20ingin%20berkonsultasi%20mengenai%20rangkaian%20bunga/dekorasi.', '_blank');">
                        <div>
                            <label class="block text-sm font-medium mb-2 uppercase tracking-wide text-gray-500">Nama Lengkap</label>
                            <input type="text" class="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-wana-dark transition" placeholder="Masukkan nama Anda" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-2 uppercase tracking-wide text-gray-500">Jenis Layanan</label>
                            <select class="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-wana-dark transition bg-white" required>
                                <option value="">Pilih Layanan</option>
                                <option value="wedding">Dekorasi Pernikahan</option>
                                <option value="bouquet">Hand Bouquet</option>
                                <option value="corporate">Acara / Korporat</option>
                                <option value="other">Lainnya</option>
                            </select>
                        </div>
                        <button type="submit" class="w-full bg-wana-dark text-white uppercase tracking-widest py-4 text-sm hover:bg-black transition duration-300 mt-4">
                            Kirim Pesan via WhatsApp
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-[#0F0F0F] text-gray-400 py-8 border-t border-gray-800 text-center text-sm font-light">
        <div class="max-w-7xl mx-auto px-6">
            <p>&copy; 2024 Wana Flore. All rights reserved.</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script>
        // Initialize Lucide Icons
        lucide.createIcons();

        // Dynamic Google Reviews Fetch Function
        function fetchGoogleReviews() {
            // Catatan: Dalam produksi nyata, Anda harus melakukan fetch() ke backend API Anda sendiri 
            // yang terhubung dengan Google Places API untuk menghindari tereksposnya API Key dan blokir CORS.
            
            // Menggunakan setTimeout untuk mensimulasikan waktu pemuatan jaringan (API call delay)
            setTimeout(() => {
                // Mock respons data yang didapat dari API (Angka ulasan dan rating)
                const apiResponseData = {
                    rating: 5.0,
                    user_ratings_total: 6,
                    url: "https://share.google/FWXDWDDCHqi3Z8dQT"
                };

                const scoreEl = document.getElementById('google-rating-score');
                const starsContainer = document.getElementById('google-rating-stars');
                const countEl = document.getElementById('google-review-count');
                const linkEl = document.getElementById('google-review-link');

                if (scoreEl && starsContainer && countEl && linkEl) {
                    // Update Teks dan Link
                    scoreEl.innerText = apiResponseData.rating.toFixed(1);
                    countEl.innerText = `Berdasarkan ${apiResponseData.user_ratings_total} ulasan pelanggan yang puas.`;
                    countEl.classList.remove('animate-pulse');
                    
                    linkEl.href = apiResponseData.url;
                    linkEl.classList.remove('opacity-0');

                    // Merender Bintang Secara Dinamis Berdasarkan Angka Rating
                    starsContainer.innerHTML = '';
                    const fullStars = Math.floor(apiResponseData.rating);
                    
                    for(let i = 0; i < 5; i++) {
                        if(i < fullStars) {
                            starsContainer.innerHTML += '<i data-lucide="star" class="w-5 h-5 fill-current"></i>';
                        } else {
                            starsContainer.innerHTML += '<i data-lucide="star" class="w-5 h-5 text-gray-600"></i>';
                        }
                    }
                    
                    // Re-inisialisasi ikon lucide yang baru dirender
                    lucide.createIcons();
                }
            }, 1200); // Simulasi delay 1.2 detik
        }

        // Panggil fungsi saat dokumen HTML selesai dimuat
        document.addEventListener('DOMContentLoaded', fetchGoogleReviews);

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        const logo = document.getElementById('nav-logo');
        const navLinks = document.querySelectorAll('.nav-link');
        const navBtn = document.querySelector('.nav-btn');
        const mobileBtn = document.getElementById('mobile-menu-btn');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white', 'shadow-md', 'py-3');
                navbar.classList.remove('bg-transparent', 'py-4');
                
                logo.classList.remove('text-white');
                logo.classList.add('text-wana-dark');
                
                mobileBtn.classList.remove('text-white');
                mobileBtn.classList.add('text-wana-dark');

                navLinks.forEach(link => {
                    link.classList.remove('text-white');
                    link.classList.add('text-wana-dark');
                });

                navBtn.classList.remove('border-white', 'text-white', 'hover:bg-white', 'hover:text-wana-dark');
                navBtn.classList.add('border-wana-dark', 'text-wana-dark', 'hover:bg-wana-dark', 'hover:text-white');
            } else {
                navbar.classList.add('bg-transparent', 'py-4');
                navbar.classList.remove('bg-white', 'shadow-md', 'py-3');
                
                logo.classList.add('text-white');
                logo.classList.remove('text-wana-dark');

                mobileBtn.classList.add('text-white');
                mobileBtn.classList.remove('text-wana-dark');

                navLinks.forEach(link => {
                    link.classList.add('text-white');
                    link.classList.remove('text-wana-dark');
                });

                navBtn.classList.add('border-white', 'text-white', 'hover:bg-white', 'hover:text-wana-dark');
                navBtn.classList.remove('border-wana-dark', 'text-wana-dark', 'hover:bg-wana-dark', 'hover:text-white');
            }
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Scroll Animation (Fade in elements on scroll)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach((el) => {
            observer.observe(el);
        });
    </script>
</body>
</html>