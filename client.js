// client.js

// Expand/close the .accordionDiv > p tags
function toggleAccordion(event) {
  const accordionDiv = event.target.closest('.accordionDiv');

  accordionDiv.classList.toggle('active');

  const button = accordionDiv.querySelector('.accordionButton');

  if (accordionDiv.classList.contains('active')) {
    button.src = './assets/images/icon-minus.svg';
  } else {
    button.src = './assets/images/icon-plus.svg';
  }
}

// Keyboard navigation
function handleKeyNavigation(event) {
  const expanders = Array.from(document.querySelectorAll('.expander'));
  const currentIndex = expanders.indexOf(event.target);

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    const nextIndex = (currentIndex + 1) % expanders.length;
    expanders[nextIndex].focus();
  } else if (event.key === 'ArrowUp') {
    event.preventDefault();
    const prevIndex = (currentIndex - 1 + expanders.length) % expanders.length;
    expanders[prevIndex].focus();
  } else if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleAccordion(event);
  }
}

// On page load, attach event listeners to the .expander divs
document.addEventListener('DOMContentLoaded', function () {
  const expanders = document.querySelectorAll('.expander');

  expanders.forEach(expander => {
    expander.addEventListener('click', toggleAccordion);
    expander.addEventListener('keydown', handleKeyNavigation);
  });
});


