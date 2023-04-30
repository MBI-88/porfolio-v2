"use client";

import { motion } from "framer-motion";

const Body = () => {
    return (
        <section className='container lg:px-64 md:px-20 px-10 mb-16'>
            <motion.h2 className="pt-0 font-extrabold lg:ps-10 ps-0"
                animate={{ color: ['#40e612', '#7a19db9e', '#d31a1ab0', '#2551e2fe'], animationTimingFunction: 'ease' }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            >
                Background
            </motion.h2>
            <article className="pt-5 pb-5 lg:ps-20 ps-0 md:ps-16">
                <h3 className="font-medium text-justify">
                    I'm a Telecommunications and Electronics engineer.
                    I'm a fan of technologies and the internet. When I learned how to programme,
                    I never stopped doing it. Of all the aspects that my career offers me, I chose programming.
                    I started with small applications using C++, since it was the first language I learned. Then,
                    I made small console applications to manage user registries and small databases.
                    But I decided that C++ was not the language I identified with,
                    it took too long to be developed. As far as C# concerns,
                    I was more comfortable using it and I was able to make larger scale applications with graphical interfaces,
                    one of them was a tool for a Telecommunications Fundamentals course where you could measure bandwidth
                    and bit rate among other variables.
                    Then I found Python and with it offered a lot of advantages for different branches of programming.
                    Python was everything I was looking for. After a time of experience, I reproduced several applications
                    that I had already done before and others in the field of Cybersecurity, where it has great domain. I worked
                    with artificial intelligence and data science, in web development with frameworks like Django, Flask and FastApi,
                    also in the development of desktop applications with the PyQT5 and PySide framework. Certainly, Python is an all-rounder.
                    Also, while working with this technology,
                    I was programming relational databases such as MySQL, PostgresSQL and non-relational databases such as MongoDb.
                    I had to learn JavaScript, HTML5 and CSS5 as part of web development, since Django did not provide me with all the necessary
                    tools for a good graphic design.
                    As a result, I got acquainted with React and Angular.
                    I have worked with React more because it is my main front-end tool.
                    Currently, I have continuous improvement of my skills and I often look for information about new technologies.
                </h3>
                
            </article>
        </section>

    )
}
export default Body;