import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import StoreProvider from '@/provider/StoreProvider';
import ToastProvider from '@/provider/ToastProvider';
import BreadCrumb from '@/components/BreadCrumb';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: ' %s | Tech',
    default: '  Tech Shop',
  },
  description: ' original product',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          <BreadCrumb />
          {children}
        </StoreProvider>
        <ToastProvider />
      </body>
    </html>
  );
}
