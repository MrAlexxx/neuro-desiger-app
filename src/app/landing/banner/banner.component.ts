import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { RenderService } from "../../ar/render.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
  providers: [RenderService]
})
export class BannerComponent implements OnInit {

  @ViewChild('container')
  private containerRef: ElementRef;

  private get container() : HTMLElement {
    return this.containerRef.nativeElement;
  }

  constructor(private _renderService: RenderService) { }

  ngOnInit() {
    if (this.container) {
      this._renderService.init(this.container);
      this._renderService.renderD();
      this._renderService.addBanner("banner1");

      // this._renderService.renderAR();
    }
  }

}
