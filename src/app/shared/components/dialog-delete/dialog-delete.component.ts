import { Component,Inject } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {id: string,toggle:boolean},public dialogRef: MatDialogRef<DialogDeleteComponent>,
    ) {}
    onNoClick(): void {
      this.dialogRef.close();
    }
}
