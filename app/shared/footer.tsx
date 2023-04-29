import { BsFacebook, BsGithub, BsLinkedin, BsMailbox, BsWhatsapp } from "react-icons/bs"
import style from '../styles/Home.module.css'


const Footer = () => {
    return (
        <footer className={style.navbackground +  " shadow"}>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center ">
                    ©2023 Eng. Maikel Barrios Insua
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500">
                    <li className="pr-4">
                        <a href='mailto:ingmbi8807@gmail.com' className="hover:underline">
                            <h2> <BsMailbox className="hover:text-blue-700" /> </h2>
                        </a>
                    </li>
                    <li className="pr-4">
                        <a href='https://github.com/MBI-88/' className="hover:underline">
                            <h2> <BsGithub className="hover:text-blue-700" /> </h2>
                        </a>
                    </li>
                    <li className="pr-4">
                        <a href='https://www.facebook.com/IngMBI8807' className="hover:underline">
                            <h2> <BsFacebook className="hover:text-blue-700" /> </h2>
                        </a>
                    </li>
                    <li className="pr-4">
                        <a href='https://www.linkedin.com/in/mbi-bi' className="hover:underline">
                            <h2> <BsLinkedin className="hover:text-blue-700" /> </h2>
                        </a>
                    </li>
                    <li className="pr-4">
                        <a href='https://api.whatsapp.com/send?phone=59891359503' className="hover:underline">
                            <h2> <BsWhatsapp className="hover:text-blue-700" /> </h2>
                        </a>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default Footer;