import './globals.css';

export const metadata = {
  title: 'Ovulation Calculator',
  description: 'Calculate your ovulation date',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-100">{children}</body>
    </html>
  );
}
