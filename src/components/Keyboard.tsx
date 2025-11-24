import Key from "./Key";
import {Key as KeyClass} from '../utils/key'

interface KeyboardDescription {
    keys: KeyClass[]
    pressedKeys: Set<string>
}

export default function Keyboard(descr: KeyboardDescription) {
    return (
        <div className="keyboard">
            {descr.keys.map(k =>
                <Key
                    id={k.code}
                    code={k.code}
                    symbol={k.symbol}
                    isPressed={descr.pressedKeys.has(k.code)}     
                />
            )}
        </div>
    )
}