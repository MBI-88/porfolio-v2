import { GoCode } from 'react-icons/go'
import { StackData } from '../interfaces/stack_interface'
import { FC } from 'react'
import style from '../styles/Home.module.css'


interface Props {
    data: StackData[]
}

const TechStack: FC<Props> = ({ data }) => {
    return (
        <div className={style.bgStack +" pt-10 shadow-md shadow-black md:bg-cover md:bg-center mb-16"}>
            <section className='container lg:px-72 md:px-20 px-10 pt-9 pb-24 backdrop-blur-sm'>
                <article className='flex flex-row flex-wrap'>
                    {
                        data ? (
                            data.map((item, index) => (
                                <div className='constainer items-start px-5' key={index}>
                                    <h2 className='lg:font-bold font-medium px-10 text-yellow-400' key={index}>{item.name.toUpperCase()}</h2>
                                    <ul key={item.key} className='item-center px-10 pt-2'>
                                        {
                                            item.data.map((lang, index) => (
                                                <li key={index} className='flex flex-row items-center text-yellow-400 font-semibold'>
                                                    <GoCode className='mr-2' /> {lang}
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
        </div>

    )
}

export default TechStack;