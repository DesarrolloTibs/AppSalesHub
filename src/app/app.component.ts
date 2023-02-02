import { Component, OnInit } from '@angular/core';
import { RestService } from '@core/services/rest.service';
import {ShareService} from "@core/services/share.service";
import {LoadingBarService} from "@ngx-loading-bar/core";
import {animate, style, transition, trigger} from "@angular/animations";
import {SwPush, SwUpdate} from "@angular/service-worker";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('swipe', [
      transition(':enter', [
        style({transform: 'translateY(-20%)', opacity: '0'}),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.2s ease-out', style({transform: 'translateY(20%)', opacity: '1'}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'saleshub';
  progress: number = 0;
  error: any = null;


  constructor(public loader: LoadingBarService, public rest:RestService,
    public shared: ShareService,
    private swUpdate: SwUpdate,
    private swPush: SwPush,){
    const state = this.loader.useRef("http");
    state.value$.subscribe(res => {
      
      this.progress = res;
    })

  
    this.rest.catchError.subscribe(res => {
      
      this.error = res;
    })
  }
  ngOnInit() {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        this.shared.openUpdateModal()
      });
    }
  }
}
