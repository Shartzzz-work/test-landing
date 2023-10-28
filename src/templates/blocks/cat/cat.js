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

//   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" style="    position: absolute;
// bottom: calc(100% - 6px);
// width: 80px;" xml:space="preserve"><style>.st16{display:none}.st17{display:inline}.st19{display:none;fill:#fff;stroke:#542a19;stroke-width:8;stroke-miterlimit:10}.st20{fill:#542a19}.st25{opacity:.76;fill:#461515}.st30{fill:#b2d1e1}</style><g id="Layer_7"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="280.28" y1="1023.78" x2="1767.72" y2="1023.78"><stop offset="0" style="stop-color:#fedc52"/><stop offset=".995" style="stop-color:#fcb117"/></linearGradient><circle cx="1024" cy="1023.78" r="743.72" style="fill:url(#SVGID_1_)"/><g style="opacity:.81"><path d="M540.23 769.93c-2.07 0-4.16-.21-6.27-.66-16.21-3.44-26.55-19.38-23.11-35.58 21.98-103.42 83.1-188.9 176.75-247.22 76.68-47.75 173.16-74.85 264.59-74.41 16.57.08 29.93 13.58 29.85 30.15-.08 16.57-13.63 29.94-30.15 29.85-130.16-.65-339.34 71.79-382.34 274.1-3 14.11-15.46 23.77-29.32 23.77z" style="fill:#fff"/></g><g><ellipse class="st20" cx="772.93" cy="837.52" rx="62.77" ry="88.74"/><ellipse class="st20" cx="1269.55" cy="837.52" rx="62.77" ry="88.74"/></g><g><path class="st25" d="M639.7 1184.74h752.38v161.93H639.7z"/><path class="st25" d="M654.43 1199.46h722.94v132.48H654.43z"/><path class="st30" d="M723.8 1233.61h20.72v82.9H723.8zM810.49 1233.61h20.72v82.9h-20.72zM897.18 1233.61h20.72v82.9h-20.72zM983.86 1233.61h20.72v82.9h-20.72zM1070.55 1233.61h20.72v82.9h-20.72zM1157.24 1233.61h20.72v82.9h-20.72zM1243.93 1233.61h20.72v82.9h-20.72zM1330.61 1233.61h20.72v82.9h-20.72z"/><g><path class="st30" d="M680.46 1214.89h20.72v82.9h-20.72zM767.15 1214.89h20.72v82.9h-20.72zM853.83 1214.89h20.72v82.9h-20.72zM940.52 1214.89h20.72v82.9h-20.72zM1027.21 1214.89h20.72v82.9h-20.72zM1113.89 1214.89h20.72v82.9h-20.72zM1200.58 1214.89h20.72v82.9h-20.72zM1287.27 1214.89h20.72v82.9h-20.72z"/></g><path style="fill:#cfdae0" d="M1368.64 1172.2h131.32v188.64h-131.32z"/><path class="st30" d="M1415.53 1195.1v142.84h227.71V1195.1h-227.71zm206.94 120h-97.31v-97.17h97.31v97.17z"/></g></g></svg>

const companyEmpty = `
  <div>
    <p>
      Совсем не хотите вводить название своей компании?
    </p>
    <div style="display: flex;
    align-items: flex-end;
    gap: 20px;margin-top: 10px">
      <button name="companyReject" class="button_gold" style="width: 100%; overflow:visible;min-height: 40px;">
      <span>Не скажу!</span>
      <svg version="1.1" id="Icon_Set" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 64 64" style="position: absolute;
    bottom: 100%;
    width: 70px;pointer-events:none" xml:space="preserve"><style>.st1{fill:#263238}</style><path class="st1" d="M4 32.5a.5.5 0 0 1-.5-.5C3.5 16.285 16.285 3.5 32 3.5a.5.5 0 0 1 0 1C16.837 4.5 4.5 16.836 4.5 32a.5.5 0 0 1-.5.5zM35 4.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1zM32 60.5a.5.5 0 0 1 0-1c15.163 0 27.5-12.336 27.5-27.5a.5.5 0 0 1 1 0c0 15.715-12.785 28.5-28.5 28.5zM30 60.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1z"/><path class="st1" d="M32 56.5C18.49 56.5 7.5 45.509 7.5 32S18.49 7.5 32 7.5 56.5 18.491 56.5 32 45.51 56.5 32 56.5zm0-48C19.042 8.5 8.5 19.042 8.5 32S19.042 55.5 32 55.5 55.5 44.958 55.5 32 44.958 8.5 32 8.5z"/><path d="M32 14c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18z" style="fill:#ff5252"/><path class="st1" d="M32 50.5c-10.201 0-18.5-8.299-18.5-18.5S21.799 13.5 32 13.5 50.5 21.799 50.5 32 42.201 50.5 32 50.5zm0-36c-9.649 0-17.5 7.851-17.5 17.5S22.351 49.5 32 49.5 49.5 41.649 49.5 32 41.649 14.5 32 14.5zM53 6.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/><path class="st1" d="M51 8.5a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5zM60 13h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z"/><path class="st1" d="M58 15a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v4a.5.5 0 0 1-.5.5z"/><g><path d="M38.364 23.515 32 29.879l-6.364-6.364a1.5 1.5 0 1 0-2.121 2.121L29.879 32l-6.364 6.364a1.5 1.5 0 1 0 2.121 2.121L32 34.121l6.364 6.364a1.5 1.5 0 1 0 2.121-2.121L34.121 32l6.364-6.364a1.5 1.5 0 1 0-2.121-2.121z" style="fill:#fff"/><path class="st1" d="M24.575 41.424a1.993 1.993 0 0 1-1.414-.585 1.986 1.986 0 0 1-.586-1.414c0-.535.208-1.037.586-1.414L29.172 32l-6.011-6.011a1.983 1.983 0 0 1-.586-1.414c0-.534.208-1.036.586-1.414a2.003 2.003 0 0 1 2.828 0L32 29.172l6.011-6.011a2.002 2.002 0 0 1 3.414 1.414c0 .535-.208 1.037-.586 1.414L34.828 32l6.011 6.011c.378.377.586.879.586 1.414 0 .534-.208 1.036-.586 1.414a2.004 2.004 0 0 1-2.828 0L32 34.828l-6.011 6.011c-.389.39-.902.585-1.414.585zm0-17.848a.996.996 0 0 0-1 .999c0 .267.104.518.293.707l6.364 6.364a.5.5 0 0 1 0 .707l-6.364 6.364a.997.997 0 0 0 0 1.414 1 1 0 0 0 1.414 0l6.364-6.364a.5.5 0 0 1 .707 0l6.364 6.364a1 1 0 0 0 1.414-1.414l-6.364-6.364a.5.5 0 0 1 0-.707l6.364-6.364a.997.997 0 0 0 0-1.414 1 1 0 0 0-1.414 0l-6.364 6.364a.5.5 0 0 1-.707 0l-6.364-6.364a.996.996 0 0 0-.707-.292z"/></g></svg>
      </button>
      <label class="form_label" style="padding-top: 0;width: 100%">
        Уговорил, укажу тут
        <input type="text" placeholder="название компании" class="form_input" style="height: 40px;" />
        <button name="createApp" style="height: 40px;
    border-radius: 8px;
    margin-top: 10px;cursor:pointer">Подтвердить</button>
      </label>
    </div>
  </div>
`;

const companyReject = `
<p>
  Название компании по умолчанию "Рога и Копыта"
</p>
`;

const createApps = `
<p>
  Вжух! и мы создали сразу сайт, приложение на ios и приложение на android;
</p>
`;

export default (action, data) => {
  const cat = document.querySelector('#cat');
  const catContainer = document.querySelector('.cat_container');
  const catContent = document.querySelector('#catContent');
  const catImg = document.querySelector('#catImg');
  if (action === 'show') {
    cat.classList.add('active');
    catContainer.classList.add('active');

    switch (data) {
      case 'createApps':
        catContent.innerHTML = createApps;
        catImg.src = '/assets/img/ginger-cat-show.png';
        break;
      case 'companyReject':
        catContent.innerHTML = companyReject;
        catImg.src = '/assets/img/ginger-cat-back.png';
        break;
      case 'companyEmpty':
        catContent.innerHTML = companyEmpty;
        catImg.src = '/assets/img/ginger-cat-sad.png';
        break;
      case 'nativeApp':
        catContent.innerHTML = nativeText;
        catImg.src = '/assets/img/ginger-cat-cat-with-book.png';
        break;
      case 'companyName':
        catContent.innerHTML = companyText;
        catImg.src = '/assets/img/ginger-cat-cat-with-book.png';
        break;
      case 'market':
        catContent.innerHTML = marketText;
        catImg.src = '/assets/img/ginger-cat-cat-with-book.png';
        break;

      default:
        break;
    }
  } else if (action === 'hide') {
    cat.classList.remove('active');
    catContainer.classList.remove('active');
  }
};
