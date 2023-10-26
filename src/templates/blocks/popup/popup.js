export default (HTML) => {
  const popup = document.querySelector('#popup');
  popup.classList.add('active');

  popup.innerHTML = HTML;

  popup.addEventListener('click', (e) => {
    if (e.target.name === 'closePopup' || e.target.id === 'popup') {
      popup.classList.remove('active');
    }
  });
};
