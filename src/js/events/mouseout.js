document.addEventListener('mouseout', (e) => {
  switch (true) {
    case e.target.classList.contains('footnote'):
    case e.target.classList.contains('material-checkbox'):
      e.target.dataset.active = 'false';
      break;

    default:
      break;
  }
});
