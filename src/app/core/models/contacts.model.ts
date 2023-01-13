export interface ContactsModel{
        _id:string,
        fullName:string,
        officePhone:Array<number>,
        mobilesPhone: Array<number>,
        emails: Array<string>,
        channel: string,
        typeContacts: string,
        country: string,
        state: string,
        city: string,
        totalBusiness: number
}