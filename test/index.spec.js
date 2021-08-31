// importamos la funcion que vamos a testear
import { register, signIn, signOutDelicious, logInWithGoogle } from '../src/functionFirebase.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
