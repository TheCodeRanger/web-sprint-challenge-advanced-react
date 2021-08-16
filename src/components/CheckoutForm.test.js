import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event"

// Write up the two tests here and make sure they are testing what the title shows

test("renders CheckoutForm without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", () => {
    //Arrange
    render(<CheckoutForm/>);
    const firstName = screen.getByLabelText(/First Name:/i);
    const lastName = screen.getByLabelText(/Last Name:/i);
    const address = screen.getByLabelText(/Address:/i);
    const city = screen.getByLabelText(/City:/i); 
    const state = screen.getByLabelText(/State:/i);
    const zip = screen.getByLabelText(/Zip:/i);
    const button = screen.getByRole("Button");
    //! Matching text elements
    let checkout = screen.queryByText(/Your new green friends will be shipped to:/i);
    expect(checkout).toBeInTheDocument();
    //Act
    userEvent.type(firstName, "First Name!");
    userEvent.type(lastName, "Last Name!");
    userEvent.type(address, "Under a bridge");
    userEvent.type(city, "Potato Brainville");
    userEvent.type(state, "Outtagascar");
    userEvent.type(zip, "8675309");
    userEvent.click(button);
    //Assert
    checkout = screen.getByText(/Your new green friends will be shipped to:/i);
    expect(checkout).toBeInTheDocument();
});
