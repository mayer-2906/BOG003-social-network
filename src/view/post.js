export default () => {
  const viewTimeLine = '<h2>¿Qué Receta quieres compartir hoy?</h2>';
  const divElement = document.createElement('div');
  divElement.innerHTML = viewTimeLine;
  return divElement;
};
