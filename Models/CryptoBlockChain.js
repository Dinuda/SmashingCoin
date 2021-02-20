// Import CryptoBlock
const CryptoBlock = require('./CryptoBlock');

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
module.exports = CryptoBlockChain;