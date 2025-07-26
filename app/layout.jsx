import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Homepage/Footer";
import Head from "next/head";

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
  description:
    "Flipmaxx Global LLP is a forward-thinking and dynamic organization committed to delivering innovative solutions and excellence across diverse industries. With a strong foundation built on integrity, expertise, and customer-centric values, we aim to redefine standards and drive impactful change in the global business landscape.Our team of experienced professionals brings together diverse skills in project management, technology, human resources, administration, and strategic development. At Flipmaxx Global, we believe in fostering long-term partnerships, empowering people, and embracing digital transformation to unlock new opportunities and drive sustainable growth.From tailored consulting to high-quality execution, Flipmaxx Global LLP stands as a trusted partner to organizations seeking agility, reliability, and success in a competitive market.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1254259836485598');
fbq('track', 'PageView');

            `,
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1254259836485598&ev=PageView&noscript=1"
            alt="Meta Pixel"
          />
        </noscript>

        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
