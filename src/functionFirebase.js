export const register = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const signIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const logInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth()
    .signInWithPopup(provider);
};

export const signOutDelicious = () => firebase.auth().signOut();

const config = {
  url: 'https://mayer-2906.github.io/BOG003-social-network/src/index.html#/initial',
};

export const emailVerification = () => firebase.auth().currentUser.sendEmailVerification(config);
