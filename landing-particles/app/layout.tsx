import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';

//---importaciones para swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './globals.css';
import Navbar from '@/components/navbar';
import Header from '@/components/header';
import Footer from '@/components/footer';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kenneth Puliche Correa :',
  description: 'Portfolio created with Next.js , react, Tailwind, Typescript',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        <Navbar />
        <Footer></Footer>
        {children}{' '}
      </body>
    </html>
  );
}
