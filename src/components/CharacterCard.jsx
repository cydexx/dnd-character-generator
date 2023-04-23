import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Loading from "./Loading"
export default function CharacterCard() {
    const [characters, setCharacters] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    async function generateCharacter(e) {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch("/api/generate-character").then((r) =>
                r.json()
            )
            setCharacters((prevCharacters) => [
                ...prevCharacters,
                res.character,
            ])
            setLoading(false)
        } catch (err) {
            console.error(err)
            setError(true)
            setLoading(false)
        }
    }
    function copyCharactersToClipboard(characters) {
        const characterString = JSON.stringify(characters)
        navigator.clipboard.writeText(characterString)
        return true
    }
    function copyCharacterToClipboard(characters) {
        const characterString = JSON.stringify(
            characters[characters.length - 1]
        )
        navigator.clipboard.writeText(characterString)
        return true
    }

    return (
        <div className="flex flex-col items-center justify-center px-20">
            <h1>Character:</h1>
            <button
                onClick={generateCharacter}
                disabled={loading}
                className="mx-2 my-2 disabled:cursor-not-allowed bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 py-2 text-xs"
            >
                {loading ? "Generating Character" : "Generate Character"}
            </button>
            <button
                onClick={() =>
                    copyCharactersToClipboard(characters) &&
                    alert("All characters copied successfully!")
                }
                className="mx-2 my-2 disabled:cursor-not-allowed bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 py-2 text-xs"
            >
                Copy Characters
            </button>
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : null}
            {error ? (
                <div className="bg-red-500 text-white p-4 rounded-md text-[15px] text-center">
                    {error}
                </div>
            ) : (
                <></>
            )}
            <div className="flex flex-col-reverse gap-5">
                {characters.map((character, index) => (
                    <motion.div
                        key={index}
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
                        <h1 className="font-bold text-xl">
                            Chracher #{index + 1}
                        </h1>
                        <div className="text-lg">
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
                                <p>
                                    Constitution: {character.Stats.Constitution}
                                </p>
                                <p>
                                    Intelligence: {character.Stats.Intelligence}
                                </p>
                                <p>Wisdom: {character.Stats.Wisdom}</p>
                                <p>Charisma: {character.Stats.Charisma}</p>
                            </li>

                            <p>Lore: {character.Lore}</p>
                        </div>
                        <button
                            onClick={() =>
                                copyCharacterToClipboard(characters) &&
                                alert("Character copied successfully!")
                            }
                            className="mx-2 my-2 disabled:cursor-not-allowed bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 py-2 text-xs"
                        >
                            Copy Character as a JSON
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
