export default (HTML) => {
  const popup = document.querySelector('#popup');
  popup.classList.add('active');

  popup.innerHTML = HTML;
};
