
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

    return (
        <div className={style.containerBlock}>
            <section className={style.parallaxBg}>
                <motion.ul className="items-center lg:pt-40 pt-28 px-2" variants={container} initial="hidden" animate="show">
                    <motion.li variants={item1}>
                        <h1 className=' text-yellow-400 text-center lg:font-extrabold font-medium'>
                            The only autograph worthy
                        </h1>
                    </motion.li>
                    <motion.li variants={item2}>
                        <h1 className='  text-yellow-400 text-center lg:font-extrabold font-medium'>
                            of a man is the one he
                        </h1>
                    </motion.li>
                    <motion.li variants={item3}>
                        <h1 className='  text-yellow-400 text-center lg:font-extrabold font-medium'>
                            leaves written
                        </h1>
                    </motion.li>
                    <motion.li variants={item4}>
                        <h1 className='  text-yellow-400 text-center lg:font-extrabold font-medium'>
                            with his works.
                        </h1>
                    </motion.li>

                </motion.ul>
            </section>
        </div>
    )
}
export default Presentation;