const gadgetsHTML = document.querySelector('#gadgets');
const scrollHTML = document.querySelector('#scroll');

const gadgetsHTMLBound = gadgetsHTML.getBoundingClientRect();

scrollHTML.style.height = `${gadgetsHTMLBound.height}px`;

const scrollHeight = scrollHTML.getBoundingClientRect().bottom - gadgetsHTMLBound.bottom;

const titleHTML = document.querySelector('.title');
const getCompanyHTML = document.querySelector('.get_company');

document.addEventListener('scroll', () => {
  const scrollHTMLBound = scrollHTML.getBoundingClientRect();

  const scrollDifference = scrollHTMLBound.bottom - gadgetsHTMLBound.bottom;

  const scrollPercent = (scrollDifference / scrollHeight) * 100;

  const scrollPercentPlus = 1 - scrollPercent / 100;

  if (scrollDifference >= 0 && scrollDifference < scrollHeight) {
    titleHTML.style = `transform: scale(${scrollPercentPlus + 1});opacity: ${
      scrollPercent / 100
    };position: absolute;left: 0;top: 0`;

    getCompanyHTML.style = `transform: scale(${scrollPercentPlus});opacity: ${scrollPercentPlus}`;
  } else if (scrollDifference < 0) {
    titleHTML.style = `transform: scale(2});opacity: 0;position: absolute`;

    getCompanyHTML.style = `transform: scale(1);opacity: 1`;
  }
});
