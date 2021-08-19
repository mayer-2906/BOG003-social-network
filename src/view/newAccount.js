export default () => {
  const viewRegistro = `
  <div class="divLogo" id="logo">
    <img class="imgLogo" src="images/Delicious!.png">
  </div>
  <div id="containerLoginRegister" class="containerLogin">
    <input class="loginButtons" type="text" placeholder="Nombre completo"/>
    <input class="loginButtons" type="email" placeholder="Correo electrónico"/>
    <input class="loginButtons" type="email" placeholder="Confirmar correo electrónico"/>
    <input class="loginButtons" type="password" placeholder="Contraseña"/>
    <input class="loginButtons" type="password" placeholder="Confirmar contraseña"/>
    <input class="loginButtons init" type="button" onclick="location.href='#/initial';" value="Registrarse"/>
  </div>`;

  const divElement = document.createElement('div');
  divElement.innerHTML = viewRegistro;
  return divElement;
};
