// ARQUIVO: app/layout.js

import { Inter } from "next/font/google";
import "./globals.css"; 
import { AppProvider } from "@/context/AppContext"; 

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import MobileMenu from "@/components/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "123 Realiza - Sua Loja Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AppProvider>
          <Header />
          <main>{children}</main>         
          <Footer />
          <Cart />
          <MobileMenu />
        </AppProvider>
      </body>
    </html>
  );
}