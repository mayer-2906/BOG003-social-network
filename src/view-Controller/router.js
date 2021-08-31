import { initial } from '../view/initial.js';
import { newAccount } from '../view/newAccount.js';
import { post } from '../view/post.js';
import { edit } from '../view/edit.js';
import { errors } from '../view/404.js';
import {
  signInIndex,
  logInGoogleIndex,
  dataRegister,
  signOutIndex,
}
  from '../index.js';

export const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case './src/index.html': {
      return container.appendChild(initial());
    }
    case '#/initial': {
      container.appendChild(initial());
      const buttonLogIn = document.getElementById('logInBtn');
      buttonLogIn.addEventListener('click', () => {
        signInIndex();
      });
      const buttonGoogle = document.getElementById('logInGoogle');
      buttonGoogle.addEventListener('click', () => {
        logInGoogleIndex();
      });
      return container;
    }
    case '#/newAccount': {
      container.appendChild(newAccount());
      const inputLogin = document.getElementById('signIn');
      inputLogin.addEventListener('click', () => {
        dataRegister();
      });
      return container;
    }
    case '#/post': {
      container.appendChild(post());
      const buttonSignOut = document.getElementById('signOut');
      buttonSignOut.addEventListener('click', () => {
        signOutIndex();
      });
      return container;
    }
    case '#/edit': {
      return container.appendChild(edit());
    }
    default: {
      return container.appendChild(errors());
    }
  }
};
