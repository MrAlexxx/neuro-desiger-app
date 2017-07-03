/**
 * Created by OMalitskyi on 12.01.2017.
 *
 * todo - implement loading obj files from "OBJImg" (https://github.com/JordanDelcros/OBJImg)
 * todo - add possibility to compressing Javascript file for more security and decreasing file size as it possible (https://github.com/mrdoob/three.js/wiki/Build-instructions)
 *
 * todo - implement tessellation [ficha: when user change the good, it destroying by using  tessellation] (https://threejs.org/examples/#webgl_modifier_tessellation)
 */
///<reference path="../../../../node_modules/@types/three/index.d.ts"/>
import { Injectable } from '@angular/core';

import * as THREE from 'three';
import LoadingManager = THREE.LoadingManager;
import MeshBasicMaterial = THREE.MeshBasicMaterial;
import MeshPhongMaterial = THREE.MeshPhongMaterial;
import Texture = THREE.Texture;
import Scene = THREE.Scene;

const OBJLoader = require('three-obj-loader');
OBJLoader(THREE);


@Injectable()
export class ModelsService {
    manager: LoadingManager = new THREE.LoadingManager();
    loader: any;
    OBJ: any;

    constructor() {
        this.manager.onProgress = (item, loaded, total) => {
            console.log(item, loaded, total);
        };

        this.loader = new THREE.OBJLoader(this.manager);

    }

    addObject(scene:Scene, name:string="sofa1"){

        this.loader.load('../../../models/'+name+'.obj',  object => {//sofa1.obj, round_sofa.obj ,sofa3.obj

            console.log(object);
            object.scale.multiplyScalar(0.02);
            object.position.set(0, 0, 0);
            // object.rotation.z = .5*Math.PI;
            // object.rotation.x = -.5*Math.PI;


            // object.material = new THREE.MeshPhongMaterial( { color: 0x4b4e4c, specular: 0xffffff, shading: 100 } );


            this.blendingMaterial(object);

           scene.add(object);
            this.OBJ = object;
            console.log(this.OBJ);
        }, ModelsService.onProgress, ModelsService.onError);
/*******************************************************/
       //  let textureDif = this.loadingTexture('velour_diffuse.jpg');
       //  let geometry = new THREE.BoxGeometry( 1, 1, 1 );
       //  let material = new THREE.MeshPhongMaterial( {
       //      color: 0xffffff,
       //      // color: 0xccddff,
       //      envMap: textureDif,
       //      refractionRatio: 0.98,
       //      reflectivity: 0.9
       //  } );// textile
       //  let cube = new THREE.Mesh( geometry, material );
       // return cube;
        /**********************************************/
        // console.log(this.OBJ);
        // return this.OBJ;
    }

    addObjectsSet(scene:Scene,name:string){
        this.loader.load('../../../models/'+name+'.obj',  object => {//sofa1.obj, round_sofa.obj ,sofa3.obj

            console.log(object);
            object.scale.multiplyScalar(0.008);
            object.position.set(0, 0, 0);
            // object.rotation.z = .5*Math.PI;
            // object.rotation.x = -.5*Math.PI;


            // object.material = new THREE.MeshPhongMaterial( { color: 0x4b4e4c, specular: 0xffffff, shading: 100 } );


            // this.blendingMaterial(object);

            scene.add(object);
            this.OBJ = object;
            console.log(this.OBJ);
        }, ModelsService.onProgress, ModelsService.onError);
    }

    static onProgress(xhr) {
        if (xhr.lengthComputable) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log(Math.round(percentComplete) + '% downloaded');
        }
    }

    static onError(xhr) {
        alert(xhr)
    }

    /**
     * Blending material with object
     *
     * @param obj
     */
    blendingMaterial(obj) {
        // blending material for every children element
        obj.traverse( child => {
            if (child instanceof THREE.Mesh) {
                child.material = this.creatingMaterial();
            }
        });
    }

    /**
     * Creating new material
     *
     * @returns {THREE.MeshPhongMaterial|THREE.MeshPhongMaterial}
     */
    creatingMaterial(): MeshBasicMaterial|MeshPhongMaterial {
        let textureDif = this.loadingTexture('velour_diffuse.jpg');
        let textureRef = this.loadingTexture('velour_reflection.jpg');


        // var material = new THREE.MeshPhongMaterial( { specular: 0x333333, shininess: 100, envMap: reflectionCube, combine: THREE.MixOperation, reflectivity: 0.1, perPixel: true } );
        // material.wrapAround = true;
        // material.wrapRGB.set( 0.5, 0.5, 0.5 );
        // material.side = THREE.DoubleSide;


        // return new THREE.MeshPhongMaterial({
        //     specular: 0x333333,
        //     shininess: 2.5,
        //     emissive: 2.5,
        //     // morphTargets: true,
        //     // morphNormals: true,
        //     // vertexColors: THREE.FaceColors,
        //     // shading: THREE.SmoothShading
        // }); // leather


        return new THREE.MeshPhongMaterial({
            color: 0xaaaaaa,
            shininess: 1.5,
            map: textureDif, /* bumpMap: texture, bumpScale: 0.15, */
            // lightMap:textureRef,
            combine: THREE.MixOperation,
            reflectivity: 0.71,
            shading: THREE.FlatShading
        }); // leather
        // return new THREE.MeshPhongMaterial( { color: 0xccddff, envMap: textureDif, refractionRatio: 0.98, reflectivity: 0.9 } );// textile

    }

    /**
     * Load the desired texture
     *
     * @param textureUrl
     * @returns {THREE.Texture}
     */
    loadingTexture(textureUrl): Texture {

        let texture = new THREE.Texture();
        let loader = new THREE.ImageLoader(this.manager);

        loader.load('../../../models/texture/' + textureUrl, image => {
            texture.image = image;
            texture.needsUpdate = true;
        });
        texture.minFilter = THREE.LinearFilter;

        // Add if need to scale texture
        texture.repeat.set(8, 8);
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        return texture;
    }

}
