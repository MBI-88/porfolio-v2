"use client";

import { motion } from 'framer-motion'
import { animation } from '../../../utils/animation_pres'
import appOnline from '../../../data/appOnline.json'

const OnlineApp = () => {
    const app = appOnline.map(item => item)
    return (
        <div>
            <section className=' mt-16'>
                <motion.h2 className="pt-0 font-extrabold text-center"
                    animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                >
                    Applications Online
                </motion.h2>
            </section>
            <motion.ul className='flex flex-col flex-wrap items-center' variants={animation[0]} initial="hidden" animate="show">
                {
                    app.map((item, index) => (
                        <motion.li variants={animation[index + 1]} className='mt-5' key={"li_"+index.toString()}>
                            <a href={item.url} >
                                <h3 className=' text-blue-500 hover:text-red-500'>{item.name}</h3> 
                            </a>
                        </motion.li>
                    ))
                }

            </motion.ul>
        </div>
    )
}

export default OnlineApp;