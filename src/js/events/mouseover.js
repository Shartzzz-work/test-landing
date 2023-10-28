import cat from '../../templates/blocks/cat/cat';

document.addEventListener('mouseover', (e) => {
  // console.log(e.target);

  switch (true) {
    case e.target.classList.contains('footnote'):
    case e.target.classList.contains('material-checkbox'):
      {
        const dataName = e.target.dataset.name;
        e.target.dataset.active = 'true';

        setTimeout(() => {
          if (e.target.dataset.active === 'true') {
            cat('show', dataName);
          }
        }, 160);
      }
      break;

    default:
      break;
  }
});
