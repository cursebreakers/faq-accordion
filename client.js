// client.js

// 1. Create a function that expands/closes the .accordionDiv > p tags
function toggleAccordion(event) {
  // Get the parent div of the clicked expander (the .accordionDiv)
  const accordionDiv = event.target.closest('.accordionDiv');

  // Toggle the 'active' class on the accordionDiv
  accordionDiv.classList.toggle('active');

  // If the accordion is expanded, update the button image
  const button = accordionDiv.querySelector('.accordionButton');
  if (accordionDiv.classList.contains('active')) {
    button.src = './assets/images/icon-minus.svg';  // Change to minus when expanded
  } else {
    button.src = './assets/images/icon-plus.svg';  // Change to plus when collapsed
  }
}

// 2. On page load, attach event listeners to the .expander divs that call the expand/close function
document.addEventListener('DOMContentLoaded', function () {
  // Select all the .expander divs
  const expanders = document.querySelectorAll('.expander');

  // Attach the toggleAccordion function as a click event listener on each .expander
  expanders.forEach(expander => {
    expander.addEventListener('click', toggleAccordion);
  });
});

