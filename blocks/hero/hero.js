export default function decorate(block) {
  if (!block.classList.contains('split')) return;

  const picture = block.querySelector('picture');
  const content = document.createElement('div');
  content.className = 'hero-content';

  [...block.children].forEach((row) => {
    [...row.children].forEach((cell) => {
      if (!cell.querySelector('picture')) {
        content.append(...cell.childNodes);
      }
    });
  });

  block.textContent = '';
  if (picture) block.append(picture);
  block.append(content);
}
