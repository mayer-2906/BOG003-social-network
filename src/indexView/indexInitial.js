import { signIn } from '../functionFirebase.js';

window.addEventListener('Load', () => {
/* eslint-disable */
    console.log('estoy en el indexInitial');
});

const buttonLogIn = document.getElementById('logInBtn');
buttonLogIn.addEventListener('click', () => {
  userLogIn();
});

const userLogIn = () => {
  const email = document.getElementById('logInEmail').value;
  const password = document.getElementById('logInPassword').value;
  if (email.length !== 0 && password.length !== 0) {
    signInIndex(email, password);  
  } else {
    document.getElementById('messageRegisteredUser').innerHTML = '❌ Debe llenar todos los campos';
  }
};

const buttonGoogle = document.getElementById('logInGoogle');
buttonGoogle.addEventListener('click', () => {
  logInWithGoogle();
});

export const signInIndex = async (email,password) =>{
  await signIn(email,password)
  .then((userCredential) => {
    /* eslint-disable */
    var user = userCredential.user;
    console.log(user.email);
    window.location.href = '#/post';
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    switch (errorCode) {
      case 'auth/invalid-email': {
        document.getElementById('messageRegisteredUser').innerHTML = '❌ Correo inválido';
        break;
      }
      case 'auth/wrong-password': {
        document.getElementById('messageRegisteredUser').innerHTML = '❌ Contraseña incorrecta';
        break;
      }
      case 'auth/too-many-requests': {
        document.getElementById('messageRegisteredUser').innerHTML = '⚠ Superó los intentos válidos para ingresar';
        break;
      }
      
      case 'auth/user-not-found': {
        document.getElementById('messageRegisteredUser').innerHTML = '❌ Usuario no registrado';
        break;
      }
      default: {
        document.getElementById('messageRegisteredUser').innerHTML = '❌ Error inesperado, intente de nuevo';
        break;
      }
    }
  });
}
