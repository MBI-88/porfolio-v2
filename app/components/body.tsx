"use client";

import { motion } from "framer-motion";

const Body = () => {
    return (
        <section className='block lg:px-36  px-10 mb-16 mt-10'>
            <motion.h2 className="pt-0 font-extrabold lg:ps-10 ps-0"
                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            >
                Background
            </motion.h2>
            <article className="pt-5 pb-5 lg:ps-20 ps-0 md:ps-16">
                <h3 className="font-medium">
                    I am a Telecommunications and Electronics engineer.
                    I am a fan of technologies and the internet.
                    I have worked
                    with artificial intelligence and data science, in web development with frameworks like Django, Flask, FastApi and Fiber.
                    I have been working with relational databases such as MySQL, PostgresSQL and non-relational databases such as MongoDB.
                    I have been working with front-end frameworks like Angular, Vue and Nextjs.
                    <br/><br/>
                    <q><b>My favorite tech stack is Go (Fiber) and Nexjs</b></q>
                </h3>
                
            </article>
        </section>

    )
}
export default Body;