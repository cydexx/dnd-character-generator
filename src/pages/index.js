import React, { useState, useEffect } from "react"
import CharacterCard from "@/components/CharacterCard"
import Header from "@/components/Header"
import ProdMessage from "@/components/ProdMessage"

export default function Home() {
    return (
        <>
            <ProdMessage />
            <Header />
            <CharacterCard />
        </>
    )
}
