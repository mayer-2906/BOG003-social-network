export const initial = () => {
  const viewInicio = `
  <div class="divLogo logoInitial" id="logo">
      <p class="welcome">Bienvenid@ a</p>
      <img class="imgLogo" src="images/Delicious!.png">
      <p class="description">Delicious te ayuda a compartir y encontrar recetas de todos los tipos, ¿Qué esperas para unirte?</p>
  </div>
  <div class="desktopContainer">
  <div id="containerLogin" class="containerLogin containerInitial">
      <div id="messageRegisteredUser"></div>
      <input class="loginButtons" id="logInEmail" type="email" placeholder="Correo electrónico" required/>
      <input class="loginButtons" id="logInPassword" type="password" placeholder="Contraseña" required/>
      <input class="loginButtons init" id="logInBtn" type="button" value="Iniciar sesión"/>
      <p class="recoverPassword textInit">¿Olvidaste tu contraseña?</p>
      <button class="loginButtons init" id="logInGoogle">
      <img class="googleLogo" src="./images/search.png"/>
      Iniciar sesión con Google
      </button>   
  </div>
  <div class="divNewUser">
      <p class="newUser textInit">¿Aún no haces parte de Delicious?</p>
      <input class="new loginButtons" type="button" onclick="location.href='#/newAccount';" value="Crear nueva cuenta"/>
  </div>
  </div>`;
  const divElement = document.createElement('div');
  divElement.classList.add('divInitial');
  divElement.innerHTML = viewInicio;
  return divElement;
};
