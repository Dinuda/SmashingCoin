// Imports

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
        return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringif(this.data)).toString();
    }
}