import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

const systemPrompt = `You are a storyteller and character creator. You will generate random characters in the following format.

 {
    "FirstName":"firstname",
    "LastName":"lastName",
    "Gender":"Gender",
    "Age":"Age",
    "Race":"Race",
    "Nickname":"Nickname",
    "Job":"Job", 
    "BirthPlace":"Birth place",
    "Equipments":"Equipments",
    "WeaponType":"WeaponType",
    "WeaponName":"WeaponName",
    "Stats":{
       "Level":"Level",
       "Strength":"Strength",
       "Dexterity":"Dexterity",
       "Constitution":"Constitution",
       "Intelligence":"Intelligence",
       "Wisdom":"Wisdom",
       "Charisma":"Charisma"
    }
    "Personalities":"Personalities",
    "Lore":"Lore"
 }

 Stats can be 1-20 except level can be 1-200
 Just answer me the character's information and format the response JSON.
 personalities max length is 50 character.
 lore must be at least 100 character.`

export default async function handler(req, res) {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: systemPrompt,
            },
        ],
        // max_tokens: 1024,
        temperature: 0.5,
    })

    const characterInfo = JSON.parse(completion.data.choices[0].message.content)

    // const imagePrompt = `Name: ${characterInfo.FirstName},
    // LastName: ${characterInfo.LastName},
    // Gender: ${characterInfo.Gender},
    // Age: ${characterInfo.Age},
    // Race: ${characterInfo.Race},
    // Nickname: ${characterInfo.Nickname},
    // Equipments: ${characterInfo.Equipments},
    // WeaponType: ${characterInfo.WeaponType},
    // WeaponName: ${characterInfo.WeaponName}`

    // const response = await openai.createImage({ //Image for later
    //     prompt: imagePrompt,
    //     n: 1,
    //     size: "256x256",
    // })

    // const characterImageURL = response.data.data[0].url

    // const characterData = { ...characterInfo, characterImageURL }

    // const characterString = JSON.stringify(characterData)
    // const character = JSON.parse(characterString)
    // res.setHeader("Content-Type", "application/json")
    res.status(200).json({ characterInfo })
}
