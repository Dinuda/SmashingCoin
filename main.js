const SHA256 = require('crypto-js/sha256') // imported to calculate the hash of each block

class CryptoBlock {
    constructor(index, timestamp, data, precedingHash = " ") {
        // unique number that tracks the position of the block in the chain
        this.index = index;
        // Keeps a record of time the transaction transacted
        this.timestamp = timestamp;
        // Data about transaction
        this.data = data;
        // It points to the hash of the preceding block in the blockchain, something important in maintaining the blockchain’s integrity.
        this.precedingHash = precedingHash;
        this.hash = this.computeHash();
    }
    // calculate the hash of the block based on its properties
    computeHash() {
        return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class CryptoBlockChain {
    constructor() {
        // array of blocks
        this.blockchain = [this.startGenesisBlock()];
    }
    // refers to the first ever block created in the blockchain
    startGenesisBlock() {
        // initial block
        return new CryptoBlock(0, "01/01/2020", "Initial Block in the Chain", "0");
    }
    // Getting the latest block in the blockchain assists in ensuring the hash of the current block points to the hash of the previous block therefore maintaining the chain’s integrity.
    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }
    // method to add a new block to the chain
    addNewBlock(newBlock) {
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();
        this.blockchain.push(newBlock);
    }
}

let smashingCoin = new CryptoBlockChain();
smashingCoin.addNewBlock(new CryptoBlock(1, "2/20/2021", { sender: "Dinuda Yaggahavita", recipient: "Lehan Gajanayake", quantity: 200 }))
smashingCoin.addNewBlock(new CryptoBlock(2, "2/21/2021", { sender: "Lehan Gajanayake", recipient: "", quantity: 150 }))
smashingCoin.addNewBlock(new CryptoBlock(2, "2/21/2021", { sender: "Uvindu Pathirana", recipient: "Tarith Jayasooriya", quantity: 100 }))

console.log(JSON.stringify(smashingCoin, null, 4));