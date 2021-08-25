export const newAccount = () => {
  const viewRegistro = `
    <div class="divLogo" id="logo">
      <img class="imgLogo" src="images/Delicious!.png">
    </div>
    <div id="containerLoginRegister" class="containerLogin">
      <input class="loginButtons" type="text" placeholder="Nombre completo"/>
      <input id="email" class="loginButtons" type="email" placeholder="Correo electrónico"/>
      <input id="confirmEmail" class="loginButtons" type="email" placeholder="Confirmar correo electrónico"/>
      <input id="password" class="loginButtons" type="password" placeholder="Contraseña"/>
      <input id="confirmPassword" class="loginButtons" type="password" placeholder="Confirmar contraseña"/>
      <input id="signIn"class="loginButtons init" type="button"  value="Registrarse"/>
      <div id='errorMessage'></div>
      <p id="backToInitial" class="backToInitial" onclick="location.href='#/initial'">Iniciar Sesión</p>
    </div> 
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewRegistro;
  return divElement;
};
