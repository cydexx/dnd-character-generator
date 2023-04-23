import {
    ExclamationCircleIcon,
    InformationCircleIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import React, { useState } from "react"

export default function Loading() {
    const [closed, setClosed] = useState(false)

    return (
        <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                delay: 0.2,

                stiffness: 200,
                damping: 20,
            }}
            className={`flex items-center justify-center px-4 lg:px-0 py-12 `}
        >
            <div
                className={
                    "transition delay-150 duration-300 ease-in-out  mx-auto py-3 px-4 bg-green-500 md:flex items-center justify-between shadow-md shadow-green-300 rounded"
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
                    <div className="text-md text-white">
                        <p className=" pt-2 sm:pt-0 pb-2 sm:pb-0">
                            The character is being produced. This process takes
                            some time as the AI thinks while creating the
                            character. Please wait Your character is being
                            created.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
