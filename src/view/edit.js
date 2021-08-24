export const edit = () => {
  const viewEditar = `<h2>Editar</h2>
  <input class="init" type="button" onclick="location.href='#/post';" value="Publicar"/>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewEditar;
  return divElement;
};
