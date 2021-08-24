import { initial } from '../view/initial.js';
import { newAccount } from '../view/newAccount.js';
import { post } from '../view/post.js';
import { edit } from '../view/edit.js';
import { errors } from '../view/404.js';
import { register } from '../functionFirebase.js';

export const dataRegister = () => {
  console.log('llamó dataRegister');
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  console.log(email+' '+password);
  register(email, password);
};

export const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case './src/index.html': {
      return container.appendChild(initial());
    }
    case '#/initial': {
      return container.appendChild(initial());
    }
    case '#/newAccount': {
      container.appendChild(newAccount());
      const inputLogin = document.getElementById('signIn');
      inputLogin.addEventListener('click', dataRegister);
      return container;
    }
    case '#/post': {
      return container.appendChild(post());
    }
    case '#/edit': {
      return container.appendChild(edit());
    }
    default: {
      return container.appendChild(errors());
    }
  }
};
