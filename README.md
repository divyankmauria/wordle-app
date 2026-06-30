# Wordle App

A React + Vite implementation of the Wordle word game.

## Wordle Functionality

- Players get six attempts to guess a five-letter word.
- Keyboard input fills the current guess row with lowercase letters.
- Backspace removes the most recent letter from the active guess.
- Enter submits the guess after validating that it is a five-letter allowed word.
- Submitted guesses show tile feedback:
  - `correct`: the letter is in the right position ✅
  - `present`: the letter is in the word but in a different position ❓
  - `absent`: the letter is not in the word ❌
- Invalid guesses display an `Invalid Word` message.
- The answer is selected from the answer list based on the current day.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```
