import { Institution } from "./institution";
import { User } from "./user";

export class Student extends User
{
    studentId:number | undefined;
    fullName:string | undefined;
    birthDate:Date | undefined; 
    gender:string | undefined;
    mobile:string | undefined;
    email:string | undefined;
    address:string | undefined;
    city:string | undefined;
    aadhar:string | undefined;
    field:string | undefined;
    course:string | undefined;
    courseYear:number | undefined;
    sscScore:number | undefined;
    hscScore:number | undefined;
    familyIncome:number | undefined;
    bankName:string | undefined;
    bankIfsc:string | undefined;
    accountNo:string | undefined;
    appStatus:string | undefined;
    approval:string | undefined;
    institution: Institution | undefined;

    constructor()
    {
        super();
    }
}
