// Expands/closes the .accordionDiv > p tags
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

// On page load, attach event listeners to the .expander divs
document.addEventListener('DOMContentLoaded', function () {

  const expanders = document.querySelectorAll('.expander');

  expanders.forEach(expander => {
    expander.addEventListener('click', toggleAccordion);
    expander.addEventListener('keydown', function(event) {

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); 
        toggleAccordion(event); 
      }
    });
  });
});

