import allKeyCodes from '../data/all-key-codes.json'

declare global {
    type KeyState = 'untested' | 'pressed' | 'tested'
    type KeyCode = (typeof allKeyCodes)[number]['Code']
}

export {}