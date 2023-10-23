import {
  Scene,
  WebGLRenderer,
  Fog,
  PerspectiveCamera,
  DirectionalLight,
  HemisphereLight,
} from 'three';

// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const canvas = document.querySelector('canvas');

function init() {
  const scene = new Scene();
  const renderer = new WebGLRenderer({
    canvas,
    alpha: true,
    premultipliedAlpha: false,
    antialias: true,
  });

  const fov = 75;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 310;

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    const canvas = renderer.domElement;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();

    renderer.render(scene, camera);

    renderer.setPixelRatio(window.devicePixelRatio * 0.6);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const needResize = canvas.width !== width || canvas.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}

if (canvas && window.innerWidth > 1000) {
  init();
}
