import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Header from '@/components/header';

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
        {children}{' '}
      </body>
    </html>
  );
}
