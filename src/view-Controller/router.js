import { initial } from '../view/initial.js';
import { newAccount } from '../view/newAccount.js';
import { post } from '../view/post.js';
import { edit } from '../view/edit.js';
import { errors } from '../view/404.js';
import { register, signIn } from '../functionFirebase.js';

export const dataRegister = () => {
  const email = document.getElementById('email').value;
  const confirmEmail = document.getElementById('confirmEmail').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  console.log(email +''+ confirmEmail);
  console.log(password + '' + confirmPassword);
  if (email.length !== 0 && confirmEmail.length !== 0 && password.length !== 0 && confirmPassword.length !== 0) {
    if (email === confirmEmail && password === confirmPassword) {
      register(email, password);
    } else {
      document.getElementById('errorMessage').innerHTML = '⚠ Verifique el correo y contraseña';
    }
  } else {
    document.getElementById('errorMessage').innerHTML = '❌ Debe llenar todos los campos';
  }
};
const userLogIn = () => {
  const email = document.getElementById('logInEmail').value;
  const password = document.getElementById('logInPassword').value;
  if (email.length !== 0 && password.length !== 0) {
    signIn(email, password);
    // window.location.href = '#/post';
  } else {
    window.location.href = '#/initial';
    alert('Verfique');
    document.getElementById('messageRegisteredUser').innerHTML = '❌ Debe llenar todos los campos';
  }
};

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
        userLogIn();
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
