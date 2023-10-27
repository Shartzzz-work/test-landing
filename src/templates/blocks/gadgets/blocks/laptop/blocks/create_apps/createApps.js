import loader1 from '../../../../../../elements/loaders/loader1';

export default () => {
  const gadgetIos = document.querySelector('.gadget_ios');
  const gadgetIosScreen = document.querySelector('.gadget_ios__screen');

  gadgetIos.classList.add('active');
  gadgetIosScreen.classList.add('loader');
  gadgetIosScreen.innerHTML = loader1();

  const gadgetLaptop = document.querySelector('.gadget_laptop');
  const gadgetLaptopScreen = document.querySelector('.gadget_laptop__screen');

  gadgetLaptop.classList.add('active');
  gadgetLaptopScreen.classList.add('loader');
  gadgetLaptopScreen.innerHTML = loader1();

  const gadgetAndroid = document.querySelector('.gadget_android');
  const gadgetAndroidScreen = document.querySelector('.gadget_android__screen');

  gadgetAndroid.classList.add('active');
  gadgetAndroidScreen.classList.add('loader');
  gadgetAndroidScreen.innerHTML = loader1();
};
