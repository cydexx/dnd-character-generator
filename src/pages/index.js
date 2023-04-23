import React, { useState, useEffect } from "react"
import CharacterCard from "@/components/CharacterCard"
import Header from "@/components/Header"

export default function Home() {
    return (
        <>
            <Header />
            <CharacterCard />
        </>
    )
}
