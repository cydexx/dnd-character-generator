import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Loading from "./Loading"

import { ClipboardDocumentIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
const CharacterCardImage = "/../public/card2.png"

export default function CharacterCard() {
    const [characterInfos, setCharacterInfos] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [showPopup, setShowPopup] = useState(false)

    async function generateCharacter(e) {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await fetch("/api/generate-character").then((r) =>
                r.json()
            )

            setCharacterInfos((prevCharacters) => [
                ...prevCharacters,
                res.characterInfo,
            ])
            setLoading(false)
        } catch (err) {
            console.error(err)
            setError(true)
            setLoading(false)
        }
    }

    function copyCharactersToClipboard() {
        const characterString = JSON.stringify(characterInfos)
        navigator.clipboard.writeText(characterString)
        setShowPopup(true)
    }

    function copyCharacterToClipboard(index) {
        const characterString = JSON.stringify(characterInfos[index])
        navigator.clipboard.writeText(characterString)
        setShowPopup(true)
    }

    useEffect(() => {
        if (showPopup) {
            setTimeout(() => {
                setShowPopup(false)
            }, 5000)
        }
    }, [showPopup])

    useEffect(() => {
        if (error) {
            document.body.classList.add("shake")
            setTimeout(() => {
                document.body.classList.remove("shake")
                setError(false)
            }, 5000)
        }
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center px-20">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={generateCharacter}
                disabled={loading}
                className="mx-2 my-2 disabled:cursor-not-allowed bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 py-2 text-md"
            >
                {loading ? "Generating Character" : "Generate Character"}
            </motion.button>
            {characterInfos.length > 0 ? (
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={copyCharactersToClipboard}
                    className=" flex items-center  mx-2 my-2 disabled:cursor-not-allowed bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 py-2 text-md"
                >
                    <ClipboardDocumentIcon className="h-5 mr-3" />
                    Copy Characters
                </motion.button>
            ) : null}
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : null}

            <div className="flex flex-col-reverse gap-5 py-4">
                {characterInfos.map((characterInfo, index) => (
                    <motion.div
                        key={index}
                        className="p-5 pb-12 bg-indigo-700 text-indigo-200 border-2 border-indigo-900 rounded-2xl relative text-md"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        }}
                    >
                        <h1 className="font-bold text-xl  pb-2 text-white">
                            Character #{index + 1}
                        </h1>
                        <h2 className="flex gap-2 font-bold ">
                            Name:
                            <p className="text-white ">
                                {characterInfo.FirstName}
                            </p>
                        </h2>
                        <h2 className="flex gap-2 font-bold ">
                            LastName:
                            <p className="text-white">
                                {characterInfo.LastName}
                            </p>
                        </h2>
                        <h2 className="flex gap-2 font-bold ">
                            Gender:
                            <p className="text-white">{characterInfo.Gender}</p>
                        </h2>
                        <h2 className="flex gap-2 font-bold ">
                            Age:
                            <p className="text-white"> {characterInfo.Age}</p>
                        </h2>
                        <h2 className="flex gap-2 font-bold ">
                            Race:
                            <p className="text-white"> {characterInfo.Race}</p>
                        </h2>
                        <h2 className="flex gap-2 font-bold ">
                            Nickname:
                            <p className="text-white">
                                {characterInfo.Nickname}
                            </p>
                        </h2>
                        <h2 className="flex gap-2 font-bold ">
                            Equipments:
                            <p className="text-white">
                                {characterInfo.Equipments}
                            </p>
                        </h2>{" "}
                        <h2 className="flex gap-2 font-bold ">
                            WeaponType:
                            <p className="text-white">
                                {characterInfo.WeaponType}
                            </p>
                        </h2>
                        <h2 className="flex gap-2 font-bold ">
                            WeaponName:
                            <p className="text-white">
                                {characterInfo.WeaponName}
                            </p>
                        </h2>
                        <h2 className=" gap-2 font-bold ">
                            Stats:
                            <ul className=" px-5 ">
                                <h2 className="flex gap-2 font-bold ">
                                    Level:
                                    <p className="text-white">
                                        {characterInfo.Stats.Level}
                                    </p>
                                </h2>
                                <h2 className="flex gap-2 font-bold ">
                                    Strength:
                                    <p className="text-white">
                                        {characterInfo.Stats.Strength}
                                    </p>
                                </h2>
                                <h2 className="flex gap-2 font-bold ">
                                    Dexterity:
                                    <p className="text-white">
                                        {characterInfo.Stats.Dexterity}
                                    </p>
                                </h2>
                                <h2 className="flex gap-2 font-bold ">
                                    Constitution:
                                    <p className="text-white">
                                        {characterInfo.Stats.Constitution}
                                    </p>
                                </h2>
                                <h2 className="flex gap-2 font-bold ">
                                    Intelligence:
                                    <p className="text-white">
                                        {characterInfo.Stats.Intelligence}
                                    </p>
                                </h2>
                                <h2 className="flex gap-2 font-bold ">
                                    Wisdom:
                                    <p className="text-white">
                                        {characterInfo.Stats.Wisdom}
                                    </p>
                                </h2>{" "}
                                <h2 className="flex gap-2 font-bold ">
                                    Charisma:
                                    <p className="text-white">
                                        {characterInfo.Stats.Charisma}
                                    </p>
                                </h2>
                            </ul>
                        </h2>
                        <h2 className="font-bold ">
                            Lore:
                            <p className="text-white">
                                &nbsp; {characterInfo.Lore}
                            </p>
                        </h2>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => copyCharacterToClipboard(index)}
                            className=" flex items-center absolute bottom-2 right-2 cursor-pointer bg-indigo-600 border-2 border-indigo-800 transition duration-150 ease-in-out hover:bg-indigo-800 font-bold rounded text-white px-3 py-2 text-xs"
                        >
                            <ClipboardDocumentIcon className="h-5 mr-2" />
                            Copy Character
                        </motion.button>
                    </motion.div>
                ))}
            </div>
            {showPopup && (
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                    }}
                    className="fixed top-0 right-0 m-4 p-4 text-sm bg-green-500 text-white rounded-lg shadow-lg"
                >
                    Character(s) copied successfully!
                </motion.div>
            )}
            {error && (
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                    }}
                    className="fixed top-0 right-0 m-4 p-4 bg-red-500 text-white rounded-lg shadow-lg"
                >
                    Some error(s) occurred while generating characters.
                </motion.div>
            )}
        </div>
    )
}
