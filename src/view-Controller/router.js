import { initial } from '../view/initial.js';
import { newAccount } from '../view/newAccount.js';
import { post } from '../view/post.js';
import { edit } from '../view/edit.js';
import { errors } from '../view/404.js';
import { register } from '../functionFirebase.js';

export const isValid = (email,confirmEmail,password,confirmPassword) => {

  if (email == confirmEmail && password == confirmPassword) {
    return true;
  }
  else{
    return false;
  }
}

export const dataRegister = () => {
    console.log('llamó dataRegister');
    let email = document.getElementById('email').value;
    let confirmEmail = document.getElementById('confirmEmail').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    console.log(email+' '+confirmEmail);
    console.log(password+'  '+confirmPassword);
    let valid = isValid(email, confirmEmail, password, confirmPassword);
    console.log(valid);
    if(valid){
      let validacion = register(email, password);
      if(validacion){
        window.location.href="#/initial";
        return true;
      }       
    } else {
      alert('verifique');
      document.getElementById('errorMessage').innerHTML = 'Verifique el correo y contraseña';
      return false;
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
        let valid=dataRegister();
        if(valid){
          window.location.href="#/initial";
          return container;
        } else{
          return container;
        }
      });
      break;
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
