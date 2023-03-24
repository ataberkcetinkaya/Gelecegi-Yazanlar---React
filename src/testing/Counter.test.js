import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";


describe("Counter Test", () => {

    let increaseBtn, decreaseBtn, count;

    beforeEach(() => { //This is a function that runs before each test and runs with the same amount of tests; (2 tests = 2 runs)
        render(<Counter />);
        count = screen.getByText("0");
        increaseBtn = screen.getByText("Increase");
        decreaseBtn = screen.getByText("Decrease");
    });

    //afterEach() runs after each test

    //also there is beforeAll() which runs before all tests for once
    //afterAll() which runs after all tests for once

    test("Counter increase when the increase button is clicked", () => {
        userEvent.click(increaseBtn);
        expect(count).toHaveTextContent("1");
    });
    
    test("Counter decrease when the decrease button is clicked", () => {
        userEvent.click(decreaseBtn);
        expect(count).toHaveTextContent("-1");
    });
});
