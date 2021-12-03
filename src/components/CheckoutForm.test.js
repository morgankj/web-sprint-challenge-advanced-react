import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm />);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const fNameField = screen.getByLabelText(/first name:/i);
    const lNameField = screen.getByLabelText(/last name:/i);
    const addressField = screen.getByLabelText(/address:/i);
    const cityField = screen.getByLabelText(/city:/i);
    const stateField = screen.getByLabelText(/state:/i);
    const zipField = screen.getByLabelText(/zip:/i);
    const button = screen.getByRole("button");
    userEvent.type(fNameField, "Alistair");
    userEvent.type(lNameField, "Alistair");
    userEvent.type(addressField, "Alistair");
    userEvent.type(cityField, "Alistair");
    userEvent.type(stateField, "Alistair");
    userEvent.type(zipField, "Alistair");
    userEvent.click(button);
    await waitFor(() => {
        const successMessage = screen.getByTestId("successMessage");
        expect(successMessage).toBeInTheDocument();
    })
});
