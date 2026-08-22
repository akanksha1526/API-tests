import { APIRequestContext,expect } from "@playwright/test";

export class DeletePhotoAPI{

    constructor(private request:APIRequestContext){}

    async DeletePhoto(id:number){
        return await this.request.delete(`${process.env.BASE_URL}/photos/${id}`);
    };
}