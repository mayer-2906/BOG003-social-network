import view from '../indexView/index.js';

export const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case './src/index.html': {
      return container.appendChild(view.initial);
    }
    case '#/initial': {
      return container.appendChild(view.initial);
    }
    case '#/newAccount': {
      return container.appendChild(view.newAccount);
    }
    case '#/post': {
      return container.appendChild(view.post);
    }
    case '#/edit': {
      return container.appendChild(view.edit);
    }
    default: {
      return container.appendChild(view.errors);
    }
  }
};
