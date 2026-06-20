export default function decorate(block) {
  // Last row may contain style options rendered as a list — apply as classes and remove
  const rows = [...block.children];
  const lastRow = rows[rows.length - 1];
  if (lastRow) {
    const list = lastRow.querySelector('ul, ol');
    if (list) {
      [...list.querySelectorAll('li')].forEach((li) => {
        const val = li.textContent.trim();
        if (val) block.classList.add(val);
      });
      lastRow.remove();
    }
  }

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
