import {test,expect} from "../fixtures/api_fixtures";


test("Post New API photo",async({postphoto})=>{

    const response = await postphoto.CreateAPIphoto();
    expect(response.status()).toBe(201);

    const body = await response.json();
    console.log("Response:",body);
})