/* eslint-disable max-len */
const nativeText = `
      <p class="native">
        "Native" с английского — «родной». Нативное мобильное приложение — это приложение, которое создается под конкретную платформу. Нативное мобильное приложение написано на «родном» для платформы языке программирования: для Android — Kotlin и Java, для Apple iOS — Objective-C и Swift.
      </p>
      <p class="native">
        Альтернативой же «родным» приложениям являются кросс-платформенные приложения, которые уступают <i>нативным</i> в скорости и пишется на стороннем языке.
      </p>
`;

const companyText = `
  <p class="company">
    Наш сайт — это интерактивное знакомство с возможностями движка и платформы.
  </p>
  <p>
    После указания названия вашей компании в данном поле мы отобразим его в визуальных материалах
  </p>
`;

const marketText = `
  <p>
    Имеется ввиду нужна ли вашему бизнесу функция интернет-магазина, корзины?
  </p>
`;

export default (action, data) => {
  const cat = document.querySelector('#cat');
  const catContainer = document.querySelector('.cat_container');
  const catContent = document.querySelector('#catContent');
  if (action === 'show') {
    cat.classList.add('active');
    catContainer.classList.add('active');

    switch (data) {
      case 'nativeApp':
        catContent.innerHTML = nativeText;
        break;
      case 'companyName':
        catContent.innerHTML = companyText;
        break;
      case 'market':
        catContent.innerHTML = marketText;
        break;

      default:
        break;
    }
  } else if (action === 'hide') {
    cat.classList.remove('active');
    catContainer.classList.remove('active');
  }
};
