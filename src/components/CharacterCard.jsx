import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Loading from "./Loading"

import { ClipboardDocumentIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

export default function CharacterCard() {
    const [characterInfos, setCharacterInfos] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [showPopup, setShowPopup] = useState(false)
    // const [characterImage, setCharacterImage] = useState([])

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
            // setCharacterImage((prevcharacterImages) => [
            //     ...prevcharacterImages,
            //     res.characterImage,
            // ])
            setLoading(false)
            // console.log(characterImage)
        } catch (err) {
            console.error(err)
            setError(true)
            setLoading(false)
        }
    }

    function copyCharactersToClipboard(characters) {
        const characterString = JSON.stringify(characters)
        navigator.clipboard.writeText(characterString)
        setShowPopup(true)
    }

    function copyCharacterToClipboard(characters) {
        const characterString = JSON.stringify(
            characters[characters.length - 1]
        )
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
                onClick={generateCharacter} //&& generateCharacterImage
                disabled={loading}
                className="mx-2 my-2 disabled:cursor-not-allowed bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 py-2 text-xs"
            >
                {loading ? "Generating Character" : "Generate Character"}
            </motion.button>
            {characterInfos.length > 0 ? (
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() =>
                        copyCharactersToClipboard(characters) && setIsOpen(open)
                    }
                    className="mx-2 my-2 disabled:cursor-not-allowed bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 py-2 text-xs"
                >
                    Copy Characters
                </motion.button>
            ) : null}
            {loading ? (
                <div>
                    <Loading />
                </div>
            ) : null}

            <div className="flex flex-col-reverse gap-5">
                {characterInfos.map((characterInfo, index, characterImage) => (
                    <motion.div
                        key={index}
                        className="p-5 bg-indigo-400 border border-indigo-700 rounded-2xl "
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                        }}
                    >
                        <h1 className="font-bold text-xl">
                            Character #{index + 1}
                        </h1>
                        <div className="text-lg">
                            <p>Name: {characterInfo.FirstName}</p>
                            <p>LastName: {characterInfo.LastName}</p>
                            <p>Gender: {characterInfo.Gender}</p>
                            <p>Age: {characterInfo.Age}</p>
                            <p>Race: {characterInfo.Race}</p>
                            <p>Nickname: {characterInfo.Nickname}</p>
                            <p>Equipments: {characterInfo.Equipments}</p>
                            <p>WeaponType: {characterInfo.WeaponType}</p>
                            <p>WeaponName: {characterInfo.WeaponName}</p>
                            <p>Stats:</p>
                            <ul className=" px-5">
                                <p>Level: {characterInfo.Stats.Level}</p>
                                <p>Strength: {characterInfo.Stats.Strength}</p>
                                <p>
                                    Dexterity: {characterInfo.Stats.Dexterity}
                                </p>
                                <p>
                                    Constitution:
                                    {characterInfo.Stats.Constitution}
                                </p>
                                <p>
                                    Intelligence:
                                    {characterInfo.Stats.Intelligence}
                                </p>
                                <p>Wisdom: {characterInfo.Stats.Wisdom}</p>
                                <p>Charisma: {characterInfo.Stats.Charisma}</p>
                            </ul>
                            <p>Lore: {characterInfo.Lore}</p>
                            {/* <div>
                                <Image
                                    alt={character.FirstName}
                                    src={`/${characterImage}`}
                                    width={256}
                                    height={256}
                                    // layout="responsive"
                                />
                            </div> */}
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => copyCharacterToClipboard(characters)}
                            className="flex my-2 disabled:cursor-not-allowed bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 font-bold rounded text-white px-3 py-2 text-xs"
                        >
                            <ClipboardDocumentIcon className="h-5 mr-1" />
                            Copy Character as a JSON
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
                    className="fixed top-0 right-0 m-4 p-4 bg-green-500 text-white rounded-lg shadow-lg"
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
                    Some error(s) occured while character generating.
                </motion.div>
            )}
        </div>
    )
}
