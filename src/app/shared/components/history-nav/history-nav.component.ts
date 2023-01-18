import { Component, OnInit,Input } from '@angular/core';
import {ShareService} from "@core/services/share.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-history-nav',
  templateUrl: './history-nav.component.html',
  styleUrls: ['./history-nav.component.scss']
})
export class HistoryNavComponent implements OnInit {
  @Input() label: string='';
  @Input() history: any = [];
  public title: string="";
  public limitAccount: any = null;
  constructor(private share: ShareService,
    private router: Router,
   ) {
}
  ngOnInit(): void {
   // const {name} = this.share.getSettings();
   const {name} = {"name":"SalesHub"};
   this.title = name;
   this.share.limitAccount.subscribe(res => {
    if (res) {
      this.limitAccount = res;
    }
  })
  }
}
