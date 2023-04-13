const { Configuration, OpenAIApi } = require("openai")

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
const systemPrompt = `
You are a storyteller and character creator. You will generate random characters in the following format.

{
   "FirstName":"firstname",
   "LastName":"lastName",
   "Gender":"Gender",
   "Age":"Age",
   "Race":"Race",
   "Nickname":"Nickname",
   "Job":"Job",
   "EquipmentType":"EquipmentType",
   "EquipmentName":"EquipmentName",
   "Stats":{
      "Level":"Level",
      "Strength":"Strength",
      "Dexterity":"Dexterity",
      "Constitution":"Constitution",
      "Intelligence":"Intelligence",
      "Wisdom":"Wisdom",
      "Charisma":"Charisma"
   }
  "Lore":"lore"
}

Stats can be 1-30 except level can be 1-200
Just answer me the character's information and format the response JSON.`

export default async function handler(req, res) {
    // const completion = await openai.createChatCompletion({
    //     model: "gpt-3.5-turbo",
    //     messages: [
    //         {
    //             role: "system",
    //             content: systemPrompt,
    //         },
    //         {
    //             role: "user",
    //             content: "elf",
    //         },
    //     ],

    //     //   maxTokens: 1024,
    //     //   n: 1,
    //     //   stop: "\n",
    //     //   temperature: 0.7,
    // })
    // console.log(completion.data.choices[0].message.content)

    // const character = JSON.parse(completion.data.choices[0].message.content)
    const character = `{
        "FirstName":"Thorin",
        "LastName":"Oakenshield",
        "Gender":"Male",
        "Age":"175",
        "Race":"Dwarf",
        "Nickname":"The King Under the Mountain",
        "Job":"Warrior",
        "EquipmentType":"Weapon",
        "EquipmentName":"Orcrist",
        "Stats":{
           "Level":"65",
           "Strength":"25",
           "Dexterity":"10",
           "Constitution":"28",
           "Intelligence":"15",
           "Wisdom":"18",
           "Charisma":"12"
        },
        "Lore":"A descendant of the royal line of Durin, Thorin led a company of dwarves on a quest to reclaim their homeland from the dragon Smaug. He was a skilled warrior and wielded the sword Orcrist, which he found in the troll hoard."
     }`
    res.status(200).json({ character })
}
