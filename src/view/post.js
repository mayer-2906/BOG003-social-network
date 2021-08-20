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
      <div class="textPost">
        <p class="hello" >Hola Usuario</p>
        <p class="signOut">Cerrar sesión</p>
      </div>
    </div>
  </header>
  <main class="containerMain">
    <div class="addPost">
      <textarea name="Receta" class="recipePost" type="text" placeholder="¿Qué receta quieres compartir hoy?"></textarea>
      <input class="init inputPost" type="button" onclick="location.href='#/post';" value="Publicar"/>
    </div>
    <div class="containerPosts">
      <div class="userContainerPost">
        <div class="headerPost">
          <p class="postName">Nombre Usuario</p>
          <p class="datePost">Fecha y Hora</p>
          <input class="inputEdit" type="button" onclick="location.href='#/edit';" value="Editar"/>
        </div>
         <textarea class=textAreaGray cols="10" rows="5" disabled></textarea>
        <div class="recipe">
        </div>
        <div class="footerPost">
          <img class="like" src="./images/like.png" alt="">
          <img class="delete" src="./images/delete.png" alt="">
        </div>
        </div>
        </div>
        <div class="containerPosts">
      <div class="userContainerPost">
        <div class="headerPost">
          <p class="postName">Nombre Usuario</p>
          <p class="datePost">Fecha y Hora</p>
        </div>
         <textarea class=textAreaGray cols="10" rows="5" disabled></textarea>
        <div class="recipe">
        </div>
        <div class="footerPost">
          <img class="like" src="./images/like.png" alt="">
        </div>
  </main>
  `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewTimeLine;
  return divElement;
};
