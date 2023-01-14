import { Component } from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import { RestService } from '@core/services/rest.service';
import {ShareService} from "@core/services/share.service";
import {LoadingBarService} from "@ngx-loading-bar/core";
import {SwPush, SwUpdate} from "@angular/service-worker";
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({opacity: 0}),
          stagger(30, [
            animate(100, style({opacity: 1}))
          ])
        ], {optional: true})
      ])
    ])
  ]
})
export class HomePageComponent {
  // title = 'saleshub';
  // progress: number = 0;
  // error: any = null;


  // constructor(public loader: LoadingBarService, public rest:RestService,
  //   public shared: ShareService,
  //   private swUpdate: SwUpdate,
  //   private swPush: SwPush,){
  //   const state = this.loader.useRef("router");
  //   state.value$.subscribe(res => {
  //     console.log("Progress",res)
      
  //     this.progress = res;
  //   })

  
  //   this.rest.catchError.subscribe(res => {
  //     console.log("ErrorGeneral",res)
  //     this.error = res;
  //   })
  // }
}
