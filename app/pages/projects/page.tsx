import { GetAPI } from "./services/project_services"
import Header from "./components/header"
import Body from './components/body'


export const metadata = {
    title: 'MBI-Projects',
    description: 'Maikel Barrios Insua. Projects',
    icons: {
        icon: '/static/ico/favicon.ico'
    }
}


export default async function Projects() {
    const data = await GetAPI()

    return(
        <main className='min-h-screen'>
            <Header />
            <Body data={data}/>
        </main>
    )
}