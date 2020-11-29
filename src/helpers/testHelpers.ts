import { unmountComponentAtNode } from 'react-dom';

export const beforeTest = (): HTMLElement => {
  let container = document.createElement('div');
  document.body.appendChild(container);
  return container;
};

export const afterTest = (container: HTMLElement) => {
  unmountComponentAtNode(container);
  container.remove();
  return null;
};
