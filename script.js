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

// Event listener for background click
videoContainer.addEventListener('click', () => {

  document.getElementById('videoOverlay').style.display = 'flex';
});
  