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
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    window.location.href = '#/post';
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  });
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
