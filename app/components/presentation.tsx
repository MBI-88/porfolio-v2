
"use client";

import { motion } from 'framer-motion'
import style from '../styles/Home.module.css'


const Presentation = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 6
            }
        }
    }
    const item1 = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: { duration: 1.5, delay: 3 }
        }
    }
    const item2 = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: { duration: 1.5, delay: 4 }
        }
    }
    const item3 = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: { duration: 1.5, delay: 5 }
        }
    }
    const item4 = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: { duration: 1.5, delay: 6 }
        }
    }
    const item5 = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: { duration: 1.5, delay: 7 }
        }
    }
    const item6 = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: { duration: 1.5, delay: 8 }
        }
    }
    const item7 = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: { duration: 1.5, delay: 9 }
        }
    }
    const item8 = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: { duration: 1.5, delay: 10 }
        }
    }
    const item9 = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: { duration: 1.5, delay: 11 }
        }
    }
    
    return (
        <section className={style.containerBlock}>
            <article className={style.parallaxBg}>
                <motion.ul className="flex flex-row items-center lg:pt-40 pt-20 px-20" variants={container} initial="hidden" animate="show">
                    <motion.li variants={item1}>
                        <h1 className=' text-yellow-400 text-center lg:font-extrabold font-medium'>
                            D
                        </h1>
                    </motion.li>
                    <motion.li variants={item2}>
                        <h1 className='  text-yellow-400 text-center lg:font-extrabold font-medium'>
                            e
                        </h1>
                    </motion.li>
                    <motion.li variants={item3}>
                        <h1 className='  text-yellow-400 text-center lg:font-extrabold font-medium'>
                            v
                        </h1>
                    </motion.li>
                    <motion.li variants={item4}>
                        <h1 className='  text-yellow-400 text-center lg:font-extrabold font-medium'>
                            e
                        </h1>
                    </motion.li>
                    <motion.li variants={item5}>
                        <h1 className='  text-yellow-400 text-center font-medium sm:font-thin'>
                            l
                        </h1>
                    </motion.li>
                    <motion.li variants={item6}>
                        <h1 className='  text-yellow-400 text-center font-medium sm:font-thin'>
                            o
                        </h1>
                    </motion.li>
                    <motion.li variants={item7}>
                        <h1 className='  text-yellow-400 text-center font-medium sm:font-thin'>
                            p
                        </h1>
                    </motion.li>
                    <motion.li variants={item8}>
                        <h1 className='  text-yellow-400 text-center font-medium sm:font-thin'>
                            e
                        </h1>
                    </motion.li>
                    <motion.li variants={item9}>
                        <h1 className='  text-yellow-400 text-center font-medium sm:font-thin'>
                            r
                        </h1>
                    </motion.li>

                </motion.ul>
            </article>
        </section>
    )
}
export default Presentation;