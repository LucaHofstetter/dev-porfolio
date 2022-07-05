import { Camera, Material, Texture } from "https://cdn.skypack.dev@0.132.2";
import { OrbitControls } from "https://cdn.skypack.dev@0.132.2/examples/jsm/controls/OrbitControls.js";

var testScene = new THREE.Scene();
var testCamera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var testRenderer = new THREE.WebGLRenderer();

testRenderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(testRenderer.domElement);

// CREATE CUBE (for first practice)
var geometry = new THREE.BoxGeometry(1,1,1);
var material = new THREE.MeshBasicMaterial( {
  color: #fff
});
var cube = new THREE.Mesh(geometry, material);

testScene.add(cube);
camera.position.z = 5;

var animate = () => {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  testRenderer.render(scene, camera);

};

animate();