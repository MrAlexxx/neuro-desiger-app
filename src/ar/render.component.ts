import { Component, OnInit } from '@angular/core';
// import {   } from "";


// declare var THREE:any;
// import WebGLRenderer = THREE.WebGLRenderer;

@Component({
    // moduleId: module.id,
    selector: 'render'
})

export class RenderComponent implements OnInit{

        // scene = new THREE.scene();
    // camera	= new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.01, 2000);
    // onRenderFcts :any[];
    // lightLeft = new THREE.SpotLight( 0xffffff, 1 );
    // lightRight	= new THREE.SpotLight( 0xffffff, 1 );
    // controls :any;
    // onRenderFcts :any;
    //
    // renderer	=  new THREE.WebGLRenderer({
    //     antialias	: true,
    //     alpha		: true
    // });

    constructor(){
        // this.renderer.setSize( window.innerWidth, window.innerHeight );
        console.log('12312');
    }

    // this.init();
    // this.renderD();
    // this.renderAR();
    ngOnInit() {
        alert('sdfsd');
    }

    // init(){
    //     document.body.appendChild( this.renderer.domElement );
    //
    //     // array of functions for the rendering loop
    //     this.onRenderFcts = [];
    //
    //     //configuration of camera
    //     this.camera.position.z = 10;
    //     this.camera.position.y = 5;
    //
    //     this.addLigting();
    //
    //     this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    //     this.controls.target.set( 0, 0, 0 );
    //     this.controls.update();
    //     this.controls.addEventListener('change', this.render);
    // }
    //
    // addLigting(){
    // //Left
    //     this.lightLeft.name	= 'Left light';
    //     this.lightLeft.intensity = 0.2;
    //     this.lightLeft.position.set(-45, 25, 25);
    //     this.lightLeft.visible = false;
    //     this.scene.add(this.lightLeft);
    //
    // //Right
    //     this.lightRight.name	= 'Right light';
    //     this.lightRight.intensity = 0.2;
    //     this.lightRight.position.set(45, 25, 25);
    //     this.lightRight.visible = false;
    //     this.scene.add(this.lightRight);
    //
    // // //********** OR **********//
    // //
    // // //Hemisphere Light
    // //         hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
    // //         hemiLight.groundColor.setHSL( 0.095, 1, 0.8);//255.222.179
    // //         hemiLight.intensity = 0.5;
    // //         hemiLight.position.set( 0, 50, 0 );
    // //         scene.add( hemiLight );
    // // //Directional Light
    // //         dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
    // //         dirLight.color.setHSL( 0.1, 1, 0.95 );
    // //         dirLight.position.set( -1, 1.75, 1 );
    // //         dirLight.position.multiplyScalar( 50 );
    // //         dirLight.intensity = 0.52;
    // //         scene.add( dirLight );
    //
    // }
    //
    // /**
    //  * Rendering Augmented reality
    //  */
    // renderAR() {
    //     // handle window resize
    //     window.addEventListener('resize', function(){
    //         this.renderer.setSize( window.innerWidth, window.innerHeight );
    //         this.camera.aspect	= window.innerWidth / window.innerHeight;
    //         this.camera.updateProjectionMatrix()
    //     }, false);
    //
    //     // set the scene as visible
    //     this.scene.visible = false;
    //
    //     // render the scene
    //     this.onRenderFcts.push(function(){
    //         this.renderer.render( this.scene, this.camera );
    //     });
    //
    //     // run the rendering loop
    //     var previousTime = performance.now();
    //     requestAnimationFrame(function animate(now){
    //
    //         requestAnimationFrame( animate );
    //
    //         this.onRenderFcts.forEach(function(onRenderFct){
    //             onRenderFct(now, now - previousTime)
    //         });
    //
    //         previousTime = now;
    //     });
    //
    //     this.doAugmentedReality();
    //
    // }
    //
    // doAugmentedReality(){
    //     // init the marker recognition
    //     //@todo: test with jsartoolkit
    //     var jsArucoMarker	= new THREEx.JsArucoMarker();
    //
    //     // init the image source grabbing
    //     if( false ){
    //         var videoGrabbing = new THREEx.VideoGrabbing();
    //         jsArucoMarker.videoScaleDown = 10
    //     }else if( true ){
    //         var videoGrabbing = new THREEx.WebcamGrabbing();
    //         jsArucoMarker.videoScaleDown = 2
    //     }else if( true ){
    //         var videoGrabbing = new THREEx.ImageGrabbing();
    //         jsArucoMarker.videoScaleDown = 10
    //     }else console.assert(false);
    //
    //     // attach the videoGrabbing.domElement to the body
    //     document.body.appendChild(videoGrabbing.domElement);
    //
    //     // process the image source with the marker recognition
    //     this.onRenderFcts.push(function() {
    //         var domElement = videoGrabbing.domElement;
    //         var markers = jsArucoMarker.detectMarkers(domElement);
    //         var object3d = this.scene;
    //
    //         object3d.visible = false;
    //
    //         // see if this.markerId has been found
    //         markers.forEach(function (marker) {
    //             // if( marker.id !== 265 )	return
    //
    //             jsArucoMarker.markerToObject3D(marker, object3d);
    //
    //             object3d.visible = true
    //         })
    //     });
    // }
    //
    // /**
    //  * Default rendering 3d object
    //  */
    // renderD() {
    //     // lightHelper.update();
    //     // camera.lookAt(OBJ);
    //     this.animate();
    // }
    //
    // animate() {
    //     requestAnimationFrame( this.animate );
    //     this.render();
    // }
    //
    // render() {
    //     // camera.lookAt(cameraTarget); //scene.position
    //     this.renderer.render(this.scene, this.camera);
    //
    // }
}