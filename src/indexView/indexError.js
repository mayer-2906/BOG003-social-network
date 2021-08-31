import { errors } from '../view/404.js';

export const functionErrors = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = errors();
  return divElement;
// eslint-disable-next-line semi
}
