import { signOutDelicious } from '../functionFirebase.js';
import { post } from '../view/post.js';

export const functionPost = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = post();
  const buttonSignOut = divElement.querySelector('#signOut');
  const inputPostUser = divElement.querySelector('#inputPostear');
  const containerPosts = divElement.querySelector('#containerPost');

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

  inputPostUser.addEventListener('click', async () => {
    // window.location.href = '#/post';
    divElement.querySelector('#containerPost').innerHTML='';
    const recipe = divElement.querySelector('#recipePostear').value;
    const fecha = new Date();
    var db = firebase.firestore();
    await db.collection("post").add({
      name: "juanita",
      recipe: recipe,
      fecha: fecha.toUTCString(),
      //buser:firebase.auth().getCurrentUser().uid,
      })
      .then((docRef) => {
          loadPost();
          console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
          console.error("Error adding document: ", error);
      });
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
        addHtml = createPost(postData, user) + addHtml;
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

  containerPosts.addEventListener('onload', () => {
    loadPost();
  });
  //loadPost();
  return divElement;
}