import Navbar from "@/components/Layout/Navbar";
import "./globals.css";
import { Lobster, Pacifico, Rowdies, Saira } from 'next/font/google'

const pacifico = Pacifico({
  display: 'block',
  weight: ["400",],
  subsets: ['latin'],
  variable: "--font-pacifico",
})

const lobster = Lobster({
  display: 'block',
  weight: ["400",],
  subsets: ['latin'],
  variable: "--font-lobster",
})
const rowdies = Rowdies({
  display: 'block',
  weight: ["300","400","700"],
  subsets: ['latin'],
  variable: "--font-rowdies",
})
const saira = Saira({
  display: 'block',
  weight: ["100","200","300","400","500"],
  subsets: ['latin'],
  variable: "--font-saira",
})

export default function RootLayout({ children }) {
  return (
    <html lang="uz" className={`${pacifico.variable} ${lobster.variable} ${rowdies.variable} ${saira.variable}`}>
      <body className="rowdies">
        <div className="grid lg:grid-cols-4">
          <div className="lg:col-span-1 bg-[#494B50] h-screen">
            <Navbar />
          </div>
          <div className="lg:col-span-3 bg-[#34353A] h-screen overflow-y-scroll">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
