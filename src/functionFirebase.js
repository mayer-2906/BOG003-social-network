export const register = (email, password) => {
  /* eslint-disable */
  console.log('llamo a register');
  return firebase.auth().createUserWithEmailAndPassword(email, password); 
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
 return firebase.auth().signOut();
}
