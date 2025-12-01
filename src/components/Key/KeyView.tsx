import KeyModel from './key-model'
import styles from './KeyView.module.css'

interface KeyDescription {
    keyModel: KeyModel
    state?: KeyState
}

export default function KeyView(descr: KeyDescription) {
    let keyModel = descr.keyModel
    return (
        <div
            className={`${styles.key} ${descr.state ? styles[descr.state] : ''}`}
            data-code={`${keyModel.code}`}>
            <p>{keyModel.symbol}</p>
        </div>
    )
}