import { signOutDelicious } from '../functionFirebase.js';

const buttonSignOut = document.getElementById('signOut');
buttonSignOut.addEventListener('click', () => {
  signOutDelicious();
});
