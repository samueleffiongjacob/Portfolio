import type { Metadata } from 'next'
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google'
import { Nav } from '@/components/nav'
import "./globals.css";
import { Footer } from '@/components/footer'
import { FontAwesomeInit } from '@/components/font-awesome-init'
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'DevOps Portfolio',
  description: 'Software Engineer, DevOps Engineer, Statistician, Data Science and Analyst Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <FontAwesomeInit />
        <Nav />
        <main className="flex-grow">
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  )
}



// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { Nav } from '@/components/nav'
// import { FontAwesomeInit } from '@/components/font-awesome-init'
// import { Footer } from '@/components/footer'
// import Head from "next/head";


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: 'Samueleffiong',
//   description: 'Software Engineer, DevOps Engineer, and Statistician Portfolio',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <Head>
//         <link rel="icon" href="/favicon.ico/favicon.ico" sizes="any" />
//       </Head>
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
//       >
//         <FontAwesomeInit />
//         <Nav />
//         <main className="min-h-screen pt-14">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
