import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Homepage/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FlipmaxxgolbalLLP",
  description: "Flipmaxx Global LLP is a forward-thinking and dynamic organization committed to delivering innovative solutions and excellence across diverse industries. With a strong foundation built on integrity, expertise, and customer-centric values, we aim to redefine standards and drive impactful change in the global business landscape.Our team of experienced professionals brings together diverse skills in project management, technology, human resources, administration, and strategic development. At Flipmaxx Global, we believe in fostering long-term partnerships, empowering people, and embracing digital transformation to unlock new opportunities and drive sustainable growth.From tailored consulting to high-quality execution, Flipmaxx Global LLP stands as a trusted partner to organizations seeking agility, reliability, and success in a competitive market.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Navbar/>
        </header>
     <main>
         {children}
     </main>
     <Footer/>
      </body>
    </html>
  );
}
