import prompt from "prompt"

import PromptSchemaMainPrompt from "./prompts-schema/schema-main.js"
import createQRCode from "./services/qr-code/create.js"

import createPassword from "./services/password/create.js"

(async function main(){
    prompt.get(PromptSchemaMainPrompt, async (err, choose) =>{
        if(err) console.log(err)

        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPassword();
    })
    prompt.start()
})()