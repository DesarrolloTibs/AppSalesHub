import { ComponentType } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TypeCard } from '@core/enum/typeCard.enum';
import { ObjectValue } from '@core/models/utils.model';
import { DialogFormEmailComponent } from '@modules/emails/components/dialog-form-email/dialog-form-email.component';
import { routeEnpoints } from 'src/app/global/endpoints';
import { collectRouteParams } from 'src/app/utils/utils';

@Component({
  selector: 'app-list-emails',
  templateUrl: './list-emails.component.html',
  styleUrls: ['./list-emails.component.scss']
})
export class ListEmailsComponent {
  public service:string=routeEnpoints.emails;
  public typeCard:TypeCard=TypeCard.Email;
  public componentDialog:ComponentType<unknown>=DialogFormEmailComponent
  public idContact:string='';
  constructor(
    private router: Router,
  ) {
    let params=(collectRouteParams(this.router))
    this.idContact= (params as ObjectValue).id

  }
}
