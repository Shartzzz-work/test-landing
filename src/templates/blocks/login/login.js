export default (formName) => {
  const loginPopup = document.querySelector('#loginPopup');

  loginPopup.dataset.name = formName;
};
