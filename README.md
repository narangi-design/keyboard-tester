# Keyboard Tester (React + TypeScript)

This is a learning project built with React and TypeScript.  
The application works as a simple keyboard tester: it listens to key presses, highlights active keys, and keeps their “pressed” state even after the key is released. The state resets only when the page is refreshed.

## Description

- Visual feedback for key presses and key releases  
- Pressed keys remain highlighted until the user manually refreshes the page  
- Intercepts most browser shortcuts  
- Exceptions:  
  - **F11** — browser fullscreen cannot be overridden  
  - **Win** key — handled by the operating system  
- Desktop-only interface  
- Supports only **ANSI 104** keyboard layout

## Future Improvements

1. Mobile device detection with a message explaining that the tool is desktop-only  
2. Automatic theme adaptation (light/dark mode)  
3. Support for additional keyboard layouts  
4. Logging pressed keys or generating reports