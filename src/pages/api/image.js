import { Configuration, OpenAIApi } from "openai"
// import axios from "axios"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
    const imagePrompt = `
    renaissance style, high-elf, white hair, wearing steel armor with bow, beautiful 3ds max render
    `

    const response = await openai.createImage({
        //Image for later
        prompt: imagePrompt,
        n: 1,
        size: "1024x1024",
    })

    const characterImageURL = response.data.data[0].url

    res.status(200).json({ characterImageURL })
}
