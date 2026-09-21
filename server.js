require('dotenv').config();
const express = require('express');
const { personas, buildPrompt } = require('./personas');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.send('Hello from askHeros backend!');
});

app.post('/ask', async (req, res) => {
  const { personaKey, question } = req.body;

  const prompt = buildPrompt(personaKey, question);

  if (!prompt) {
    return res.status(400).json({ error: 'Invalid persona selected.' });
  }

  try {
    const response = await fetch('https://ai.hackclub.com/proxy/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HACKCLUB_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'qwen/qwen3-32b',
        messages: [
          { role: 'system', content: prompt.systemInstructions },
          { role: 'user', content: prompt.userQuestion }
        ]
      })
    });

    const data = await response.json();
    console.log(data);
    const answer = data.choices[0].message.content;

    res.json({ answer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});