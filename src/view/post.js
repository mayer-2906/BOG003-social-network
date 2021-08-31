export const post = () => {
  const viewTimeLine = `
  <header class="header headerDesktop">
    <div class="logoPost">
      <img class="imgPost" src="./images/Delicious!.png">
    </div>
    <div class="searchPost searchPostDesktop">
      <input class="searchInput" type="text">
    </div>
    <div class="helloUser">
      <div class="textPost">
        <p class="hello helloDesktop" >Hola Usuario</p>
        <p id='signOut' class="signOut signOutDesktop" onclick="location.href='#/initial'">Cerrar sesión</p>
      </div>
    </div>
  </header>
  <main class="containerMain">
    <div class="addPost addPostDesktop">
      <textarea name="Receta" class="recipePost recipePostDesktop" type="text" placeholder="¿Qué receta quieres compartir hoy?"></textarea>
      <input class="init inputPost inputPostDesktop" type="button" onclick="location.href='#/post';" value="Publicar"/>
    </div>
    <div class="containerPosts">
      <div class="userContainerPost">
        <div class="headerPost">
          <p class="postName postNameDesktop">Nombre Usuario</p>
          <p class="datePost datePostDesktop">Fecha y Hora</p>
          <input class="inputEdit inputEditDesktop" type="button" onclick="location.href='#/edit';" value="Editar"/>
        </div>
         <textarea class=textAreaGray cols="10" rows="5" disabled></textarea>
        <div class="recipe">
        </div>
        <div class="footerPost">
          <img class="like likeDesktop" src="./images/like.png" alt="">
          <img class="delete deleteDesktop" src="./images/delete.png" alt="">
        </div>
        </div>
        </div>
        <div class="containerPosts">
      <div class="userContainerPost">
        <div class="headerPost">
          <p class="postName postNameDesktop">Nombre Usuario</p>
          <p class="datePost datePostDesktop">Fecha y Hora</p>
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
  document.getElementById('scriptView').src = './indexView/indexPost.js';
  return divElement;
};
