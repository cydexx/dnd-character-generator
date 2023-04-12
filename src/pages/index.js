import React, { useState, useEffect } from "react"

export default function Home() {
    const [character, setCharacter] = useState(null)
    const [loading, setLoading] = useState(false)
    //!TO-DO: generate char buttonuna basılınca buton disable olacak ve karakterin özelliklerinin
    //! geleceği div oluşacak

    async function generateCharacter(e) {
        e.preventDefault()
        const res = await fetch("/api/generate-character").then((r) => r.json())
        setCharacter(res.character)
    }

    return (
        <div
            className="flex flex-col
         items-center justify-center"
        >
            <h1>Character:</h1>
            {character ? (
                <div>
                    <p>Name: {character.FirstName}</p>
                    <p>Name: {character.LastName}</p>
                    <p>Gender: {character.Gender}</p>
                    <p>Age: {character.Age}</p>
                    <p>Race: {character.Race}</p>
                    <p>Nickname: {character.Nickname}</p>
                    <p>EquipmentType: {character.EquipmentType}</p>
                    <p>EquipmentName: {character.EquipmentName}</p>
                    <p>Level: {character.Level}</p>
                    <p>Strength: {character.Strength}</p>
                    <p>Dexterity: {character.Dexterity}</p>
                    <p>Constitution: {character.Constitution}</p>
                    <p>Intelligence: {character.Intelligence}</p>
                    <p>Wisdom: {character.Wisdom}</p>
                    <p>Charisma: {character.Charisma}</p>
                    <p>Lore: {character.Lore}</p>
                </div>
            ) : (
                <p>No character generated yet.</p>
            )}
            <button
                onClick={generateCharacter}
                className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-4 py-2 text-xs"
            >
                Generate Character
            </button>
        </div>
    )
}
