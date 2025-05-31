// src/app/layout.js
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'; // Impor komponen Navbar

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portofolio Rizvan',
  description: 'Portofolio Pribadi Rizvan Primadita - Fullstack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> 
        <div className="pt-20"> 
          {children}
        </div>
      </body>
    </html>
  );
}