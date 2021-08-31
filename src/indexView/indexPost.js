import { signOutDelicious } from '../functionFirebase.js';
import { post } from '../view/post.js';

export const functionPost = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = post();
  const buttonSignOut = divElement.querySelector('#signOut');
  const inputPostUser = divElement.querySelector('#inputPostear');

  buttonSignOut.addEventListener('click', () => {
    signOutDelicious()
      .then(() => {
      /* eslint-disable */
      console.log('sign out');
      window.location.href = '#/initial';
      }).catch((error) => {
      console.log('sign out');
      });
  });
// lo ideal es que carguen los post apenas hacen singin
// var db = firebase.firestore();
// firebase.auth().onAuthStateChanged(user => {
//   if(user){
//     db.collection('post')
//       .get()
//       .then((snapshot) => {
//         showPost(snapshot.docs, user)
//       })
//   }
// });

  inputPostUser.addEventListener('click', () => {
    // window.location.href = '#/post';
    loadPost();
  });

  const loadPost = () => {
    var db = firebase.firestore();
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        db.collection('post')
          .get()
          .then((snapshot) => {
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
    console.log(data)
    console.log(user)
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
  //loadPost();
  return divElement;
}