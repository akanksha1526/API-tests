import {expect, test} from "../fixtures/api_fixtures";

test('Delete photo api',async({deletephoto})=>{

    console.log('Delete photo api')
    const response = await deletephoto.DeletePhoto(1);
    expect(response.status()).toBe(200);

    const body = await response.json();
    console.log('Response:',body);
    console.log('Successfully deleted photo');
})