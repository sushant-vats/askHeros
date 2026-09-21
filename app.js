let selectedPersona = null;

const heroCards = document.querySelectorAll('.hero-card');
const askBtn = document.getElementById('askBtn');
const questionInput = document.getElementById('questionInput');
const answerText = document.getElementById('answerText');
const answerSection = document.getElementById('answerSection');

heroCards.forEach(card => {
  card.addEventListener('click', () => {
    heroCards.forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    selectedPersona = card.dataset.persona;
    document.body.setAttribute('data-active-hero', selectedPersona);
  });
});

function formatAnswer(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br>');
}

askBtn.addEventListener('click', async () => {
  const question = questionInput.value.trim();

  if (!selectedPersona) {
    answerText.textContent = 'Please select a hero first!';
    return;
  }

  if (!question) {
    answerText.textContent = 'Please type a question!';
    return;
  }

  answerSection.classList.remove('error');
  answerSection.classList.add('loading');
  answerText.innerHTML = '<span class="loading-text">Thinking...</span>';
  askBtn.disabled = true;

  try {
    const response = await fetch('/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ personaKey: selectedPersona, question })
    });

    const data = await response.json();
    answerText.classList.remove('answer-reveal');
    void answerText.offsetWidth;
    answerText.innerHTML = data.answer ? formatAnswer(data.answer) : (data.error || 'Something went wrong.');
    answerText.classList.add('answer-reveal');
  } catch (error) {
    answerText.textContent = 'Error: ' + error.message;
    answerSection.classList.add('error');
  } finally {
    answerSection.classList.remove('loading');
    askBtn.disabled = false;
  }
});

questionInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    askBtn.click();
  }
});