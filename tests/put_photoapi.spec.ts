import {test,expect} from "../fixtures/api_fixtures";

test("Updating the data of photo api",async({putphoto})=>{

    console.log("Updating data of particular photo")
    const response = await putphoto.PutPost();

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log('Response:',body);
    console.log("Successfully updated data of a particular photo");
})