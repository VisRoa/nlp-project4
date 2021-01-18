import { URLchecker } from "../src/client/js/urlChecker"

test("test URLchecker func", () => {

    
    expect(URLchecker).toBeDefined();

});

test('It should be a function', async () => {
    expect(typeof URLchecker).toBe("function");
});