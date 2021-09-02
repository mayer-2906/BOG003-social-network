export const post = () => {
  const viewTimeLine = `
  <header class="header headerDesktop">
    <div class="logoPost">
      <img class="imgPost" src="./images/Delicious!.png">
    </div>
    <div class="searchPost searchPostDesktop">
      <input id="searchText" class="searchInput" type="text">
      <input id="searchIInput" class="inputSearch" type="submit" value="">
    </div>
    <div class="helloUser">
      <div class="textPost">
        <p id="helloUser" class="hello helloDesktop" ></p>
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
  return viewTimeLine;
};
