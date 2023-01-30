import { Component,Inject } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-form-note',
  templateUrl: './dialog-form-note.component.html',
  styleUrls: ['./dialog-form-note.component.scss']
})
export class DialogFormNoteComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: string},public dialogRef: MatDialogRef<DialogFormNoteComponent>,
    ) {}
    onNoClick(): void {
      this.dialogRef.close();
    }
}
