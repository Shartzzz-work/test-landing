import cat from '../../templates/blocks/cat/cat';
import createApps from '../../templates/blocks/gadgets/blocks/laptop/blocks/create_apps/createApps';
import login from '../../templates/blocks/login/login';
import popup from '../../templates/blocks/popup/popup';
import loginPopupHTML from '../../templates/elements/popup/jsHTML/loginPopupHTML';
import makeOrder from '../../templates/elements/popup/jsHTML/makeOrder';

document.addEventListener('click', (e) => {
  switch (true) {
    case e.target.name === 'makeOrder':
      popup(makeOrder());
      break;
    case e.target.name === 'login':
      popup(loginPopupHTML());
      break;
    case e.target.name === 'goForgot':
    case e.target.dataset.goForm === 'forgot':
      login('forgot');
      break;
    case e.target.name === 'goSignin':
    case e.target.dataset.goForm === 'signin':
      login('signin');
      break;
    case e.target.name === 'goRegister':
    case e.target.dataset.goForm === 'register':
      login('register');
      break;
    case e.target.name === 'getCompany':
      e.preventDefault();
      createApps(e.target.parentNode);
      cat('hide');
      break;
    case (document.querySelector('#cat').classList.contains('active') &&
      !e.target.closest('#cat') &&
      !e.target.classList.contains('footnote') &&
      !e.target.classList.contains('material-checkbox')) ||
      e.target.name === 'closeCat':
      cat('hide');
      break;

    default:
      break;
  }
});
