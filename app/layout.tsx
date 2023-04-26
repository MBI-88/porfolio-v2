
import Footer from './shared/footer'
import Navbar from './shared/navbar'
import './styles/globals.css'

export const metadata = {
  title: 'MBI Web',
  description: 'Maikel Barrios Insua. Website developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
