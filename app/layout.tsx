
import { link } from 'fs'
import Footer from './shared/footer'
import Navbar from './shared/navbar'
import './styles/globals.css'
import {Lora} from 'next/font/google'

const lora = Lora(
  { 
    weight:["400","500","600","700"],
    subsets:['latin'],
    style:['normal','italic'],
    variable: '--font-lora',
  }

 )

export const metadata = {
  title: 'MBI-Home',
  description: 'Maikel Barrios Insua. Website developer',
  icons: {
    icon: '/static/ico/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
