
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

interface Props {
    openModal: boolean
    closeModal: Function
    name: string
    url: string
}


const Modal: FC<Props> = ({ openModal, closeModal, name, url }) => {
    const handleClose = () => {
        closeModal()
    }

    return (
        <AnimatePresence>
            {
                openModal && <motion.div className={"flex flex-col items-center fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"}
                    key="modal"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="relative w-full max-w-4xl max-h-full flex flex-col items-center">
                        <div className="relative bg-white rounded-lg shadow">
                            <div className="flex items-center justify-between p-5 border-b rounded-t">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                                    {name}
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " onClick={handleClose}>
                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-10">
                               <Image alt={name} src={url} width={"700"} height={"700"}  />
                            </div>
                        </div>
                    </div>
                </motion.div>
            }

        </AnimatePresence>

    )
}

export default Modal;