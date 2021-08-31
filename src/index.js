import {
  register,
  signIn,
  logInWithGoogle,
  signOutDelicious,
}
  from './functionFirebase.js';

export const dataRegister = () => {
  const email = document.getElementById('email').value;
  const confirmEmail = document.getElementById('confirmEmail').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  /* eslint-disable */
  console.log(email +''+ confirmEmail);
  console.log(password + '' + confirmPassword);
  if (email.length !== 0 && confirmEmail.length !== 0 && password.length !== 0 && confirmPassword.length !== 0) {
    if (email === confirmEmail && password === confirmPassword) {
      register(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        console.log(user.email);
        window.location.href = '#/initial';
      })
      .catch((error) => {
        /* eslint-disable */
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        switch (errorCode) {
          case 'auth/email-already-in-use': {
            document.getElementById('errorMessage').innerHTML = '❌ Usuario registrado, inicie sesión';
            break;
          }
          case 'auth/weak-password': {
            document.getElementById('errorMessage').innerHTML = '❌ La constraseña debe tener mas de 6 caracteres';
            break;
          }
          default: {
            document.getElementById('errorMessage').innerHTML = '❌ Por favor verifique el correo y contraseña';
            break;
          }
        }
      });
    } else {
      document.getElementById('errorMessage').innerHTML = '⚠ Verifique el correo y contraseña';
    }
  } else {
    document.getElementById('errorMessage').innerHTML = '❌ Debe llenar todos los campos';
  }
};

export const signInIndex = () => {
  const email = document.getElementById('logInEmail').value;
  const password = document.getElementById('logInPassword').value;
  console.log(email, password);
  if (email.length !== 0 && password.length !== 0) {
    signIn(email, password)
    .then(() => {
      //var user = userCredential.user;
      console.log('entra al then ');
      window.location.href = '#/post';
    })
    .catch((error) => {
      console.log('entra al catch');
      var errorCode = error.code;
      console.log(error);
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
    })
    }
   else {
    document.getElementById('messageRegisteredUser').innerHTML = '❌ Debe llenar todos los campos';
} 
}

 export const logInGoogleIndex = () =>{
  logInWithGoogle()
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    window.location.href = '#/post';
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
 }

 export const signOutIndex = () => {
  signOutDelicious()
  .then(() => {
    console.log('sign out');
    window.location.href = '#/initial';
  }).catch((error) => {
    console.log('sign out');
  });
 }

