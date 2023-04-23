import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
export default function CharacterCard() {
    const [character, setCharacter] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    //!TO-DO: generate char buttonuna basılınca buton disable olacak ve karakterin özelliklerinin
    //! geleceği div oluşacak

    async function generateCharacter(e) {
        e.preventDefault()
        setLoading(true)
        const res = await fetch("/api/generate-character").then((r) => r.json())

        setCharacter(res.character)
        setLoading(false)
    }

    return (
        <div className="flex flex-col items-center justify-center px-20">
            <h1>Character:</h1>
            {loading ? (
                <div className="bg-green-500 ">
                    <p>
                        Creating character... This may take some time, please
                        wait.
                    </p>
                </div>
            ) : (
                <></>
            )}
            {character ? (
                <motion.div
                    className="p-5 bg-indigo-400 border border-indigo-700 rounded-2xl "
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    <p>Name: {character.FirstName}</p>
                    <p>LastName: {character.LastName}</p>
                    <p>Gender: {character.Gender}</p>
                    <p>Age: {character.Age}</p>
                    <p>Race: {character.Race}</p>
                    <p>Nickname: {character.Nickname}</p>
                    <p>Equipments: {character.Equipments}</p>
                    <p>WeaponType: {character.WeaponType}</p>
                    <p>WeaponName: {character.WeaponName}</p>
                    <li className="list-none">
                        Stats:
                        <p>Level: {character.Stats.Level}</p>
                        <p>Strength: {character.Stats.Strength}</p>
                        <p>Dexterity: {character.Stats.Dexterity}</p>
                        <p>Constitution: {character.Stats.Constitution}</p>
                        <p>Intelligence: {character.Stats.Intelligence}</p>
                        <p>Wisdom: {character.Stats.Wisdom}</p>
                        <p>Charisma: {character.Stats.Charisma}</p>
                    </li>

                    <p>Lore: {character.Lore}</p>
                </motion.div>
            ) : (
                <></>
            )}
            {error ? (
                <div className="bg-red-500 text-white p-4 rounded-md text-[15px] text-center">
                    {error}
                </div>
            ) : (
                <></>
            )}
            <button
                onClick={generateCharacter}
                disabled={loading}
                className="mx-2 my-2 disabled:cursor-not-allowed bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 py-2 text-xs"
            >
                {loading ? "Generating Character" : "Generate Character"}
            </button>
        </div>
    )
}
