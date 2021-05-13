import { User } from "./user";

export class Officer extends User{
    name:string|undefined;
    state:string|undefined;

    constructor(){
        super();
    }
}
