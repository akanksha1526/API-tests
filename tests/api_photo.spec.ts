import {test,expect} from "../fixtures/api_fixtures";

test("Get photos API",async({photosapi})=>{

    console.log("Getting all photos Data :");
    const response = await photosapi.getphotos();

    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log(body);

    expect(Array.isArray(body)).toBeTruthy();
    console.log("Successfully retrived the data of all photos");
})