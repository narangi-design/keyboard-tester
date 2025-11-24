interface KeyDescription {
    id: string
    code: string
    symbol: string
    isPressed: boolean
}

export default function Key(descr: KeyDescription) {
    return (
        <div className={`key ${descr.isPressed? 'pressed' : ''}`}>
            <p>{descr.symbol}</p>
        </div>
    )
}