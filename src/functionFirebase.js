export const register = (email, password) => {
  /* eslint-disable */
  console.log('llamo a register');
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      /* eslint-disable */
      var user = userCredential.user;
      console.log(user.email);
      window.location.href = '#/initial';
      // ...
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
      // ..
    });
};
export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)    
}

export const logInWithGoogle = () => {
  /* eslint-disable */
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth()
          .signInWithPopup(provider)

};
// SignOut
 export const signOutDelicious = () => {
firebase.auth().signOut().then(() => {
  console.log('sign out');
  window.location.href = '#/initial';
}).catch((error) => {
  console.log('sign out');
});
}
