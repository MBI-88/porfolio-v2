"use client";

import Image from "next/image";
import Link from "next/link";
import style from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import { HiOutlineDownload } from 'react-icons/hi'
import { useState } from "react";



const Navbar = () => {
    const [open,setOpen] = useState<boolean>(false)
    const handleCollapse = () => {
        setOpen(!open)
    }

    return (
        <nav className={style.navbackground + "  fixed w-full z-20 top-0 left-0 border-b border-gray-200"}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <section className="flex flex-row items-center sm:hover:cursor-pointer md:pointer-events-none" onClick={handleCollapse}>
                    <motion.div className=" bg-black rounded-full p-1"
                        initial={{ borderColor: 'ActiveBorder', borderWidth: 2, borderStyle: 'solid' }}
                        animate={{
                            borderColor: ['#fc0505', '#fcf405', '#5ffc05', '#00f6ff', '#fa00ff'],
                            animationTimingFunction: 'ease-out'
                        }}
                        transition={{ duration: 3.5, repeat: Infinity }}
                        
                    >
                        <Image src="/static/img/Porfolio_MBI2.webp"
                            className="mr-1 rounded-2xl"
                            width={"35"} height={"35"} alt="MBI image"
                        />
                    </motion.div>
                    <motion.h2
                        className="ps-1"
                        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    >
                        MBI
                    </motion.h2>
                </section>

                <div className={open ? "items-center justify-between w-full md:flex md:w-auto md:order-1 mx-auto" : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-auto"}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
                        <li>
                            <Link href="/" className="block py-2 pl-3 pr-4  rounded bg-transparent  md:p-0 ">
                                <span className="self-center text-xl font-semibold whitespace-nowrap hover:text-blue-700">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/projects" className="block py-2 pl-3 pr-4  rounded bg-transparent md:p-0 ">
                                <span className="self-center text-xl font-semibold whitespace-nowrap hover:text-blue-700">Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/certs" className="block py-2 pl-3 pr-4  rounded bg-transparent  md:p-0 ">
                                <span className="self-center text-xl font-semibold whitespace-nowrap hover:text-blue-700">Certifications</span>
                            </Link>
                        </li>
                        <li>
                            <motion.a href="/static/doc/CV-MBI-EN.pdf"
                                download type="button"
                            >
                                <motion.h2
                                    animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                                    transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                                >
                                    <HiOutlineDownload />
                                </motion.h2>
                            </motion.a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;