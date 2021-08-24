import { initial } from '../view/initial.js';
import { newAccount } from '../view/newAccount.js';
import { post } from '../view/post.js';
import { edit } from '../view/edit.js';
import { errors } from '../view/404.js';
import { register } from '../functionFirebase.js';

// export const isValid = (email, confirmEmail, password, confirmPassword) => {
//   if (email === confirmEmail && password === confirmPassword) {
//     return true;
//   }
//   return false;
// };

export const dataRegister = () => {
  console.log('llamó dataRegister');
  const email = document.getElementById('email').value;
  const confirmEmail = document.getElementById('confirmEmail').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  console.log(email +''+ confirmEmail);
  console.log(password + '' + confirmPassword);
  if (email === confirmEmail && password === confirmPassword) {
    register(email, password);
  } else {
    alert('verifique');
    document.getElementById('errorMessage').innerHTML = 'Verifique el correo y contraseña';
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
      return container.appendChild(initial());
    }
    case '#/newAccount': {
      container.appendChild(newAccount());
      const inputLogin = document.getElementById('signIn');
      inputLogin.addEventListener('click', () => {
        dataRegister();
        // const valid = dataRegister();
        // if (valid) {
        //   console.log('entre a valid: '+ valid);
        //   // document.getElementById('singIn').removeAttribute('onclick');
        //   document
        //     .getElementById('singIn')
        //     .setAttribute('onclick', "location.href='#/initial");
        // }
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
