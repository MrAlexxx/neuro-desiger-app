import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ItemsService } from "../items.service";



@Component({
  moduleId: module.id,
  selector: 'app-ar',
  templateUrl: './ar.component.html',
  styleUrls: ['./ar.component.css']
})
export class ArComponent implements OnInit {

  key: number;

  constructor(route: ActivatedRoute, items:ItemsService ) {
    this.key = route.snapshot.params['key']; //parameter from link
  }

  ngOnInit() {
  }

}
