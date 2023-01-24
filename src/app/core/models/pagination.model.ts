export interface PaginationModel{
    totalDocs:number,
    limit:number,
    totalPages:number,
    page:number,
    pagingCounter:number,
    hasPrevPage:boolean,
    hasNextPage:boolean,
    prevPage:any,
    nextPage:any
}

//totalDocs":1,"limit":20,"totalPages":1,"page":1,"pagingCounter":1,"hasPrevPage":false,"hasNextPage":false,"prevPage":null,"nextPage"