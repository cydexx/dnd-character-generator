const { Configuration, OpenAIApi } = require("openai")

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
lore must be at least 500 character.`

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
                content: "twin fairy sisters sourcerer and barbarian ",
            },
        ],
    })
    //  console.log(completion.data.choices[0].message.content)
    //  const character = JSON.parse(completion.data.choices[0].message.content)

    res.status(200).json(completion.data.choices[0].message.content)
}
