# askHeros

**Choose a hero. Ask a question. Learn like never before.**

askHeros is a web app where you pick a superhero persona and ask any question — the AI answers in that hero's unique voice, tone, and teaching style, powered by a custom-built prompt architecture.

## Inspiration

Learning is more fun when it feels alive. Instead of a plain AI chatbot, askHeros turns explanations into an interactive, character-driven experience — Spider-Man explains atoms with jokes and web-slinging analogies, Captain America breaks it down step-by-step like a mission briefing, and so on.

## Features

- 4 unique hero personas, each with a distinct tone, teaching style, and visual identity
- Persona-aware AI responses generated through a structured backend prompt system (not just simple string concatenation)
- Dark, comic-inspired UI with per-hero accent colors and glow effects
- Fully responsive design (desktop, tablet, mobile)
- Loading, empty, and error states
- Smooth entrance animations and micro-interactions
- Secure backend architecture — API key never exposed to the frontend

## Tech Stack

- **Frontend:** HTML, CSS, vanilla JavaScript
- **Backend:** Node.js, Express
- **AI:** Hack Club AI API (ai.hackclub.com)

## Architecture

Browser (HTML/CSS/JS) sends a request to the Backend (Node.js + Express), which builds a structured prompt from the selected hero's persona config, sends it to the Hack Club AI API, and returns the formatted answer back to the Browser.

Persona instructions are stored as structured configuration data (personas.js), separate from the user's raw question — this keeps each hero's personality consistent and makes it harder for user input to override the intended behavior.

## Running Locally

No live link — this project runs locally. Steps to try it:

1. Clone or download this repository.
2. Install dependencies: npm install
3. Create a .env file in the root folder with: HACKCLUB_API_KEY=your-api-key-here (get a free key at ai.hackclub.com, free for Hack Club members)
4. Start the server: node server.js
5. Open your browser to: http://localhost:3000

## Project Structure

- index.html - Landing page
- app.html - Main app screen (hero select, question, answer)
- style.css - All styling
- app.js - Frontend logic for the app screen
- script.js - Frontend logic for the landing page
- server.js - Express backend + AI API integration
- personas.js - Hero persona configs + prompt builder
- .env - API key (not committed to Git)
- README.md - This file

## What I Learned

Building askHeros taught me how frontend and backend communicate through APIs, why API keys must never be exposed in frontend code, how to design a structured prompt system instead of just concatenating strings, and how to build a cohesive, responsive, animated UI from scratch.

## Future Improvements

- Follow-up questions within the same persona (conversation memory)
- More hero personas
- User-uploaded custom hero images
- "Explain like I'm 5" difficulty toggle
- Shareable/copyable answer cards

## License

Built for Hack Club's Stardance program. Educational project.