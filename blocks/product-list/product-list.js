export default function decorate(block) {
  const rows = [...block.children];
  const grid = document.createElement('div');
  grid.className = 'product-grid';

  rows.forEach((row) => {
    const cells = [...row.children];
    const [imageCell, nameCell, subtitleCell, priceCell, linkCell, badgeCell] = cells;

    const card = document.createElement('div');
    card.className = 'product-card';

    if (badgeCell?.textContent.trim()) {
      const badge = document.createElement('span');
      badge.className = 'product-card__badge';
      badge.textContent = badgeCell.textContent.trim();
      card.append(badge);
    }

    const imageWrap = document.createElement('div');
    imageWrap.className = 'product-card__image-wrap';
    if (imageCell) imageWrap.append(...imageCell.childNodes);
    card.append(imageWrap);

    const body = document.createElement('div');
    body.className = 'product-card__body';

    if (subtitleCell?.textContent.trim()) {
      const subtitle = document.createElement('p');
      subtitle.className = 'product-card__subtitle';
      subtitle.textContent = subtitleCell.textContent.trim();
      body.append(subtitle);
    }

    if (nameCell?.textContent.trim()) {
      const name = document.createElement('p');
      name.className = 'product-card__name';
      name.textContent = nameCell.textContent.trim();
      body.append(name);
    }

    if (priceCell?.textContent.trim()) {
      const price = document.createElement('p');
      price.className = 'product-card__price';
      price.textContent = priceCell.textContent.trim();
      body.append(price);
    }

    if (linkCell) {
      const anchor = linkCell.querySelector('a');
      if (anchor) {
        anchor.className = 'product-card__cta';
        anchor.textContent = anchor.textContent || 'Shop Now';
        body.append(anchor);
      }
    }

    card.append(body);
    grid.append(card);
  });

  block.textContent = '';
  block.append(grid);
}
