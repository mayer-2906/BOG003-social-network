import { signIn, logInWithGoogle } from '../functionFirebase.js';
import { initial } from '../view/initial.js';

export const functionInitial = () => {
  const divElement = document.createElement('div');
  divElement.classList.add('divInitial');
  divElement.innerHTML = initial();

  const cleanInitial = () => {
    document.querySelector('#logInEmail').value = '';
    document.querySelector('#logInPassword').value = '';
    document.querySelector('#messageRegisteredUser').innerHTML = '';
  };

  const signInIndex = (email, password) => {
    signIn(email, password)
      .then(() => {
        cleanInitial();
        const verified = firebase.auth().currentUser.emailVerified;
        if (verified) {
          window.location.href = '#/post';
        } else {
          console.log(firebase.auth().currentUser);
          document.querySelector('#messageRegisteredUser').innerHTML = '⚠ Correo no verificado';
        }
      })
      .catch((error) => {
        const errorCode = error.code;
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
  };

  const userLogIn = async () => {
    const email = document.getElementById('logInEmail').value;
    const password = document.getElementById('logInPassword').value;
    if (email.length !== 0 && password.length !== 0) {
      await signInIndex(email, password);
    } else {
      document.getElementById('messageRegisteredUser').innerHTML = '❌ Debe llenar todos los campos';
    }
  };

  const buttonLogIn = divElement.querySelector('#logInBtn');
  buttonLogIn.addEventListener('click', () => {
    userLogIn();
  });

  const buttonGoogle = divElement.querySelector('#logInGoogle');
  buttonGoogle.addEventListener('click', () => {
    logInWithGoogle()
      .then(() => {
        cleanInitial();
        window.location.href = '#/post';
      }).catch(() => {
        document.querySelector('#messageRegisteredUser').innerHTML = '❌ Error inesperado, intente de nuevo';
      });
  });

  return divElement;
};
