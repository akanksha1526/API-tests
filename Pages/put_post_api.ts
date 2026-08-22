import { APIRequestContext,expect, request } from "@playwright/test";

export class PutPostAPI{
    constructor(private request:APIRequestContext){}

    async PutPost(){
        return await this.request.put(`${process.env.BASE_URL}/photos/1`,{
            data:{
                albumId:100,
                id:1,
                title:'Newly updated title',
                url:'Newly updated url',
                thumbnailUrl:'Newly Updated thumbnail url'
            }
        })
    }
}