import React, { useState, useEffect } from "react"
import CharacterCard from "@/components/CharacterCard"
import Header from "@/components/Header"
import ProdMessage from "@/components/ProdMessage"
import Hero from "@/components/Hero"
import Image from "next/image"
//!TO-DO: bütün userların generate edilen karakterlerinin depolandığı ve görülebildiği bir /past-characters sekmesi
//*TO-DO: new generated character card tasarımı
//*TO-DO: kartın sağ altına eklenecek copy card img buttonu
//*TO-DO:
export default function Home() {
    return (
        <>
            {/* <Hero /> */}
            <Header />
            <ProdMessage />
            <CharacterCard />
        </>
    )
}
