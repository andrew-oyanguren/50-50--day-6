// Variables and Selectors
const boxes = document.querySelectorAll('.box');

// Event Listeners
window.addEventListener('scroll', checkBoxes);

// Functions
function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}
