"use client";

import Modal from "./modal";
import certdata from '../../../data/certdata.json'
import Image from "next/image";
import { useState } from "react";


const Body = () => {
    const cert = certdata.map(item => item)
    const [open,setOpen] = useState<boolean>(false)
    const [name,setName] = useState<string>("")
    const [url,setUrl] = useState<string>("")
    const openModal = (name:string,url:string) => {
        setName(name)
        setUrl(url)
        setOpen(true)
    }
    const closeModal = () => {
        setOpen(false)
    }

    return (
        <section className='container lg:px-64 md:px-20 px-10 mb-16'>
            <Modal openModal={open} closeModal={closeModal} name={name} url={url}/>
            <div className='pt-5 pb-5 lg:ps-20 ps-0 md:ps-16'>
                <ul className="flex flex-col items-center">
                    {
                        cert.map((item, index) => (
                            <li className="flex flex-row flex-wrap items-center space-x-12 mt-10" key={"li_" + index.toString()}>
                                <h3 className=" text-blue-500 hover:text-red-500 mr-10" onClick={ () => openModal(item.name,item.url)}>{item.name}</h3>
                                <div className="w-20 h-16">

                                </div>
                                <div className="relative h-16 w-16">
                                    <Image src={item.url} fill alt={item.name} className="" />
                                </div>
                            </li>
                        ))

                    }

                </ul>
            </div>
        </section>
    )
}

export default Body;