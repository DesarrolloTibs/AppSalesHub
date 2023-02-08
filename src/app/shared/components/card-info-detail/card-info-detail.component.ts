import { ComponentType } from '@angular/cdk/portal';
import { Component, Input } from '@angular/core';
import { TypeCard } from '@core/enum/typeCard.enum';
import { EmailService } from '@core/models/emails.model';
import { NoteService } from '@core/models/notes.model';
import { ShareService } from '@core/services/share.service';

@Component({
  selector: 'app-card-info-detail',
  templateUrl: './card-info-detail.component.html',
  styleUrls: ['./card-info-detail.component.scss']
})
export class CardInfoDetailComponent {
  @Input() typeCard: TypeCard = TypeCard.Note
   @Input() dataItem!:Array<EmailService> & Array<NoteService>;
   @Input() componentDialog!: ComponentType<unknown>
   @Input() idContact: string = ''
   @Input() serviceName: string = ''
  //  public infoToDisplay: Array<any> = [];
   panelOpenState = false;
   constructor(
    private _shareService:ShareService) {
 
  }
    public redirectToEdit = (id: string) => {
    
    //this.router.navigate([`/${this.routeTo}/new`]);b
    this._shareService.openDialog('0ms', '0ms', id, this.serviceName, true,this.idContact,this.componentDialog)
  }

}
