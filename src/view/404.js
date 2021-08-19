export default () => {
  const viewError = `<h2>Esta página no existe</h2>`;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewError;
  return divElement;
};
