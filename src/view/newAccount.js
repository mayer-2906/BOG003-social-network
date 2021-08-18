export default () => {
  const viewRegistro = `<h2>Te invitamos a registrarte</h2>
  <input class="init" type="button" onclick="location.href='#/initial';" value="Registrarse"/>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewRegistro;
  return divElement;
};
