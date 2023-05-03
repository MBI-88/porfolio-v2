import Body from "./components/body"
import Header from "./components/header"

export const metadata = {
    title: 'MBI-Certs',
    description: 'Maikel Barrios Insua. Certifications and titles',
    icons: {
        icon: '/static/ico/favicon.ico'
    }
}

export default function Certifications() {

    return(
        <main className="min-h-screen"> 
            <Header />
            <Body />
        </main>
    )
}