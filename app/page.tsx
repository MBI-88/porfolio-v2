import Background from './components/background'
import Presentation from './components/presentation'
import Stack from './components/stack'


export default function Home() {
  return (
    <main className='min-h-screen'>
     <Presentation />
     <Background />
     <Stack />
    </main>
  )
}
