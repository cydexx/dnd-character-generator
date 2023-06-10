import React from "react"

import Image from "next/image"

const bgImage = "/../public/bg2.png"
export default function Hero() {
    return (
        <div className="h-screen bg-red-600">
            <Image
                src={bgImage}
                className="h-screen w-screen object-cover"
                width={1920}
                height={1080}
                layout="responsive"
                alt="bg"
                quality={100}
                priority
            />
        </div>
    )
}
