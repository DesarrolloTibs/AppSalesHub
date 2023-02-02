import { ComponentType } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { TypeCard } from '@core/enum/typeCard.enum';
import { DialogFormNoteComponent } from '@modules/notes/components/dialog-form-note/dialog-form-note.component';
import { routeEnpoints } from 'src/app/global/endpoints';
@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.scss']
})
export class ListNoteComponent {
  public service:string=routeEnpoints.notes;
  public typeCard:TypeCard=TypeCard.Note;
  public componentDialog:ComponentType<unknown>=DialogFormNoteComponent
}
