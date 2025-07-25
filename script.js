const typewriterText = document.getElementById("typewriter-text");
const words = ["LEARNER", "DEVELOPER", "IDEALIZER"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  const visibleText = currentWord.substring(0, charIndex);
  typewriterText.textContent = visibleText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(type, 150);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 80);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(type, 1000); // pause before delete
    } else {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, 400); // pause before next
    }
  }
}

type();
