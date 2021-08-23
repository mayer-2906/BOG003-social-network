export default () => {
<<<<<<< HEAD
  const viewError = '<h2>"Esta página no existe"</h2>';
=======
  const viewError = `<h2>Esta página no existe</h2>`;
>>>>>>> 963f767e553e1458787970aa7689434f4db9dd31
  const divElement = document.createElement('div');
  divElement.innerHTML = viewError;
  return divElement;
};
