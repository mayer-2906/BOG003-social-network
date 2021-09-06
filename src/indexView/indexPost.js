import { signOutDelicious } from '../functionFirebase.js';
import { post } from '../view/post.js';

export const functionPost = () => {
  const divElement = document.createElement('div');
  divElement.innerHTML = post();
  const buttonSignOut = divElement.querySelector('#signOut');
  const inputPostUser = divElement.querySelector('#inputPostear');
  const searchInput = divElement.querySelector('#searchInput');
  let enableEdit = true;
  document.addEventListener('DOMContentLoaded', async () => {
    /* eslint-disable */
    // console.log('cargo indexPost');
    loadPost();
    // editing();
    // deliting();
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
    const date = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
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
            editing();
            deliting();
          })
      }
    });
  }

  const showPost = (data, user) => {
    if(data.length){
      let addHtml = '';
      data.forEach(post => {
        const postData = post.data();
        const idPost = post.id
        addHtml += createPost(postData, user, idPost);
      });
      const divcontainerPost = document.createElement('div');
      divcontainerPost.innerHTML = addHtml;
      divElement.querySelector('#containerPost').innerHTML='';
      divElement.querySelector('#containerPost').appendChild(divcontainerPost);
    }
  }
  const editing = () => {
    const inputEditar = divElement.querySelectorAll(".inputEditDesktop");
    console.log('esto son los inputs ', inputEditar);
    inputEditar.forEach(editButton => {
      editButton.addEventListener('click',async (e)=>{
        if (enableEdit) {
          const textAreaBox = divElement.querySelector(`.${e.target.id}`);
          textAreaBox.disabled = false;
          divElement.querySelector(`#${e.target.id}`).value = "Guardar";
          enableEdit = false;
        }
        else {
          const editedPost = divElement.querySelector(`.${e.target.id}`).value;
          console.log(e.target.id);
          console.log(editedPost);
          const db = firebase.firestore();
          const fecha = new Date();
          const date = `${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}`;
          await db.collection("post").doc(`${e.target.id}`).update({recipe: editedPost, fecha: date,});
          enableEdit = true;
          loadPost();
        }
        
      })
    })}

     const deliting = () => {
      const deleteButtons = divElement.querySelectorAll(".deleteDesktop");
      console.log('esto son los delete ', deleteButtons);
      deleteButtons.forEach(deleteButton => {
      deleteButton.addEventListener('click',async (e)=>{
      const db = firebase.firestore();
      const idButtonDelete = e.target.dataset.id;
      console.log(idButtonDelete);
      await db.collection("post").doc(idButtonDelete).delete();
      loadPost(); 
    }
      
     )})}
    

  const createPost = (data, user, idPost) => {
    let template = '';
    if(data.user===user.uid){
      template = `
      <div class= "userContainerPost">
      <div class= "userContainerPost">
          <div class="headerPost">
            <p class="postName postNameDesktop">${data.name}</p>
            <p class="datePost datePostDesktop">${data.fecha}</p>
            <input id= "${idPost}" class="inputEdit inputEditDesktop" type="button" value="Editar"/>
          </div>
           <textarea class = "${idPost}"  class=textAreaGray cols="10" rows="5" disabled>${data.recipe}</textarea>
          <div class="footerPost">
            <img class="like likeDesktop" src="./images/like.png" alt="">
            <img data-id="${idPost}" class="delete deleteDesktop" src="./images/delete.png" type="button" alt="" />
          </div>
          </div>
      </div>
      `;
    } else {
      template = `
        <div class= "containerPosts">
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