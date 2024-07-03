import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import { AuthProvider } from "./utils/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track Your Every Expense",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <Header />
          <main className="flex-1 overflow-hidden">
            <div className="h-full overflow-auto">{children}</div>
          </main>
          <Footer />
        </body>
      </AuthProvider>
    </html>
  );
}
