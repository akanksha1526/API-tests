import { APIRequestContext,expect } from "@playwright/test";

export class PostPhotoAPi{

    constructor(private request:APIRequestContext){}

    async CreateAPIphoto(){
        return await this.request.post(`${process.env.BASE_URL}/photos`,{
            data:{
                albumId:100,
                id:200,
                title:'New title',
                url:'https://newurl',
                thumbnailUrl:'https://new.thumbnail.url'
            }
        });
    }
    
}