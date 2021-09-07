export const newAccount = () => {
  const viewRegistro = `
    <div class="divLogo logoRegister" id="logo">
    <p class="welcome">Bienvenid@ a</p>
      <img class="imgLogo" src="images/Delicious!.png">
      <p class="description">Delicious te ayuda a compartir y encontrar recetas de todos los tipos, ¿Qué esperas para unirte?</p>
    </div>
    <div id="containerLoginRegister" class="containerLogin containerLoginRegister">
      <input id="nameUser" class="loginButtons buttonsRegister" type="text" placeholder="Nombre completo" required>
      <input id="email" class="loginButtons buttonsRegister" type="email" placeholder="Correo electrónico"/>
      <input id="confirmEmail" class="loginButtons buttonsRegister" type="email" placeholder="Confirmar correo electrónico"/>
      <input id="password" class="loginButtons buttonsRegister" type="password" placeholder="Contraseña"/>
      <input id="confirmPassword" class="loginButtons buttonsRegister" type="password" placeholder="Confirmar contraseña"/>
      <input id="signIn"class="loginButtons init register" type="button"  value="Registrarse"/>
      <div id='errorMessage'></div>
      <p id="backToInitial" class="backToInitial" onclick="location.href='#/initial'">Iniciar Sesión</p>
    </div> 
  `;
  return viewRegistro;
};
