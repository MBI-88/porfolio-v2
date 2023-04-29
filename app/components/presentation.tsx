
"use client";

import { motion } from 'framer-motion'
import style from '../styles/Home.module.css'
import { Rubik_Glitch } from 'next/font/google'

const rubik = Rubik_Glitch(
    {
        weight: ["400"],
        subsets: ['latin'],
        style: ['normal'],
        variable: '--font-rubik',
    
    }

)


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
                <div className='flex flex-col items-center md:pt-6 pt-20'>
                    <motion.ul className="flex flex-row items-center lg:pt-40 pt-20 px-20" variants={container} initial="hidden" animate="show">
                        <motion.li variants={item1}>
                            <motion.h1 className={rubik.className + ' text-center  md:text-8xl text-4xl'}
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                            >
                                D
                            </motion.h1>
                        </motion.li>
                        <motion.li variants={item2}>
                            <motion.h1 className={rubik.className + ' text-center  md:text-8xl text-4xl'}
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                            >
                                e
                            </motion.h1>
                        </motion.li>
                        <motion.li variants={item3}>
                            <motion.h1 className={rubik.className + ' text-center  md:text-9xl text-5xl'}
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                v
                            </motion.h1>
                        </motion.li>
                        <motion.li variants={item4}>
                            <motion.h1 className={rubik.className + ' text-center  md:text-9xl text-5xl'}
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                e
                            </motion.h1>
                        </motion.li>
                        <motion.li variants={item5}>
                            <motion.h1 className={rubik.className + ' text-center  md:text-9xl text-5xl'}
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                l
                            </motion.h1>
                        </motion.li>
                        <motion.li variants={item6}>
                            <motion.h1 className={rubik.className + ' text-center  md:text-9xl text-5xl'}
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                o
                            </motion.h1>
                        </motion.li>
                        <motion.li variants={item7}>
                            <motion.h1 className={rubik.className + ' text-center  md:text-8xl text-4xl'}
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                p
                            </motion.h1>
                        </motion.li>
                        <motion.li variants={item8}>
                            <motion.h1 className={rubik.className + ' text-center  md:text-8xl text-4xl'}
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                e
                            </motion.h1>
                        </motion.li>
                        <motion.li variants={item9}>
                            <motion.h1 className={rubik.className + ' text-center  md:text-8xl text-4xl'}
                                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                            >
                                r
                            </motion.h1>
                        </motion.li>

                    </motion.ul>
                </div>

            </article>
        </section>
    )
}
export default Presentation;