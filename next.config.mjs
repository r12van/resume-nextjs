/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    domains: ['via.placeholder.com', 'placehold.co'], // Tambahkan domain ini
    // Atau, jika Anda menggunakan remotePatterns (lebih disarankan untuk Next.js 13+):
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'via.placeholder.com',
    //     port: '',
    //     pathname: '/**',
    //   },
    //   {
    //     protocol: 'https',
    //     hostname: 'placehold.co',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
};

export default nextConfig;
