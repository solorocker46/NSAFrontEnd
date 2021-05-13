import { Institution } from "./institution";
import { Student } from "./student";

export class Scholarship{
    scholarshipId:number | undefined;
    scholarshipName:string | undefined;
    sscScoreCriteria:number | undefined;
    hscScoreCriteria:number | undefined;
    familyIncomeCriteria:number | undefined;
    institution:Institution | undefined;
    student: Student | undefined;


    constructor(){

    }
}
