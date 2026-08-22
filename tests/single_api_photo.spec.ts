import {test,expect} from "../fixtures/api_fixtures";

test("Getting single Api photo",async({singleapiphoto})=>{

    console.log("Getting data of particular id photo");
    const response = await singleapiphoto.singlephoto(10);
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log('Response:',body);
    console.log('Successfully retrived the data of a particular photo');
})