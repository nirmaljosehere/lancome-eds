export default function decorate(block) {
  const rows = [...block.children];
  const grid = document.createElement('div');
  grid.className = 'product-grid';

  rows.forEach((row) => {
    const cells = [...row.children];
    const [imageCell, contentCell, priceCell, linkCell] = cells;

    const card = document.createElement('div');
    card.className = 'product-card';

    const imageWrap = document.createElement('div');
    imageWrap.className = 'product-card-image-wrap';
    if (imageCell) imageWrap.append(...imageCell.childNodes);
    card.append(imageWrap);

    const body = document.createElement('div');
    body.className = 'product-card-body';

    if (contentCell) {
      const paras = [...contentCell.querySelectorAll('p')];
      if (paras[1]) {
        const subtitle = document.createElement('p');
        subtitle.className = 'product-card-subtitle';
        subtitle.textContent = paras[1].textContent.trim();
        body.append(subtitle);
      }
      if (paras[0]) {
        const name = document.createElement('p');
        name.className = 'product-card-name';
        name.textContent = paras[0].textContent.trim();
        body.append(name);
      }
    }

    if (priceCell?.textContent.trim()) {
      const price = document.createElement('p');
      price.className = 'product-card-price';
      price.textContent = priceCell.textContent.trim();
      body.append(price);
    }

    if (linkCell) {
      const anchor = linkCell.querySelector('a');
      if (anchor) {
        anchor.className = 'product-card-cta';
        if (!anchor.textContent.trim()) anchor.textContent = 'Shop Now';
        body.append(anchor);
      }
    }

    card.append(body);
    grid.append(card);
  });

  block.textContent = '';
  block.append(grid);
}
