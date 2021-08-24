import { changeView } from './view-Controller/router.js';
//import { register } from './functionFirebase.js';

//export const dataRegister = () => {
//  console.log('llamó dataRegister');
//  let email = document.getElementById('email').value;
//  let password = document.getElementById('password').value;
//  console.log(email+' '+password);
//  register(email, password);
//};

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', () => {
  window.location.hash = '#/initial';
  init();
});
