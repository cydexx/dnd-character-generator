import React, { useEffect, useState } from "react"
import Link from "next/link"
// import ThemeSwitcher from "./ThemeSwitcher"

export default function Header() {
    return (
        <header className="py-4 border-b-[1px]  mx-auto">
            <div className="flex items-center justify-center text-center">
                <div className="flex text-md sm:text-xl md:text-2xl">
                    <h1>DND Character Generator by&nbsp;</h1>
                    <Link
                        className="text-indigo-700 hover:text-indigo-900 animate-pulse hover:animate-shake"
                        href="https://github.com/cydexx"
                    >
                        cydex
                    </Link>
                </div>
                {/* <div className="pl-2">
                    <ThemeSwitcher />
                </div> */}
            </div>
        </header>
    )
}
