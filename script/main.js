const beginning = document.querySelector('.beginning')

beginning.addEventListener('click', function() {
  beginning.classList.remove('active')
  document.querySelector('body').classList.remove('active')
})