import { signOutDelicious } from '../functionFirebase.js';
import { post } from '../view/post.js';

// función del template post
export const functionPost = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = post();
  const buttonSignOut = divElement.querySelector('#signOut');
  const inputPostUser = divElement.querySelector('#inputPostear');
  const containerPosts = divElement.querySelector('#containerPost');

  buttonSignOut.addEventListener('click', () => {
    signOutDelicious()
      .then(() => {
        window.location.href = '#/initial';
      });
  });

  const createPost = (data) => {
    const user = firebase.auth().currentUser;
    let template = '';
    if (data.user === user.uid) {
      template = `
      <div class="containerPosts">
        <div class="userContainerPost">
          <div class="headerPost">
            <p class="postName postNameDesktop">${data.name}</p>
            <p class="datePost datePostDesktop">${data.fecha}</p>
            <input class="inputEdit inputEditDesktop" type="button" onclick="location.href='#/edit';" value="Editar"/>
          </div>
           <textarea class=textAreaGray cols="10" rows="5" disabled>${data.recipe}</textarea>
          <div class="recipe">
          </div>
          <div class="footerPost">
            <img class="like likeDesktop" src="./images/like.png" alt="">
            <img class="delete deleteDesktop" src="./images/delete.png" alt="">
          </div>
        </div>
      </div>
      `;
    } else {
      template = `
        <div class="userContainerPost">
          <div class="headerPost">
            <p class="postName postNameDesktop">${data.name}</p>
            <p class="datePost datePostDesktop">${data.fecha}</p>
          </div>
           <textarea class=textAreaGray cols="10" rows="5" disabled>${data.recipe}</textarea>
          <div class="recipe">
          </div>
          <div class="footerPost">
            <img class="like" src="./images/like.png" alt="">
          </div>
        </div>
      `;
    }

    return template;
  };

  const showPost = (data) => {
    if (data.length) {
      let addHtml = '';
      data.forEach((posts) => {
        const postData = posts.data();
        addHtml = createPost(postData) + addHtml;
      });
      const divcontainerPost = document.createElement('div');
      divcontainerPost.innerHTML = addHtml;
      divElement.querySelector('#containerPost').innerHTML = '';
      divElement.querySelector('#containerPost').appendChild(divcontainerPost);
    }
  };

  // función para imprimir los post en la página
  const loadPost = async () => {
    const db = firebase.firestore();
    await db.collection('post')
      .get()
      .orderBy('fecha', 'desc')
      .then((snapshot) => {
        showPost(snapshot.docs);
      });
  };

  inputPostUser.addEventListener('click', async () => {
    divElement.querySelector('#containerPost').innerHTML = '';
    const recipes = divElement.querySelector('#recipePostear').value;
    const fecha = new Date();
    const date = `${fecha.getDate()}/${(fecha.getMonth() + 1)}/${fecha.getFullYear()}`;
    const user = firebase.auth().currentUser;
    const db = firebase.firestore();
    await db.collection('post').add({
      name: user.displayName,
      recipe: recipes,
      fecha: date,
      user: user.uid,
    })
      .then(() => {
        divElement.querySelector('#recipePostear').value = '';
        loadPost();
      })
      .catch(() => {
        document.querySelector('#errorPost').innerHTML = '❌ Error inesperado, intente de nuevo';
      });
  });

  document.addEventListener('DOMContentLoaded', () => {
    loadPost();
  });
  return divElement;
};
