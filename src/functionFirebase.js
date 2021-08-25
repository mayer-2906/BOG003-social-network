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

export const logInWithGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
  /* firebase.auth()
    .getRedirectResult()
    .then((result) => {
      console.log('line 59');
      if (result.credential) {
     // /** @type {firebase.auth.OAuthCredential} 
      //  var credential = result.credential;
        console.log('signin');

      // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
      // ...
      }
    // The signed-in user info.
      var user = result.user;
    }).catch((error) => {
    // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    // The email of the user's account used.
      var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;  
    });*/
};
