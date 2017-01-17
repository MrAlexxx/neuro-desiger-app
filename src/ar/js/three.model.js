/**
 * Created by OMalitskyi on 02.12.2016.
 *
 * todo - implement loading obj files from "OBJImg" (https://github.com/JordanDelcros/OBJImg)
 * todo - add possibility to compressing Javascript file for more security and decreasing file size as it possible (https://github.com/mrdoob/three.js/wiki/Build-instructions)
 *
 * todo - implement tessellation [ficha: when user change the good, it destroying by using  tessellation] (https://threejs.org/examples/#webgl_modifier_tessellation)
 */

//////////////////////////////////////////////////////////////////////////////////
//		add an object in the scene
//////////////////////////////////////////////////////////////////////////////////

var manager = new THREE.LoadingManager();
manager.onProgress = function ( item, loaded, total ) {
    console.log( item, loaded, total );
};

var loader = new THREE.OBJLoader( manager );
loader.load( '../models/sofa1.obj', function ( object ) {//sofa1.obj, round_sofa.obj ,sofa3.obj

    // console.log(object);
    object.scale.multiplyScalar( 0.002 );
    object.position.set(0,0,0);
    // object.rotation.z = .5*Math.PI;
    // object.rotation.x = -.5*Math.PI;


    // object.material = new THREE.MeshPhongMaterial( { color: 0x4b4e4c, specular: 0xffffff, shading: 100 } );

    blendingMaterial(object);

    scene.add( object );
    OBJ = object;
}, onProgress, onError);

// add some debug display

;(function(){
    var geometry = new THREE.PlaneGeometry(1,1,10,10);
    var material = new THREE.MeshBasicMaterial( {
        wireframe : true
    });
    var mesh = new THREE.Mesh(geometry, material);
    scene.add( mesh );

    var mesh = new THREE.AxisHelper;
    scene.add( mesh );
})();
// Called when download progresses
var onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log( Math.round(percentComplete, 2) + '% downloaded' );
    }
};

// Called when download errors
var onError = function ( xhr ) { alert(xhr) };

//todo - upgrade resizing method
function getResizingCoefficient(){
    var d =  (window.innerWidth > 1000) ? 1400 : 1000;
    return window.innerWidth / d;
}


/**
 * Blending material with object
 *
 * @param obj
 */
function blendingMaterial(obj) {

    // blending material for every children element
    obj.traverse( function ( child ) {
        if ( child instanceof THREE.Mesh ) {
            child.material = creatingMaterial();
        }
    } );
}

/**
 * Creating material
 *
 * @returns {THREE.MeshBasicMaterial|MeshBasicMaterial|*}
 */
function creatingMaterial() {
    var textureDif = loadingTexture('velour_diffuse1.jpg');
    var textureRef = loadingTexture('velour_reflection1.jpg');


    // var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 100, envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.1, perPixel: true } );
    // material.wrapAround = true;
    // material.wrapRGB.set( 0.5, 0.5, 0.5 );
    // material.side = THREE.DoubleSide;



   return new THREE.MeshPhongMaterial( {
        specular: 0x333333,
        shininess: 2.5,
        emissive: 2.5,
       // morphTargets: true,
       // morphNormals: true,
       // vertexColors: THREE.FaceColors,
       // shading: THREE.SmoothShading
    } ); // leather

    // return new THREE.MeshPhongMaterial({
    //     color: 0xaaaaaa,
    //     shininess: 1.5,
    //     map: textureDif, /* bumpMap: texture, bumpScale: 0.15, */
    //     // lightMap:textureRef,
    //     combine: THREE.MixOperation,
    //     reflectivity: 0.71,
    //     shading: THREE.FlatShading
    // }); // leather
    // return new THREE.MeshPhongMaterial( { color: 0xccddff, envMap: textureDif, refractionRatio: 0.98, reflectivity: 0.9 } );// textile

}

/**
 * Load the desired texture
 *
 * @returns {*|Texture}
 */
function loadingTexture(textureUrl) {

    var texture = new THREE.Texture();
    var loader = new THREE.ImageLoader( manager );

     loader.load( '../models/texture/'+textureUrl, function ( image ) {
            texture.image = image;
            texture.needsUpdate = true;
        } );
    texture.minFilter = THREE.LinearFilter;

//add if need to scale texture
    texture.repeat.set(8, 8);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    return texture;
}
