import Footer from './common/components/footer'
import Navbar from './common/components/navbar'
import './common/styles/globals.css'
import { lora } from './common/fonts/lora'

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
