import styles from './MobileOverlay.module.css'

function handleShare() {
  const url = window.location.href
  if (navigator.share) {
    navigator.share({ title: 'Keyboard Tester', url })
  } else {
    navigator.clipboard.writeText(url).then(() => {
      alert('Link is copied!')
    })
  }
}

export function MobileOverlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.icon}>⌨️</div>
        <h2 className={styles.title}>Только для десктопа</h2>
        <p className={styles.text}>
          Unfortunately, the keyboard tester currently only works on desktop computers.
          Please open this website on a PC or laptop.
        </p>
        <button className={styles.shareButton} onClick={handleShare}>
          Share link
        </button>
      </div>
    </div>
  )
}
