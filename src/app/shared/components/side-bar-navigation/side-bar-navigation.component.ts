import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar-navigation',
  templateUrl: './side-bar-navigation.component.html',
  styleUrls: ['./side-bar-navigation.component.scss']
})
export class SideBarNavigationComponent {
@Input () Icon:string=""
@Input () Title:string=""
@Input () Link:string=""
}
