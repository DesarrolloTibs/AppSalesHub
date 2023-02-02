import { Component, Input } from '@angular/core';
import { TypeCard } from '@core/enum/typeCard.enum';
import { EmailService } from '@core/models/emails.model';
import { NoteService } from '@core/models/notes.model';

@Component({
  selector: 'app-card-info-detail',
  templateUrl: './card-info-detail.component.html',
  styleUrls: ['./card-info-detail.component.scss']
})
export class CardInfoDetailComponent {
  @Input() typeCard: TypeCard = TypeCard.Note
   @Input() dataItem!:EmailService & NoteService;
}
