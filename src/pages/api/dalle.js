import { Dalle } from "dalle-node"

const dalle = new Dalle("sess-xxxxxxxxxxxxxxxxxxxxxxxxx") // Bearer Token

;(async () => {
    const generations = await dalle.generate("a cat driving a car")

    console.log(generations)
})()
res.status(200).json({ character })
