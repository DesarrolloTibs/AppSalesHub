export interface VendorsModel{
        _id:string,
        fullName:string,
        address:string,
        rfc: string,
        zones: Array<string>,
        phones: Array<string>,
        emails: Array<string>,
        manager: Object,
        organization: Object,
       
}