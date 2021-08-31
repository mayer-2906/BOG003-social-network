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
        <p id='signOut' class="signOut signOutDesktop">Cerrar sesión</p>
      </div>
    </div>
  </header>
  <main class="containerMain">  
    <div class="addPost addPostDesktop">
      <textarea id="recipePostear" name="Receta" class="recipePost recipePostDesktop" type="text" placeholder="¿Qué receta quieres compartir hoy?"></textarea>
      <input id="inputPostear" class="init inputPost inputPostDesktop" type="button" onclick="location.href='#/post';" value="Publicar"/>
    </div>  
    <div id="containerPost" class="containerPosts">
    </div>
  </main>
  `;
  // const divElement = document.createElement('div');
  // divElement.innerHTML = viewTimeLine;
  // document.getElementById('scriptView').src = './indexView/indexPost.js';
  return viewTimeLine;
};
