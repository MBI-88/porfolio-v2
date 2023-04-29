import { GoCode } from 'react-icons/go'
import { StackData } from '../interfaces/stack_interface'
import { FC } from 'react'

interface Props {
    data: StackData[]
}

const Stack:FC<Props> = ({data}) => {
    return (
        <section className='container lg:px-72 md:px-20 px-10 pt-9 pb-24'>
            <article className='flex flex-row flex-wrap'>
                {
                    data ? (
                        data.map((item, index) => (
                            <div className='constainer items-start px-5' key={index}>
                                <h2 className='lg:font-bold font-medium px-10' key={index}>{item.name.toUpperCase()}</h2>
                                <ul key={item.key} className='item-center px-10 pt-2'>
                                    {
                                        item.data.map((lang,index )=>(
                                            <li key={index} className='flex flex-row items-center'>
                                             <GoCode className='mr-2'/> { lang }
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