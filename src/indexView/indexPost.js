import { signOutDelicious } from '../functionFirebase.js';
import { post } from '../view/post.js';

export const functionPost = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = post();
  const buttonSignOut = divElement.querySelector('#signOut');
  const inputPostUser = divElement.querySelector('#inputPostear');
  const searchInput = divElement.querySelector('#searchInput');

  document.addEventListener('DOMContentLoaded', async () => {
    /* eslint-disable */
    // console.log('cargo indexPost');
    loadPost();
  });

  buttonSignOut.addEventListener('click', () => {
    signOutDelicious()
      .then(() => {
        /* eslint-disable */
        // console.log('sign out');
        window.location.href = '#/initial';
      }).catch((error) => {
      //console.log('sign out');
      });
  });

  inputPostUser.addEventListener('click', async () => {
    // window.location.href = '#/post';
    divElement.querySelector('#containerPost').innerHTML = '';
    const recipe = divElement.querySelector('#recipePostear').value;
    const fecha = new Date();
    const date = `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`;
    var db = firebase.firestore();
    const user = firebase.auth().currentUser;
    // let userLogin='';
    await db.collection("post").add({
      name: user.displayName,
      recipe: recipe,
      fecha: date,
      user: user.uid,
      })
      .then(() => {
          loadPost();
          divElement.querySelector('#recipePostear').value='';
          //console.log("Document written with ID: ", docRef.id);
      })
      .catch(() => {
          alert('Lo sentimos no pudimos agregar tu post, intenta de nuevo');
          divElement.querySelector('#recipePostear').value='';
      });
    });


  const loadPost = () => {
    const db = firebase.firestore();
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        db.collection('post')
          .get()
          .then((snapshot) => {
            const helloUser = divElement.querySelector('#helloUser');
            helloUser.innerHTML = `Hola ${user.displayName}`; 
            showPost(snapshot.docs, user)
          })
      }
    });
  }

  const showPost = (data, user) => {
    if(data.length){
      let addHtml = '';
      data.forEach(post => {
        const postData = post.data();
        addHtml += createPost(postData, user);
      });
      const divcontainerPost = document.createElement('div');
      divcontainerPost.innerHTML = addHtml;
      divElement.querySelector('#containerPost').innerHTML='';
      divElement.querySelector('#containerPost').appendChild(divcontainerPost);
    }
  }

  const createPost = (data, user) => {
    let template = '';
    if(data.user===user.uid){
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
      `
    }

    return template;
  }
  
searchInput.addEventListener('keyup', (e) => {
   let search = e.target.value;
   console.log(search);
 });
//loadPost();
  return divElement;
}