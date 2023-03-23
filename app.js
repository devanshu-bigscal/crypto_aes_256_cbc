const crypto = require("crypto")

const algo = "aes-256-cbc"

const name = "devanshu"

const secret = crypto.randomBytes(32)

const initVector = crypto.randomBytes(16)




//encryption

const cipher = crypto.createCipheriv(algo, secret, initVector)

let encrypt = cipher.update(name, "utf-8", "hex")

encrypt += cipher.final("hex")

console.log(encrypt)




// decryption

const deCipher = crypto.createDecipheriv(algo, secret, initVector)

let decrypt = deCipher.update(encrypt, "hex", "utf-8")

decrypt += deCipher.final("utf-8")

console.log(decrypt)











































