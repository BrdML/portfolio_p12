import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bertrand Menel Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-screen h-sreen ">
          <div className="h-24">
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
