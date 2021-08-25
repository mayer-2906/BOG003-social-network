export const register = (email, password) => {
  console.log('llamo a register');
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user.email);
      window.location.href = '#/initial';
      // ...
    })
    .catch((error) => {
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
      // ..
    });
};
export const signIn = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log(user.email);
      window.location.href = '#/post';
      // ...
    })
    .catch((error) => {
      window.location.href = '#/initial';
      var errorCode = error.code;
      console.log(errorCode);
      var errorMessage = error.message;
      console.log(errorMessage);
      switch (errorCode) {

      }
    });
};
