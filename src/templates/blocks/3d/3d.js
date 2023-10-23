/* eslint-disable import/no-unresolved */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

function main() {
  const canvas = document.querySelector('#canvas');
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    premultipliedAlpha: false,
  });

  const fov = 75;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 5;

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, 0);
  controls.update();
  controls.enableDamping = true;

  const scene = new THREE.Scene();

  {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });

  const cube = new THREE.Mesh(geometry, material);

  const gltfLoader = new GLTFLoader();
  const url = '../../../assets/3d/Acer Laptop.gltf';
  gltfLoader.load(url, (gltf) => {
    const root = gltf.scene;
    scene.add(root);
  });

  scene.add(cube);

  renderer.render(scene, camera);

  const canvasRender = renderer.domElement;

  function resizeRendererToDisplaySize() {
    const pixelRatio = window.devicePixelRatio;
    // eslint-disable-next-line no-bitwise
    const width = (canvasRender.clientWidth * pixelRatio) | 0;
    // eslint-disable-next-line no-bitwise
    const height = (canvasRender.clientHeight * pixelRatio) | 0;
    const needResize = canvasRender.width !== width || canvasRender.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  let renderRequested = false;

  function render() {
    renderRequested = false;

    if (resizeRendererToDisplaySize(renderer)) {
      camera.aspect = canvasRender.clientWidth / canvasRender.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);
  }
  render();

  function requestRenderIfNotRequested() {
    if (!renderRequested) {
      renderRequested = true;
      requestAnimationFrame(render);
    }
  }

  controls.addEventListener('change', requestRenderIfNotRequested);
  window.addEventListener('resize', requestRenderIfNotRequested);
}

main();
