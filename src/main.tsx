import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <StrictMode>
    <div className="layout">
      <h1>Test your keyboard</h1>
      <p>1. F11 won't light up, but you'll know it works when the browser goes fullscreen. :&#41;</p>
      <p>2. The Windows key will only light up as pressed and steal the focus from the window.</p>
      <App />
    </div>
    <footer>
      <p>This is a learning project for mastering TypeScript and React. The application is designed for desktop use only and currently only checks ANSI-104 standard keyboards.</p>
      <p>Check out the <a href="https://github.com/narangi-design/keyboard-tester">project repository on GitHub</a>.</p>
    </footer>
  </StrictMode>,
)