import { PaginationModel } from "./pagination.model";

export interface TableService{
    itemsList:Array<any>,
    pagination:PaginationModel,
}