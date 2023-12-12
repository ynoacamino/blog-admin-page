import { Inter } from 'next/font/google';
import './globals.css';
import NextAuth from './providers/NextAuth';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuth>
          <div className="w-full flex flex-col items-center justify-start relative">
            {children}
          </div>
        </NextAuth>
      </body>
    </html>
  );
}