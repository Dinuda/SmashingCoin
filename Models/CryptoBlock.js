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
        // nonce - validy check
        this.nonce = 0;

    }
    // calculate the hash of the block based on its properties
    computeHash() {
        return SHA256(
            this.index +
            this.precedingHash +
            this.timestamp +
            JSON.stringify(this.data) +
            this.nonce
        ).toString();
    }
    //algorithm identifies a number such that every block contains leading zeros
    proofOfWork(difficulty) {
        while (
            this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
        ) {
            this.nonce++;
            this.hash = this.computeHash();
        }
    }

}
module.exports = CryptoBlock;