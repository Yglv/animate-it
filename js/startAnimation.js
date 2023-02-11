/* eslint one-var: ["error", "always"] */

const titleOfAnimation = document.querySelector('.content__title'),
  button = document.querySelector('.content__button');

button.addEventListener('click', () => {
  const typeOfAnimation = document.querySelector('.content__select').value;
  titleOfAnimation.classList.add(typeOfAnimation);
  setTimeout(() => titleOfAnimation.classList.remove(typeOfAnimation), 2000);
})
