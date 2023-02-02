import { ComponentType } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TypeCard } from '@core/enum/typeCard.enum';
import { ObjectValue } from '@core/models/utils.model';
import { DialogFormNoteComponent } from '@modules/notes/components/dialog-form-note/dialog-form-note.component';
import { routeEnpoints } from 'src/app/global/endpoints';
import { collectRouteParams } from 'src/app/utils/utils';
@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.scss']
})
export class ListNoteComponent {
  public service:string=routeEnpoints.notes;
  public typeCard:TypeCard=TypeCard.Note;
  public componentDialog:ComponentType<unknown>=DialogFormNoteComponent
  public idContact:string='';

  constructor(
    private router: Router,
  ) {
    let params=(collectRouteParams(this.router))
    this.idContact= (params as ObjectValue).id

  }
}
