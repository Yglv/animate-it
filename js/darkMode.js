/* eslint one-var: ["error", "always"] */

const sun = document.querySelector('.content__sun'),
  moon = document.querySelector('.content__moon'),
  wrapper = document.querySelector('.wrapper'),
  title = document.querySelector('.content__title'),
  darkButton = document.querySelector('.content__button')

sun.addEventListener('click', () => {
  title.classList.remove('content__title')
  darkButton.classList.remove('content__button')
  wrapper.classList.add('wrapper--dark')
  title.classList.add('content__title--dark')
  darkButton.classList.add('content__button--dark')
  moon.style.visibility = 'visible'
  sun.style.visibility = 'hidden'
})

moon.addEventListener('click', () => {
  wrapper.classList.remove('wrapper--dark')
  title.classList.remove('content__title--dark')
  darkButton.classList.remove('content__button--dark')
  title.classList.add('content__title')
  darkButton.classList.add('content__button')
  moon.style.visibility = 'hidden'
  sun.style.visibility = 'visible'
})
