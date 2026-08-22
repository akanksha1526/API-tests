# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: post_new_photo.spec.ts >> Post New API photo
- Location: tests\post_new_photo.spec.ts:4:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 404
```

# Test source

```ts
  1  | import {test,expect} from "../fixtures/api_fixtures";
  2  | 
  3  | 
  4  | test("Post New API photo",async({postphoto})=>{
  5  | 
  6  |     const response = await postphoto.CreateAPIphoto(9);
> 7  |     expect(response.status()).toBe(201);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  8  | 
  9  |     const body = await response.json();
  10 |     console.log("Response:",body);
  11 | })
```