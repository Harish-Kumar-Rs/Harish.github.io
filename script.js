// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 3D Globe for Skills Section
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, 400);
document.getElementById('globe-container').appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(5, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0x6e8efb, wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 15;

function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// GSAP Animations
gsap.from('.hero h1', { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from('.hero p', { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from('.btn', { opacity: 0, scale: 0.5, duration: 1, delay: 1.5 });