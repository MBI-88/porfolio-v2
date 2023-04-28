import { HiOutlineDownload } from 'react-icons/hi'
import {
    IoLogoJavascript, IoLogoPython, IoLogoHtml5,
    IoLogoCss3, IoLogoSass, IoLogoAngular
} from 'react-icons/io'
import {
    SiTypescript, SiTensorflow, SiMysql,
    SiPostgresql, SiMongodb, SiDocker
} from 'react-icons/si'
import { SiDjango, SiFlask, SiFastapi, SiOwasp, SiGoland } from 'react-icons/si'
import { FaBootstrap, FaLinux, FaWindows, FaReact } from 'react-icons/fa'
import { StackData } from '../interfaces/stack_interface'
import { FC } from 'react'

interface Props {
    data: StackData[]
}

const Stack:FC<Props> = ({data}) => {
    return (
        <section className='container lg:px-72 md:px-20 px-10 pt-9 pb-9'>
            <article className='flex flex-row flex-wrap'>
                {
                    data ? (
                        data.map((item, index) => (
                            <div className='constainer items-start px-5' key={index}>
                                <h2 className='lg:font-bold font-medium px-10' key={index}>{item.name.toUpperCase()}</h2>
                                <ul key={item.key} className='item-center px-10 pt-2'>
                                    {
                                        item.data.map((lang,index )=>(
                                            <li key={index}>
                                                {lang}
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>

                        ))
                    ) : ""
                }
            </article>
        </section>
    )
}

export default Stack;