import { User } from "./user";

export class Institution extends User{
    code:number | undefined;
    category:string | undefined;
    type:string | undefined;
    name:string | undefined;
    university:string | undefined;
    address:string | undefined;
    city:string | undefined;
    state:string | undefined;
    yearOpen:number | undefined;
    telephone:string | undefined;
    principal:string | undefined;
    status:string | undefined;

    constructor()
    {
        super();
    }
}
