export default () => {
  const viewInicio = `<h2>Bienvenido a Delicius</h2>
  <input class="init" type="button" onclick="location.href='#/post';" value="Publicar"/>
  <input class="init" type="button" onclick="location.href='#/edit';" value="Editar"/>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewInicio;
  return divElement;
};
