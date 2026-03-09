import { KeyModel } from '../../src/components/Key'


test('KeyModel should build a model from JSON fields.', () => {
    const jsonFields = {
        Code: 'ShiftLeft',
        Symbol: 'Shift',
        Width: 'w-10',
        Row: 'r-5'
    }

    const key = new KeyModel(jsonFields)

    expect(key.code).toBe('ShiftLeft')
    expect(key.symbol).toBe('Shift')
    expect(key.width).toBe('w-10')
    expect(key.row).toBe('r-5')
})

test('getAllKeys() should return an array of KeyModel instances.', () => {
    const keys = KeyModel.getAllKeys()
    expect(Array.isArray(keys)).toBe(true)
    expect(keys[0]).toBeInstanceOf(KeyModel)
})
