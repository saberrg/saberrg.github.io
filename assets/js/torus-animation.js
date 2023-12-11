var scene, camera, renderer, torus;

init();
animate();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Torus geometry
    var geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    var material = new THREE.MeshStandardMaterial({ color: 0xff6347, wireframe: false });
    torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Lights
    var pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(20, 20, 20);
    var ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(pointLight, ambientLight);

    // Camera position
    camera.position.z = 30;
}

function animate() {
    requestAnimationFrame(animate);

    // Rotation
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;

    // Change color over time
    torus.material.color.setHSL((Math.sin(Date.now() * 0.001) + 1) / 2, 0.5, 0.5);

    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
