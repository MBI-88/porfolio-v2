import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen container  pt-24 pr-10 ps-10">
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm">
        <h1 className='h-1 items-center'>My page</h1>
      </div>
    </main>
  )
}
