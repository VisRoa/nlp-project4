import { handleSubmit } from "../src/client/js/formHandler"

test("test handleSubmit func", () => {

    expect(handleSubmit).toBeDefined();

});

test('It should be a function', async () => {
    expect(typeof handleSubmit).toBe("function");
});