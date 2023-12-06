import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// Define a test suite for "Search Emoji" functionality
describe("Search Emoji", () => {
  let searchEmoji;

  // Before each test, render the App and get the search input field
  beforeEach(() => {
    render(<App />);
    searchEmoji = screen.getByLabelText("searchInput");
  });

  // Define a test for rendering after filter
  test("render after filter", () => {
    const value = "Joy";

    // Simulate a user typing "Joy" into the search input field
    userEvent.type(searchEmoji, value);
    // Expect that the "Joy" emoji is present in the document
    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
