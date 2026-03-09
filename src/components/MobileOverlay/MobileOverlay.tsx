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
        <img
          className={styles.icon}
          src={`${import.meta.env.BASE_URL}logo-300.svg`}
          alt="Keyboard Tester logo"
        />
        <h2>Desktop only</h2>
        <p>
          Unfortunately, the keyboard tester currently only works on desktop computers.
          Please open this website on a PC or laptop.
        </p>
        <button className={styles.shareButton} onClick={handleShare}>
          Share link
        </button>
        <p>This is a learning project for mastering TypeScript and React. The application is designed for desktop use only and currently only checks ANSI-104 standard keyboards.</p>
        <p>Check out the <a href="https://github.com/narangi-design/keyboard-tester">project repository on GitHub</a>.</p>
      </div>
    </div>
  )
}