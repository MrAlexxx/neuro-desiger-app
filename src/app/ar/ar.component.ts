import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ItemsService } from "../items.service";
import { RenderService } from "./render.service";



@Component({
  moduleId: module.id,
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.css'],
  providers: [RenderService]
})
export class ArComponent implements OnInit {

  key: number;
  container: HTMLElement;

  constructor(private route: ActivatedRoute, private items:ItemsService, private _renderService: RenderService ) {
    this.key = route.snapshot.params['key']; //parameter from link
  }

  ngOnInit() {
    this.container = document.getElementById('container');
    if (this.container) {
      this._renderService.init(this.container);
      this._renderService.renderD();
      // this._renderService.renderAR();
    }
  }


}
