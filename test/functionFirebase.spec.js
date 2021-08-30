import { register, signIn, logInWithGoogle } from '../src/functionFirebase.js';


const firebaseMock = require('firebase-mock');

const mockAuth = new firebaseMock.MockAuthentication();
const mockSdk = new firebaseMock.MockFirebaseSdk(
  () => null,
  () => mockAuth,
);
mockSdk.auth().autoFlush();
global.firebase = mockSdk;
/* Test para crear un usuario. */
describe('register', () => {
  it('Deberia ser una funcion', () => {
    expect(typeof createUser).toBe('function');
  });
  it('Deberia poder crear un nuevo usuario', async () => {
    register('laboratoria1@gmail.com', '12345678');

    await mockSdk
      .auth()
      .getUserByEmail('laboratoria1@gmail.com')
      .then((result) => {
        expect(result.email).toBe('laboratoria1@gmail.com');
        expect(typeof result).toBe('object');
      });
  });
});