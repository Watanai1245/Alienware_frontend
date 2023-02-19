import { render, screen } from "@testing-library/react";
import NewItem from "../components/NewItem";

test("renders NewItem", async () => {
    render(<NewItem name="test1" />);
    const header = screen.getByText(/test1/i);
    expect(header).toBeInTheDocument();
});