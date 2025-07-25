'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import "@/public/styles/global.css"
import { useEffect } from 'react';
import AOS from 'aos'
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
