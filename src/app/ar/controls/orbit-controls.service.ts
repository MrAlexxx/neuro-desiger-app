import { Directive, OnInit, ContentChild, Input, Injectable } from '@angular/core';

import * as THREE from 'three';
var OrbitControls = require('three-orbit-controls')(THREE);

@Injectable()
export class OrbitControlsService {
  // @Input() enabled: boolean = true;
  enabled: boolean = true;
  controls: any;

  constructor() { }

  setupControls(camera, renderer) {

    this.controls = new OrbitControls(camera, renderer.domElement);
    this.controls.enabled = this.enabled;
    this.controls.target.set( 0, 0, 0 );

    this.controls.addEventListener('change', renderer);// @todo: need to check
    console.log('111');
    // return this.controls;
  }

  updateControls(scene, camera) {
    this.controls.update();
}
}

