import { Component, Input } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: 'app-side-bar-navigation',
  templateUrl: './side-bar-navigation.component.html',
  styleUrls: ['./side-bar-navigation.component.scss']
})
export class SideBarNavigationComponent {
@Input () Icon:string=""
@Input () Title:string=""
@Input () Link:string=""
constructor(
  private matIconRegistry: MatIconRegistry,
  private domSanitizer: DomSanitizer
) {
this.matIconRegistry.addSvgIcon(
  "applause",
  this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/custom/applause.svg")
);
}
}
