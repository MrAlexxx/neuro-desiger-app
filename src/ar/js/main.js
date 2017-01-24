/**
 * Created by OMalitskyi on 02.12.2016.
 */

var renderer,
    onRenderFcts,
    scene,
    camera,
    OBJ,
    lightHelper;

var lightLeft,
    lightRight,
    hemiLight,
    dirLight;

$(document).ready(function () {

    // handle window resize
    $(window).on('resize',function () {
        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.aspect	= window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix()
    });

});



init();
// renderD();
renderAR();


//////////////////////////////////////////////////////////////////////////////////
//		Init
//////////////////////////////////////////////////////////////////////////////////
function init() {


    // init renderer
     renderer	= new THREE.WebGLRenderer({
            antialias	: true,
            alpha		: true
        });
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // array of functions for the rendering loop
     onRenderFcts = [];

    // init scene and camera
    scene = new THREE.Scene();
    camera	= new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.01, 2000);
    camera.position.z = 10;
    camera.position.y = 5;



//////////////////////////////////////////////////////////////////////////////////
//		Add lights in the scene
//////////////////////////////////////////////////////////////////////////////////


//Left
    lightLeft = new THREE.SpotLight( 0xffffff, 1 );
    lightLeft.name	= 'Left light';
    lightLeft.intensity = 0.2;
    lightLeft.position.set(-45, 25, 25);
    lightLeft.visible = false;
    scene.add(lightLeft);

//Right
    lightRight	= new THREE.SpotLight( 0xffffff, 1 );
    lightRight.name	= 'Right light';
    lightRight.intensity = 0.2;
    lightRight.position.set(45, 25, 25);
    lightRight.visible = false;
    scene.add(lightRight);


    lightHelper = new THREE.SpotLightHelper( lightRight );
    // scene.add( lightHelper );

//********** OR **********//

//Hemisphere Light
    hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
    hemiLight.groundColor.setHSL( 0.095, 1, 0.8);//255.222.179
    hemiLight.intensity = 0.5;
    hemiLight.position.set( 0, 50, 0 );
    scene.add( hemiLight );
//Directional Light
    dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
    dirLight.color.setHSL( 0.1, 1, 0.95 );
    dirLight.position.set( -1, 1.75, 1 );
    dirLight.position.multiplyScalar( 50 );
    dirLight.intensity = 0.52;
    scene.add( dirLight );


//////////////////////////////////////////////////////////////////////////////////
//		CONTROLS
//////////////////////////////////////////////////////////////////////////////////
       var controls = new THREE.OrbitControls(camera, renderer.domElement);
       controls.target.set( 0, 0, 0 );
       controls.update();
       controls.addEventListener('change', render);


}

/**
 * Rendering Augmented reality
 */
function renderAR() {
    // handle window resize
    window.addEventListener('resize', function(){
        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.aspect	= window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix()
    }, false);

    // set the scene as visible
    scene.visible = false;

    // render the scene
    onRenderFcts.push(function(){
        renderer.render( scene, camera );
    });

    // run the rendering loop
    var previousTime = performance.now();
    requestAnimationFrame(function animate(now){

        requestAnimationFrame( animate );

        onRenderFcts.forEach(function(onRenderFct){
            onRenderFct(now, now - previousTime)
        });

        previousTime = now;
    });

    doAugmentedReality();

}

function doAugmentedReality(){
    // init the marker recognition
    var jsArucoMarker	= new THREEx.JsArucoMarker();

    // init the image source grabbing
    if( false ){
        var videoGrabbing = new THREEx.VideoGrabbing();
        jsArucoMarker.videoScaleDown = 10
    }else if( true ){
        var videoGrabbing = new THREEx.WebcamGrabbing();
        jsArucoMarker.videoScaleDown = 2
    }else if( true ){
        var videoGrabbing = new THREEx.ImageGrabbing();
        jsArucoMarker.videoScaleDown = 10
    }else console.assert(false);

    // attach the videoGrabbing.domElement to the body
    document.body.appendChild(videoGrabbing.domElement);

    // process the image source with the marker recognition
    onRenderFcts.push(function() {
        var domElement = videoGrabbing.domElement;
        var markers = jsArucoMarker.detectMarkers(domElement);
        var object3d = scene;

        object3d.visible = false;

        // see if this.markerId has been found
        markers.forEach(function (marker) {
            // if( marker.id !== 265 )	return

            jsArucoMarker.markerToObject3D(marker, object3d);

            object3d.visible = true
        })
    });
}

/**
 * Default rendering 3d object
 */
function renderD() {
    lightHelper.update();
    // camera.lookAt(OBJ);
    animate();
}

function animate() {
    requestAnimationFrame( animate );
    render();
}

function render() {
    // camera.lookAt(cameraTarget); //scene.position
    renderer.render(scene, camera);

}
