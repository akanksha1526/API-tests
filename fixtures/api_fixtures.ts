import {test as base} from "@playwright/test";
import { PhotosAPIpage } from "../Pages/Get_all_apiPhotos";
import { SingleAPIphoto } from "../Pages/Get_single_apiphoto";
import { PostPhotoAPi } from "../Pages/Post_photos";
import { PutPostAPI } from "../Pages/put_post_api";
import { DeletePhotoAPI } from "../Pages/delete_photo";

type Fixtures = {
    photosapi : PhotosAPIpage;
    singleapiphoto : SingleAPIphoto;
    postphoto : PostPhotoAPi;
    putphoto : PutPostAPI;
    deletephoto : DeletePhotoAPI;
};

export const test = base.extend<Fixtures>({
    photosapi:async ({request},use)=>{
        await use(new PhotosAPIpage(request));
    },
    singleapiphoto: async ({request},use)=>{
        await use(new SingleAPIphoto(request));
    },
    postphoto: async ({request},use)=>{
        await use(new PostPhotoAPi(request));
    },
    putphoto: async ({request},use)=>{
        await use(new PutPostAPI(request));
    },
    deletephoto: async ({request},use)=>{
        await use(new DeletePhotoAPI(request));
    }
});
export {expect} from "@playwright/test";