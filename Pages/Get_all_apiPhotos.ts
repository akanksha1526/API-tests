import {APIRequestContext,expect} from "@playwright/test";

export class PhotosAPIpage{

    constructor(private request : APIRequestContext){}

    async getphotos(){

        return await this.request.get(`${process.env.BASE_URL}/photos`);

    };
    
}