// Packages
const fs = require('fs')
const chalk = require('chalk')
const date = require('date-and-time');

// Files
const CryptoBlockChain = require('./Models/CryptoBlockChain');
const CryptoBlock = require('./Models/CryptoBlock');

// Declarations
const now = new Date();

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
smashingCoin.addNewBlock(new CryptoBlock(1, date.format(now, 'YYYY/MM/DD HH:mm:ss'), { sender: "Dinuda Yaggahavita", recipient: "Lehan Gajanayake", quantity: 200 }))

console.log(JSON.stringify(smashingCoin, null, 4));