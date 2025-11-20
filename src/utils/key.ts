import keys from '../keyboard-codes.json';

export default class Key {
    code: string
    symbol: string

    constructor(code: string) {
        this.code = code
        this.symbol = Key.getSymbol(this.code)
    }

    static getSymbol(keyCode: string) {
        const targetKey = keys.find(k => k.Code === keyCode)
        return targetKey ? targetKey.Symbol : ''
    }

    static getAllKeys() {
        let allKeys = []
        for (const k of keys) {
            allKeys.push(new Key(k.Code))
        }
        return allKeys;
    }
}

const allKeys = Key.getAllKeys()
console.log(allKeys)

export function getKeySymbols() {
    let keySymbols =[]
    for (const k of allKeys) {
        keySymbols.push(k.symbol)
    }
    return keySymbols
}