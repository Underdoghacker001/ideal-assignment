function toggleText() {
  const toggleSwitch = document.getElementById('toggleSwitch');
  const newToBankText = document.getElementById('newToBankText');
  const existingToBankText = document.getElementById('existingToBankText');

  if (toggleSwitch.checked) {
    newToBankText.classList.remove('active');
    existingToBankText.classList.add('active');
  } else {
    existingToBankText.classList.remove('active');
    newToBankText.classList.add('active');
  }
}

const videoContainer = document.getElementById('videoContainer');


videoContainer.addEventListener('click', () => {

  document.getElementById('videoOverlay').style.display = 'flex';
});

function updateSpanTextOnResize() {
  const spans = document.querySelectorAll('.list-text .text-color');

  if (window.matchMedia("(max-width: 500px)").matches) {
    if (spans.length >= 3) {
      spans[0].textContent = "Lorem ipsum color zepet";
      spans[1].textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing";
      spans[2].textContent = "Lorem ipsum color zepet adipisicing";
    }
  } else {
    if (spans.length >= 3) {
      spans[0].textContent = "Click here or visit your nearest";
      spans[1].textContent = "Provide basic details such as name, mobile number, PAN and check your credit card eligibility";
      spans[2].textContent = "Select from our wide range of credit card offers and complete your application";
    }
  }
}

updateSpanTextOnResize();

window.addEventListener("resize", updateSpanTextOnResize);


const cardContainer = document.querySelector(".unlearn-card-container");

cardContainer.addEventListener("scroll", () => {

});


  