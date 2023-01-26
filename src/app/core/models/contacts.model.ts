export interface ContactsModel {
        _id: string,
        fullName: string,
        officePhone: Array<number>,
        mobilesPhone: Array<number>,
        emails: Array<string>,
        channel: string,
        typeContacts: string,
        country: string,
        state: string,
        city: string,
        totalBusiness: number,
        organization: Object
        level1: Object
        level2: Object
        level3: Object;

}
export interface ContactsDetailModel {
        _id: string,
        fullName: string,
        officePhone: Array<number>,
        mobilesPhone: Array<number>,
        emails: Array<string>,
        channel: string,
        typeContacts: typeContactsModel,
        country: string,
        state: string,
        city: string,
        totalBusiness: number,
        organization: organizationModel
        level1: coordinatorModel
        level2: managerModel
        level3: vendorModel;

}

export interface typeContactsModel {

        tag: string,
        level1Flag?: boolean,
        level2Flag?: boolean,
        level3Flag?: boolean

}
export interface organizationModel {

        fullName: string,

}
export interface coordinatorModel {

        fullName: string,

}
export interface managerModel {

        fullName: string,

}
export interface vendorModel {

        fullName: string,

}
