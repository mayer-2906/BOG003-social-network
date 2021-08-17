import { componentes } from '../view/index.js';

export const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (route) {
    case '#/initial': {
      return container.appendChild(componentes.initial());
    }
    case '#/newAccount': {
      return container.appendChild(componentes.newAccount());
    }
    case '#/post': {
      return container.appendChild(componentes.post());
    }
    case '#/edit': {
      return container.appendChild(componentes.edit());
    }
    default: {
      return container.appendChild(componentes.errors());
    }
  }
};
