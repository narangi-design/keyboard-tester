import keys from '../../data/keyboard-codes-ANSI104.json';

type KeyDefinition = {
  Symbol: string
  Code: KeyCode
  Width: string
  Row: string
}

export default class KeyModel {
    code: KeyCode
    symbol: string
    width: string
    row: string

    constructor(definition: KeyDefinition) {
        this.code = definition.Code
        this.symbol = definition.Symbol
        this.width = definition.Width
        this.row = definition.Row
    }

    static getAllKeys() {
        return keys.map(definiton => new KeyModel(definiton))
    }
}