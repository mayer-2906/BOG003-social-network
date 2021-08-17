export default  () => {
    const viewInicio = `<h2>Bienvenido a Delicius</h2>`;
    const divElement = document.createElement("div");
    divElement.innerHTML = viewInicio;
    return divElement;
}