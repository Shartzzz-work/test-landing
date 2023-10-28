import cat from '../../templates/blocks/cat/cat';
import { createApps, firstLoad, firstScroll } from '../../templates/blocks/gadgets/gadgets';

let scrollValue = 0;

document.addEventListener('wheel', (e) => {
  const wheelDeltaY = e.deltaY;
  const companyNameInput = document.querySelector('[name="companyName"]');
  const catHTML = document.querySelector('#cat');
  const catImg = document.querySelector('#catImg');
  scrollValue += 100 / wheelDeltaY / 10;

  if (scrollValue < 0) {
    scrollValue = 0;
  }

  // if (scrollValue <= 1 && scrollValue >= 0) {

  // }

  if (scrollValue <= 1) {
    firstScroll(scrollValue);
    catHTML.classList.remove('active');
    companyNameInput.classList.remove('alert');
  }

  if (
    scrollValue >= 0.9 &&
    companyNameInput &&
    companyNameInput.value === '' &&
    catImg.src !== '/assets/img/ginger-cat-sad.png'
  ) {
    cat('show', 'companyEmpty');
    companyNameInput.classList.add('alert');
  }

  if (scrollValue >= 1.5) {
    scrollValue = 1.5;
    createApps();
    document.querySelector('body').classList.add('scroll');
  } else if (!companyNameInput) {
    firstLoad();
    firstScroll(scrollValue);
    document.querySelector('body').classList.remove('scroll');
  }

  console.log(scrollValue);
});
