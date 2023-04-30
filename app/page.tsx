import Body from './components/body'
import Header from './components/header'
import TechStack from './components/tech_stack'
import { FetchStackData } from './services/stack_services'
import data from './data/stack.json'



export default async function Home() {
  const result = FetchStackData(data)
  return (
    <main className='min-h-screen'>
     <Header />
     <Body />
     <TechStack  data={result}/>
    </main>
  )
}
