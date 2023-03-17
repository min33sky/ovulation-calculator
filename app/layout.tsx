import ProviderWrapper from '@/components/ProviderWrapper';
import { Nanum_Gothic } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: '배란일 계산기',
  description: 'Calculate your ovulation date',
  keywords: 'nextjs, tailwindcss, ovulation, tailwindcss, typescript',

  // Open Graph
  openGraph: {
    type: 'website',
    title: '배란일 계산기',
    description: 'Calculate your ovulation date',
    siteName: 'Ovulation Calculator',
    images: '',
  },
};

const nanumGothic = Nanum_Gothic({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-nanum-gothic',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-slate-100 ${nanumGothic.variable} font-nanum-gothic`}
      >
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
