const SHA256 = require('crypto-js/sha256')

class CryptoBlock {
    constructor(index, timestamp, data, precedingHash = " ") {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.precedingHash = precedingHash;
        this.hash = this.computeHash();
    }
    computeHash() {
        return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringif(this.data)).toString();
    }
}