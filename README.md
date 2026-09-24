askHeros:

Choose a hero. Ask a question.Learn in their style.

askHeros is a website where you can choose a superhero and ask then a question. The AI then answers the question in the style of the hero you selected.

Inspiration:

I got the idea because I thought learning with a normal AI chatbot can sometimes feel boring.

I wanted to make something where different characters explain things in different ways. For example, Spider-Man can explain something with jokes and simple examples, while Captain America can explain it more like a man on misson.

Features:
- 4 different hero personas
- Each hero has thir own personality and way of explaining things
- ask questions and get answers from the selected hero
- Dark comic-style design
- Different colors and effects for each hero
- Works on desktop, tablet and mobile
- Loading and error messages
- Animations and small interactions
- The API key is kept in the backend and not in the frontend

Tech Stack:
- Fronted: HTML, CSS, JavaScript
- Backend: Node.js, Express
- AI: Hack Club AI API

How it works:

First, the user chooses a hero and enters a quesion.

The frontend sends the question and the selected hero to the backend. The backend takes the hero information and the question, sends it to the Hack Club AI API, and then sends the answer back to the website.

I kept the information about each hero in personas.js, so I can easily change their personality or add new heros later.

Running Locally:

This projects currently runs localy.
  1. Clone or download this repository.
  2. Open the project folder in VS code.
  3. Install the packages:
npm install

  4. Create a .env file and add your HackClub AI API key:
HACKCLUB_API_KEY=your-api-key-here
  5. Start the server:
node server.js

  6. Open http://localhost:3000 in your browser.

  Don't put your real API key on GitHub.

  Project Structue
- index.html - Landing page
- app.html - Main app page
- style.css - Website styling
- app.js - Main app JavaScript
- script.js - Landing page JavaScript
- server.js - Backend and AI API connection
- personas.js - Hero information
- .env - API key
- README.md - Project README

What I learned:

This project taught me a lot because it was one of my first times working with a frontend and backend together.

I learned how the frontend can send information to a backend and how the backend can communicate with an AI API.

I also learned why API keys should not be put directly into frontend code.

While making the project, I hadto fix a lot of small mistakes like wrong varible names, missing quotes and problems between the frontend and backend.

I also learned more about GitHub and deploying a project.

Future Improvements:
- Add More heroes
- Add follow-up questions
- Let users choose their own hero imgages
- Add an "Explain like I'm 5" option
- Add a way to share answers

License:
Made for Hack Club's Stardance Program.