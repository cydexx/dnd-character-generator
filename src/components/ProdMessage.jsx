import {
    ExclamationCircleIcon,
    InformationCircleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import React, { useState } from "react"

export default function Alert() {
    const [closed, setClosed] = useState(false)

    const handleClose = () => {
        setClosed(true)
    }
    const menuVariants = {
        open: {
            opacity: 1,
            x: 0,
        },
        closed: {
            opacity: 0,
            x: "-100%",
        },
    }
    return (
        <>
            <motion.div
                animate={closed == true ? "open" : "closed"}
                className={`flex items-center justify-center px-4 lg:px-0 py-12 ${
                    closed == true && "hidden"
                }`}
            >
                <div
                    className={
                        "transition bg-green-500 delay-150 duration-300 ease-in-out lg:w-11/12 mx-auto py-3 px-4 md:flex items-center justify-between shadow-2xl rounded"
                    }
                >
                    <div className="sm:flex sm:items-start lg:items-center">
                        <div className="flex ">
                            <div className="mr-1">
                                <InformationCircleIcon className="h-6 w-6 text-white" />
                            </div>
                            <p className="mr-2 text-base font-bold text-white ">
                                INFO
                            </p>
                        </div>

                        <p className="text-sm sm:text-base text-white pt-2 sm:pt-0 pb-2 sm:pb-0">
                            The website UI design is not the final product still
                            being prepared.
                        </p>
                    </div>
                    <div className="flex items-center justify-end sm:mt-4 md:mt-0 ml-4">
                        <div onClick={handleClose} className="cursor-pointer">
                            <XMarkIcon className="h-6 w-6 text-white hover:text-red-300 active:text-red-500" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
