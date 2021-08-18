export default () => {
  const viewTimeLine = `<h2>¿Qué Receta quieres compartir hoy?</h2>
  <input class="init" type="button" onclick="location.href='#/post';" value="Publicar"/>
  <input class="init" type="button" onclick="location.href='#/edit';" value="Editar"/>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewTimeLine;
  return divElement;
};
