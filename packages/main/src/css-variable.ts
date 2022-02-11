export function setCssRootVariable() {
  const id = 'one-global-style';
  let link = document.querySelector(`#${id}`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'global.css');
    link.setAttribute(id, id);
    document.head.appendChild(link);
  }
}
