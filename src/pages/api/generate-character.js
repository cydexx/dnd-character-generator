const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
const systemPrompt = `
You are a storyteller and character creator. You will generate random characters in the following format.

-FirstName: firstname
-LastName: lastname
-Gender: gender
-Age: age
-Race: race
-Nickname: nickname
-Job: job
-EquipmentType: equipment-type
-EquipmentName: equipment-name
-Level: level
-Strength: strength
-Dexterity: dexterity
-Constitution: constitution
-Intelligence: intelligence
-Wisdom: wisdom
-Charisma: charisma 
-Lore: lore

just answer me the character's information and format the respons JSON.`

export default async function handler(req, res) {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: systemPrompt,
            },
            {
                role: "user",
                content: "elf",
            },
        ],

        //   maxTokens: 1024,
        //   n: 1,
        //   stop: "\n",
        //   temperature: 0.7,
    })
    console.log(completion.data.choices[0].message.content)
    // if (!completion.choices || completion.choices.length === 0) {
    //     console.log("error: Failed to generate character.")

    //     return res.status(500).json({ error: "Failed to generate character." })
    // }

    const character = JSON.parse(completion.data.choices[0].message.content)
    // const character = {
    //     name: "Alice",
    //     age: 25,
    //     gender: "female",
    // }
    res.status(200).json({ character })
}
