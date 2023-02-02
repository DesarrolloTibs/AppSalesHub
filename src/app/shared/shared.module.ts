import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DecimalPipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';

import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { TableGridComponent } from './components/table-grid/table-grid.component';
import { SideBarNavigationComponent } from './components/side-bar-navigation/side-bar-navigation.component';
import { TranslateModule } from '@ngx-translate/core';

import { ErrorLayerComponent } from './components/error-layer/error-layer.component';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';
import { LoadingSvgComponent } from './components/loading-svg/loading-svg.component';
import { ButtonProgressComponent } from './components/button-progress/button-progress.component';
import { HistoryNavComponent } from './components/history-nav/history-nav.component';
import { MtxGridModule } from '@ng-matero/extensions/grid';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { FormsModule } from '@angular/forms';
import { DinamycPipePipe } from './pipe/dinamyc-pipe.pipe';
import { ActivePipe } from './pipe/active.pipe';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { CardInfoDetailComponent } from './components/card-info-detail/card-info-detail.component';

import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { DateAsAgoPipe } from './pipe/date-as-ago.pipe';

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    SideBarComponent,
    TableGridComponent,
       SideBarNavigationComponent,
       ButtonProgressComponent,
       ErrorLayerComponent,
       LoadingSvgComponent,
       HistoryNavComponent,
       DinamycPipePipe,
       ActivePipe,
       DialogDeleteComponent,
       CardInfoComponent,
       CardInfoDetailComponent,
       SafeHtmlPipe,
       DateAsAgoPipe
  ],
  imports: [
    CommonModule, 
    MaterialModule,
   RouterModule,
   TranslateModule,
   LottieModule.forRoot({player: playerFactory}),
   MtxGridModule,
   MtxSelectModule,
   FormsModule
   
  
  ],
  exports:[
    SideBarComponent,
    TableGridComponent,
    ButtonProgressComponent,
    ErrorLayerComponent,
    LoadingSvgComponent,
    HistoryNavComponent,
    MtxGridModule,
    MtxSelectModule,
    FormsModule,
    CardInfoComponent
  ,DinamycPipePipe
  ],
  providers:[CurrencyPipe,DecimalPipe,SlicePipe,TitleCasePipe,ActivePipe],
  bootstrap:[SideBarComponent]
})
export class SharedModule { }
