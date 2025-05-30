
import "./globals.css";

import './globals.css';


export const metadata = {
  title: 'Personal Expense App',
  description: 'Gestiona tus gastos personales',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
