export default () => {
  const viewTimeLine = `
  <header class="header">
  <div class="logoPost">
    <img class="imgPost" src="./images/Delicious!.png">
  </div>
  <div class="searchPost">
    <input type="text">
  </div>
  <div class="helloUser">
    <p class="hello" >Hola Usuario</p>
    <p class="signOut">Cerrar sesión</p>
  </div>
  </header>
    <input class="init" type="button" onclick="location.href='#/post';" value="Publicar"/>
    <input class="init" type="button" onclick="location.href='#/edit';" value="Editar"/>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewTimeLine;
  return divElement;
};
