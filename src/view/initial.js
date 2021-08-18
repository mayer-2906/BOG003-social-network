export default () => {
  const viewInicio = `
  <div class="divLogo" id="logo">
      <p class="welcome">Bienvenid@ a</p>
      <img class="imgLogo" src="images/Delicious!.png">
    </div>
    <div id="containerLogin" class="containerLogin">
      <input class="loginButtons" type="email" placeholder="Correo electrónico"/>
      <input class="loginButtons" type="password" placeholder="Contraseña"/>
      <input class="loginButtons init" type="button" onclick="location.href='#/post';" value="Iniciar sesión"/>
      <p class="recoverPassword textInit">¿Olvidaste tu contraseña?</p>
      <input class="loginButtons init" type="button" onclick="location.href='#/post';" value="Iniciar sesión con Google"/>
    </div>
    <div class="divNewUser">
    <p class="newUser textInit">¿Aún no haces parte de Delicious?</p>
  <input class="new loginButtons" type="button" onclick="location.href='#/newAccount';" value="Crear nueva cuenta"/> </div>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewInicio;
  return divElement;
};
