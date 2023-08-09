"use client";

import style from '../../../common/styles/Cert.module.css'
import { motion } from 'framer-motion';
import { animation } from '../../../common/utils/animation_pres'
import { rubik } from '../../../common/fonts/rubik_glitch'

const Header = () => {
    const text = "Certifications".split("")
    return (
        <section className={style.containerBlock}>
            <article className={style.parallaxBg}>
                <div className='flex flex-col items-center md:pt-6 pt-20'>
                    <motion.ul className="flex flex-row items-center lg:pt-40 pt-20 px-20" variants={animation[0]} initial="hidden" animate="show">
                        {
                            text.map((item, index) => (
                                <motion.li variants={animation[index + 1]} key={"li_" + index.toString()}>
                                    <motion.h1 className={rubik.className + ' text-center  md:text-8xl text-4xl'}
                                        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                                    >
                                        {item}
                                    </motion.h1>
                                </motion.li>
                            ))
                        }
                    </motion.ul>

                </div>
            </article>
        </section>
    )
}

export default Header;