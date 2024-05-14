let currentIndex = 0

function showSlide(index) {
  const slides = document.querySelectorAll('.carousel-item')
  const totalSlides = slides.length

  if (index >= totalSlides) {
    currentIndex = 0
  } else if (index < 0) {
    currentIndex = totalSlides - 1
  } else {
    currentIndex = index
  }

  const offset = -currentIndex * 100
  document.querySelector(
    '.carousel-inner'
  ).style.transform = `translateX(${offset}%)`

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentIndex)
  })
}

function moveSlide(direction) {
  showSlide(currentIndex + direction)
}

document.querySelector('.prev').addEventListener('click', () => {
  moveSlide(-1)
})

document.querySelector('.next').addEventListener('click', () => {
  moveSlide(1)
})

// Initialize the carousel
showSlide(currentIndex)
