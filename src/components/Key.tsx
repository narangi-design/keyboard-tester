export default function Key({ symbol }: { symbol: string }) {
    return (
        <div className='key'>
            <p>{symbol}</p>
        </div>
    )
}