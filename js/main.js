/**
 * Created by OMalitskyi on 02.12.2016.
 */

var renderer,
    onRenderFcts,
    scene,
    camera,
    object3d;



init();
// animate();
renderX();


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
    camera.position.z = 1;


    //////////////////////////////////////////////////////////////////////////////////
    //		add lights in the scene
    //////////////////////////////////////////////////////////////////////////////////

     object3d	= new THREE.AmbientLight(0x101010);
    object3d.name	= 'Ambient light';
    scene.add(object3d);
     object3d	= new THREE.DirectionalLight('white', 0.225);
    object3d.position.set(2.6,-3,1);
    object3d.name	= 'Back light';
    scene.add(object3d);
     object3d	= new THREE.DirectionalLight('white', 0.375);
    object3d.position.set(-2, 0, -1);
    object3d.name 	= 'Key light';
    scene.add(object3d);
     object3d	= new THREE.DirectionalLight('white', 0.5*2);
    object3d.position.set(3, -5, 3);
    object3d.name	= 'Fill light';
    scene.add(object3d);

    //////////////////////////////////////////////////////////////////////////////////
    //		CONTROLS
    //////////////////////////////////////////////////////////////////////////////////
       var controls = new THREE.OrbitControls(camera, renderer.domElement);
       controls.target.set( 0, 0, 0 );
       controls.update();
       controls.addEventListener('change', render);


}

function renderX() {
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
/**
 *
 */
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

function animate() {
    requestAnimationFrame( animate );
    render();
}

function render() {
    // camera.lookAt(cameraTarget); //scene.position
    renderer.render(scene, camera);

}
