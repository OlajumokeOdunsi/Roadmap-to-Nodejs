const fs = require("fs")
const textIn = fs.readFileSync('./txt/input.txt', "utf-8")
console.log(textIn);

const textOut = `This is what i understand with writin fiel:${textIn}\n created on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOut)
console.log("file written");