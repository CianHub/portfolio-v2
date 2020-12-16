import { unmountComponentAtNode } from 'react-dom';

export const beforeTest = (): HTMLElement => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  return container;
};

export const afterTest = (container: HTMLElement): null => {
  unmountComponentAtNode(container);
  container.remove();
  return null;
};
