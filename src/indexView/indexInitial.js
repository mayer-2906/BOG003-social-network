import { signIn, logInWithGoogle } from '../functionFirebase.js';
import { initial } from '../view/initial.js';

/* eslint-disable */

export const functionInitial = () => {
  const divElement = document.createElement('div');
  divElement.classList.add('divInitial');
  divElement.innerHTML = initial();
  document.addEventListener('DOMContentLoaded', () => {
/* eslint-disable */
    console.log('estoy en el indexInitial');
});

const buttonLogIn = divElement.querySelector('#logInBtn');
buttonLogIn.addEventListener('click', () => {
  userLogIn();
});

const userLogIn = async () => {
  const email = document.getElementById('logInEmail').value;
  const password = document.getElementById('logInPassword').value;
  if (email.length !== 0 && password.length !== 0) {
    await signInIndex(email, password);  
  } else {
    console.log('error de registro')
    document.getElementById('messageRegisteredUser').innerHTML = '❌ Debe llenar todos los campos';
  }
};

const buttonGoogle = divElement.querySelector('#logInGoogle');
buttonGoogle.addEventListener('click', () => {
  logInWithGoogle()
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    // This gives you a Google Access Token. You 
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    window.location.href = '#/post';
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode)
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that
    var credential = error.credential;
  });
});

const signInIndex = (email,password) =>{
  signIn(email,password)
  .then((userCredential) => {
    /* eslint-disable */
    var user = userCredential.user;
    console.log(user.email);
    window.location.href = '#/post';
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    console.log('Este es el error de firebase', errorCode)
    switch (errorCode) {
      case 'auth/invalid-email': {
        document.querySelector('#messageRegisteredUser').innerHTML = '❌ Correo inválido';
        break;
      }
      case 'auth/wrong-password': {
        document.querySelector('#messageRegisteredUser').innerHTML = '❌ Contraseña incorrecta';
        break;
      }
      case 'auth/too-many-requests': {
        document.querySelector('#messageRegisteredUser').innerHTML = '⚠ Superó los intentos válidos para ingresar';
        break;
      }
      
      case 'auth/user-not-found': {
        document.querySelector('#messageRegisteredUser').innerHTML = '❌ Usuario no registrado';
        break;
      }
      default: {
        document.querySelector('#messageRegisteredUser').innerHTML = '❌ Error inesperado, intente de nuevo';
        break;
      }
    }
  });
}

return divElement;
}
