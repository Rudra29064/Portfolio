const phrases = [
  'Software Engineer',
  'React • Node.js • MongoDB',
  'Building AI-Powered Applications',
];

let phraseIndex = 0;
let charIndex   = 0;
let isDeleting  = false;

const typedEl = document.getElementById('typed-text');

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    typedEl.textContent = currentPhrase.slice(0, ++charIndex);

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = currentPhrase.slice(0, --charIndex);

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(type, isDeleting ? 45 : 90);
}

setTimeout(type, 1400);