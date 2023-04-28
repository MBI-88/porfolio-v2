import Background from './components/background'
import Presentation from './components/presentation'
import Stack from './components/stack'
import { FetchStackData } from './services/stack_services'
import data from './data/stack.json'



export default function Home() {
  const result = FetchStackData(data)
  return (
    <main className='min-h-screen'>
     <Presentation />
     <Background />
     <Stack  data={result}/>
    </main>
  )
}
