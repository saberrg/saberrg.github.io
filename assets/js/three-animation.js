// Set up the scene, camera, and renderer as global variables.
var scene, camera, renderer;

init();
animate();

function init() {
    // Create the scene and set the scene size.
    scene = new THREE.Scene();
    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

    // Create a renderer and add it to the DOM.
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(WIDTH, HEIGHT);
    document.body.appendChild(renderer.domElement);

    // Create a camera and a position for it.
    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
    camera.position.set(0,6,0);
    scene.add(camera);

    // Create a cube and add it to the scene.
    var geometry = new THREE.BoxGeometry(2, 2, 2);
    var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

function animate() {
    requestAnimationFrame(animate);

    // Any animations go here.
    scene.children[1].rotation.x += 0.01;
    scene.children[1].rotation.y += 0.01;

    renderer.render(scene, camera);
}
