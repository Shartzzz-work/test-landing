import loaderA from '../../../../../../components/loaders/loaderA';

export default () => {
  const gadgetIos = document.querySelector('.gadget_ios');
  const gadgetIosScreen = document.querySelector('.gadget_ios__screen');

  gadgetIos.classList.add('active');
  gadgetIosScreen.classList.add('loader');
  gadgetIosScreen.innerHTML = loaderA();

  const gadgetLaptop = document.querySelector('.gadget_laptop');
  const gadgetLaptopScreen = document.querySelector('.gadget_laptop__screen');

  gadgetLaptop.classList.add('active');
  gadgetLaptopScreen.classList.add('loader');
  gadgetLaptopScreen.innerHTML = loaderA();

  const gadgetAndroid = document.querySelector('.gadget_android');
  const gadgetAndroidScreen = document.querySelector('.gadget_android__screen');

  gadgetAndroid.classList.add('active');
  gadgetAndroidScreen.classList.add('loader');
  gadgetAndroidScreen.innerHTML = loaderA();
};
