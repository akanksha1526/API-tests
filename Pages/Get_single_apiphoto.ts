import { APIRequestContext,expect } from "@playwright/test";

export class SingleAPIphoto{

    constructor(private request:APIRequestContext){}

    
    async singlephoto(getbyid:number){
        return this.request.get(`${process.env.BASE_URL}/photos/${getbyid}`);        
    };
}