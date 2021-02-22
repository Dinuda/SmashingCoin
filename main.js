// Packages
const fs = require('fs')
const chalk = require('chalk')

// Files
const CryptoBlockChain = require('./Models/CryptoBlockChain');
const CryptoBlock = require('./Models/CryptoBlock');

const loadAccountBalance = () => {
    try {
        const dataBuffer = fs.readFileSync('Accounts/Dinuda.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}


let smashingCoin = new CryptoBlockChain();
smashingCoin.addNewBlock(new CryptoBlock(1, "2/20/2021", { sender: "Dinuda Yaggahavita", recipient: "Lehan Gajanayake", quantity: 200 }))
smashingCoin.addNewBlock(new CryptoBlock(2, "2/21/2021", { sender: "Lehan Gajanayake", recipient: "Uvindu Pathirana", quantity: 150 }))
smashingCoin.addNewBlock(new CryptoBlock(2, "2/22/2021", { sender: "Uvindu Pathirana", recipient: "Tarith Jayasooriya", quantity: 100 }))

console.log(JSON.stringify(smashingCoin, null, 4));