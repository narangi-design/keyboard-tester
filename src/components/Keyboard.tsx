import Key from "./Key";

export default function Keyboard({ keys }: { keys: string[] }) {
    return (
        <div className="keyboard">
            {keys.map(key =>
                <Key key={key} symbol={key}></Key>
            )}
        </div>
    )
}