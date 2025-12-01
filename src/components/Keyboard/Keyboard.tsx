import { KeyView, KeyModel } from '../Key'
import styles from './Keyboard.module.css'

interface KeyboardDescription {
    keys: KeyModel[]
    keyStates: Map<KeyCode, KeyState>
}

export default function Keyboard(descr: KeyboardDescription) {
    return (
        <div className={styles.keyboard}>
            {descr.keys.map(k =>
                <div 
                    key={k.code}
                    className={`${styles[k.code]} ${styles[k.width]} ${styles[k.row]}`}>
                    <KeyView
                        keyModel={k}
                        state={descr.keyStates.get(k.code)}
                    />
                </div>
            )}
        </div>
    )
}