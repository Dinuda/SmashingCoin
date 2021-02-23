// Packages
const fs = require('fs')
const chalk = require('chalk')
const date = require('date-and-time');
var rn = require('random-number');

// Files
const CryptoBlockChain = require('./Models/CryptoBlockChain');
const CryptoBlock = require('./Models/CryptoBlock');

// Declarations
const now = new Date();
var gen = rn.generator({
    min: -1000
    , max: 1000
    , integer: true
})

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
smashingCoin.addNewBlock(new CryptoBlock(gen(500), date.format(now, 'YYYY/MM/DD HH:mm:ss'), { senderId: 1, recipientId: 2, quantity: 50000 }))

console.log(JSON.stringify(smashingCoin, null, 4));