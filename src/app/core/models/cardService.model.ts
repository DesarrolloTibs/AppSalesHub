import { PaginationModel } from "./pagination.model";
import { NoteService } from "./notes.model";
import { EmailService } from "./emails.model";

export interface CardService{
    itemsList:Array<EmailService> | Array<NoteService>,
    pagination:PaginationModel,
}
