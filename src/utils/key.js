import keys from '../../src/keyboard-codes.json';

export default class Key {
    constructor(code) {
        this.code = code
        this.symbol = this.getSymbol()
    }

    getSymbol() {

    }
}  

export function getKeys() {
    return [keys[50].Symbol, keys[23].Symbol,"KeyE","KeyR"]
}