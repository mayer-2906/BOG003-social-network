import { edit } from '../view/edit.js';

export const functionEdit = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = edit();
  const inputEdit = divElement.querySelector('#inputEdit');
  inputEdit.addEventListener('click', () => {
    window.location.href = '#/post';
  });
  return divElement;
};
