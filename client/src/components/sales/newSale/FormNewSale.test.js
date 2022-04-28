import { render, screen } from "@testing-library/react";
import FormNewSale from "./FormNewSale";

describe('render componenet form', () => {
    render(<FormNewSale />)
    screen.debug()
    const title = screen.getAllByText(/Nueva venta/1)
    expect(title).toBeInTheDocument()
    
})