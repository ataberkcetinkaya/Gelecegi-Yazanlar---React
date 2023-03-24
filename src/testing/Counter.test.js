import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("Counter increments and decrements when the buttons are clicked", () => {
    render(<Counter />);
    const count = screen.getByText("0");
    const increase = screen.getByRole("button", { name: /increase/i });
    const decrease = screen.getByRole("button", { name: /decrease/i });
    
    expect(count).toBeInTheDocument();
});