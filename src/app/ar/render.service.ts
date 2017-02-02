/**
 * Created by OMalitskyi on 04.01.2017.
 *
 * @todo - refactor method of including external lib
 */
import { Injectable } from "@angular/core";
import * as THREE from 'three';

var OrbitControls = require('three-orbit-controls')(THREE);
// import OrbitControls = THREE.OrbitControls;
// import { OrbitControlsService } from "./controls/orbit-controls.service";
import PerspectiveCamera = THREE.PerspectiveCamera;
import Renderer = THREE.WebGLRenderer;
import Scene = THREE.Scene;
import SpotLightHelper = THREE.SpotLightHelper;
import SpotLight = THREE.SpotLight;

import { ModelsService } from "./models/models.service";


@Injectable()
export class RenderService {

    renderer: Renderer;
    scene: Scene;
    camera:	PerspectiveCamera;
    onRenderFcts: any[];
    lightLeft: SpotLight;
    lightRight: SpotLight;
    lightHelper: SpotLightHelper;

    // @ContentChild(OrbitControlsDirective) orbitDirective: OrbitControlsDirective;
    controls :any;


    // @Input()
    // public set setContainer(value: HTMLElement) {
    //     if (value)
    //         this.container = value;
    // }

    constructor(private _modelsService: ModelsService){
        // _modelsService = new ModelsService(this.scene);
        console.log('12312');
    }


    init(container: HTMLElement): void{

        const width = window.innerWidth;
        const height = window.innerHeight - 90;

        this.renderer = new THREE.WebGLRenderer({
            antialias	: true,
            alpha		: true
        });
        this.renderer.setSize( width, height );
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.scene = new THREE.Scene();

        container.appendChild( this.renderer.domElement );

        //configuration of camera
        this.camera= new THREE.PerspectiveCamera(40, width / height, 0.01, 2000);
        this.camera.position.z = 10;
        this.camera.position.y = 5;

        // Configuration of light
        this.lightLeft = new THREE.SpotLight( 0xffffff, 1 );
        this.lightRight	= new THREE.SpotLight( 0xffffff, 1 );
        this.addLigting();


        // Array of functions for the rendering loop
        this.onRenderFcts = [];

        // Set controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.target.set( 0, 0, 0 );
        this.controls.addEventListener('change', () => this.render());

        // Bind to window resizes
        window.addEventListener('resize',() => this.onResize());

        // Adding some debug helpers
        this.debugHelpers();
    }

    addLigting(){
    //Left
        this.lightLeft.name	= 'Left light';
        this.lightLeft.intensity = 0.2;
        this.lightLeft.position.set(-45, 25, 25);
        this.lightLeft.visible = false;
        this.scene.add(this.lightLeft);

    //Right
        this.lightRight.name	= 'Right light';
        this.lightRight.intensity = 0.2;
        this.lightRight.position.set(45, 25, 25);
        this.lightRight.visible = false;
        this.scene.add(this.lightRight);

        this.lightHelper = new THREE.SpotLightHelper( this.lightRight );
        this.scene.add( this.lightHelper );

    // //********** OR **********//
    //
    // //Hemisphere Light
    //         hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.6 );
    //         hemiLight.groundColor.setHSL( 0.095, 1, 0.8);//255.222.179
    //         hemiLight.intensity = 0.5;
    //         hemiLight.position.set( 0, 50, 0 );
    //         scene.add( hemiLight );
    // //Directional Light
    //         dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
    //         dirLight.color.setHSL( 0.1, 1, 0.95 );
    //         dirLight.position.set( -1, 1.75, 1 );
    //         dirLight.position.multiplyScalar( 50 );
    //         dirLight.intensity = 0.52;
    //         scene.add( dirLight );

    }

    debugHelpers(): void{
        let geometry = new THREE.PlaneGeometry(1,1,10,10);
        let material = new THREE.MeshBasicMaterial( {
            wireframe : true
        });
        let meshObj = new THREE.Mesh(geometry, material);
        this.scene.add( meshObj );

        var meshAx = new THREE.AxisHelper;
        this.scene.add( meshAx );
    }

    /**
     * Rendering Augmented reality
     */
    renderAR() {
        // handle window resize
        // window.addEventListener('resize', function(){
        //     this.renderer.setSize( window.innerWidth, window.innerHeight );
        //     this.camera.aspect	= window.innerWidth / window.innerHeight;
        //     this.camera.updateProjectionMatrix()
        // }, false);
        //
        // // set the scene as visible
        // this.scene.visible = false;
        //
        // // render the scene
        // this.onRenderFcts.push(function(){
        //     this.renderer.render( this.scene, this.camera );
        // });
        //
        // // run the rendering loop
        // var previousTime = performance.now();
        // requestAnimationFrame(function animate(now){
        //
        //     requestAnimationFrame( animate );
        //
        //     this.onRenderFcts.forEach(function(onRenderFct){
        //         onRenderFct(now, now - previousTime)
        //     });
        //
        //     previousTime = now;
        // });
        //
        // this.doAugmentedReality();

    }

    doAugmentedReality(){
        // init the marker recognition
      //   //@todo: test with jsartoolkit
      //   var jsArucoMarker	= new THREEx.JsArucoMarker();
      //
      //   // init the image source grabbing
      //
      // if( true ){
      //       var videoGrabbing = new THREEx.ImageGrabbing();
      //       jsArucoMarker.videoScaleDown = 10
      //   }else console.assert(false);
      //
      //   // attach the videoGrabbing.domElement to the body
      //   document.body.appendChild(videoGrabbing.domElement);
      //
      //   // process the image source with the marker recognition
      //   this.onRenderFcts.push(function() {
      //       var domElement = videoGrabbing.domElement;
      //       var markers = jsArucoMarker.detectMarkers(domElement);
      //       var object3d = this.scene;
      //
      //       object3d.visible = false;
      //
      //       // see if this.markerId has been found
      //       markers.forEach(function (marker) {
      //           // if( marker.id !== 265 )	return
      //
      //           jsArucoMarker.markerToObject3D(marker, object3d);
      //
      //           object3d.visible = true
      //       })
      //   });
    }

    /**
     * Default rendering 3d object
     */
    renderD() {
        // lightHelper.update();
        // camera.lookAt(OBJ);
        this.animate();
    }

    animate() {
        requestAnimationFrame(() => this.animate );

        this.controls.update();
        this.render();
    }

    render(){
        this.renderer.render(this.scene, this.camera);
    }

    onResize() {
        const width = window.innerWidth;
        const height = window.innerHeight - 90; //@todo: need to check

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
    }

}