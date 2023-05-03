"use client";

import Image from "next/image";
import Link from "next/link";
import style from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import { HiOutlineDownload } from 'react-icons/hi'


const Navbar = () => {

    return (
        <nav className={style.navbackground + "  fixed w-full z-20 top-0 left-0 border-b border-gray-200"}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <section className="flex flex-row items-center">
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

                <div className="flex md:order-2">
                    <motion.button data-collapse-toggle="navbar-sticky"
                        type="button"
                        className="inline-flex items-center p-2 text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded="false"
                        animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                    >
                        <span className="sr-only">Menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </motion.button>

                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
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