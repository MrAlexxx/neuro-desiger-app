/**
 * Created by OMalitskyi on 02.12.2016.
 *
 * todo - implement loading obj files from "OBJImg" (https://github.com/JordanDelcros/OBJImg)
 * todo - add possibility to compressed Javascript file for more security and decreasing file size as it possible (https://github.com/mrdoob/three.js/wiki/Build-instructions)
 */


var path = '../models/';

var loader = new THREE.OBJLoader();
var material = new THREE.MeshStandardMaterial();
loader.load( path + '/sofa2.obj', function ( group ) {

    // instantiate a loader
    var loader = new THREE.TextureLoader();

// load a resource
    loader.load(
        // resource URL
        '../models/texture/leather_diffuse.jpg',
        // Function when resource is loaded
        function ( texture ) {
            // do something with the texture
            var material = new THREE.MeshBasicMaterial( {
                map: texture
            } );
        },
        // Function called when download progresses
        function ( xhr ) {
            console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
        },
        // Function called when download errors
        function ( xhr ) {
            console.log( 'An error happened' );
        }
    );


    group.traverse( function ( child ) {

        if ( child instanceof THREE.Mesh ) {

            child.material = material;
            console.log(child);
        }

    } );

    group.scale.x = group.scale.y = group.scale.z = 0.0002;
    scene.add( group );

} );

//////////////////////////////////////////////////////////////////////////////////
//		add an object in the scene
//////////////////////////////////////////////////////////////////////////////////

// var manager = new THREE.LoadingManager();
// var loader = new THREE.OBJLoader( manager );
// loader.load( '../models/sofa2.obj', function ( object ) {//sofa1.obj, round_sofa.obj ,sofa3.obj
//
//     object.scale.x = object.scale.y = object.scale.z = 0.0002;
//     // console.log(object);
//     object.position.set(0,0,0);
//     // object.rotation.z = .5*Math.PI ;
//     object.material = new THREE.MeshPhongMaterial( { color: 0x4b4e4c, specular: 0xffffff, shading: 100 } );
//
//     blendingMaterial(object);
//     // var logotype = object.children[0];
//     // var text = object.children[1];
//     // logotype.castShadow = true;
//     // text.castShadow = true;
//     //
//     // logotype.material = new THREE.MeshPhongMaterial( { color: 0x0a64aa, specular: 0xffffff, shading: 4 } );
//     // text.material = new THREE.MeshPhongMaterial( { color: 0x4b4e4c, specular: 0xffffff, shading: 1 } );
//
//     scene.add( object );
// }, onProgress, onError);

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
     obj.children.map(function (item) {
         item.material = creatingMaterial();

         console.log(item);
     });
}

/**
 * Creating material
 *
 * @returns {THREE.MeshBasicMaterial|MeshBasicMaterial|*}
 */
function creatingMaterial() {
    var texture = loadingTexture(),
        material;
    console.log(texture);
    texture.repeat.set( 3, 3 );
    material = new THREE.MeshBasicMaterial( { map: texture } );
    return material;
}

/**
 * Load the desired texture
 *
 * @returns { THREE.ImageUtils }
 */
function loadingTexture() {
    var loader = new THREE.TextureLoader;
     var textureLoader = new THREE.TextureLoader( '../models/texture/leather_diffuse.jpg' );
    return loader.load('../models/texture/01.jpg');
}
////////////////////////////////**********************************///////////////////////////////////

//
// // Add graphs and red lines
// ;(function(){
//     // add horizontal lines for graph
//     var material = new THREE.LineBasicMaterial({color: 0xff0000});
//     for (var i = 1; i < 8; i++) {
//         var geometry = new THREE.Geometry();
//         geometry.vertices.push(new THREE.Vector3(-0.9, 0.2, 0.2*i));
//         geometry.vertices.push(new THREE.Vector3(0.9, 0.2, 0.2*i));
//         var line = new THREE.Line(geometry, material);
//         scene.add( line );
//     };
//
//     // add vertical line for graph
//     var geometry = new THREE.Geometry();
//     geometry.vertices.push(new THREE.Vector3(-0.9, 0.2, 0));
//     geometry.vertices.push(new THREE.Vector3(-0.9, 0.2, 1.6));
//     var line = new THREE.Line(geometry, material);
//     scene.add( line );
//
//     addBar(-0.8,1.2);
//     addBar(-0.4,8);
//     addBar(0,6);
//     addBar(0.4,5);
//     addBar(0.8,7);
//
//     // addText("Dublin",{x:-0.8,y:-0.2,z:0},{x:Math.PI*0.25, y:0, z:-Math.PI*0.25});
//     // addText("Los Angeles",{x:-0.4,y:-0.2,z:0},{x:Math.PI*0.25, y:0, z:-Math.PI*0.25});
//     // addText("Rome",{x:0,y:-0.2,z:0},{x:Math.PI*0.25, y:0, z:-Math.PI*0.25});
//     // addText("Paris",{x:0.4,y:-0.2,z:0},{x:Math.PI*0.25, y:0, z:-Math.PI*0.25});
//     // addText("Toronto",{x:0.8,y:-0.2,z:0},{x:Math.PI*0.25, y:0, z:-Math.PI*0.25});
//     //
//     // addText("Summer",{x:-1.5,y:0,z:1.75},{x:Math.PI*0.5, y:0, z:0});
//     // addText("Temperature",{x:-1.6,y:0,z:1.6},{x:Math.PI*0.5, y:0, z:0});
//     //
//     //
//     // addText("5°C",{x:-1.4,y:0,z:0.2},{x:Math.PI*0.5, y:0, z:0});
//     // addText("10°C",{x:-1.4,y:0,z:0.4},{x:Math.PI*0.5, y:0, z:0});
//     // addText("15°C",{x:-1.4,y:0,z:0.6},{x:Math.PI*0.5, y:0, z:0});
//     // addText("20°C",{x:-1.4,y:0,z:0.8},{x:Math.PI*0.5, y:0, z:0});
//     // addText("25°C",{x:-1.4,y:0,z:1},{x:Math.PI*0.5, y:0, z:0});
//     // addText("30°C",{x:-1.4,y:0,z:1.2},{x:Math.PI*0.5, y:0, z:0});
//     // addText("35°C",{x:-1.4,y:0,z:1.4},{x:Math.PI*0.5, y:0, z:0});
//
// })()
// function addBar(posX,height){
//     var sizeBar = 0.2;
//     var highestHeight = 8+2;
//     var counter = 0;
//     var geometry = new THREE.BoxGeometry( sizeBar, sizeBar, sizeBar );
//     var material = new THREE.MeshPhongMaterial( { color:0x1054B5,reflectivity:1} );
//     var mesh = new THREE.Mesh( geometry, material );
//     mesh.position.x = posX;
//     mesh.position.y = 0;
//     mesh.position.z = 0;
//     var myMatrix = new THREE.Matrix4().set(
//         1,0,0,0,
//         0,1,0,0,
//         0,0,1,sizeBar/2,
//         0,0,0,1
//     );
//     mesh.geometry.applyMatrix( myMatrix )
//     scene.add( mesh );
//
//     onRenderFcts.push(function(now, delta){
//         counter += 0.1 * delta/80;
//         if (counter<height) {
//             mesh.scale.z =counter;
//         };
//         if(counter>highestHeight){
//             counter = 0
//         }
//     })
// }
// // Add text
// function addText(texte,pos,rot){
//     var materialFront = new THREE.MeshBasicMaterial( { color:0xff0000,reflectivity:1} );
//     var materialSide = new THREE.MeshBasicMaterial( { color:0x1054B5,reflectivity:1} );
//
//     var materials = [ materialFront, materialSide ];
//     var geometry = new THREE.TextGeometry( texte, {
//         size: 0.1,
//         height: 0.02,
//         curveSegments: 4,
//         font: "gentilis",
//         bevelThickness: 0,
//         bevelSize: 0.02,
//         bevelEnabled: false,
//         material: 0,
//         extrudeMaterial: 1
//     });
//
//     var material = new THREE.MeshFaceMaterial(materials);
//     var mesh = new THREE.Mesh(geometry, material );
//
//     mesh.position.set( pos.x, pos.y, pos.z);
//     mesh.rotation.set(rot.x,rot.y,rot.z);
//     scene.add(mesh);
// }
