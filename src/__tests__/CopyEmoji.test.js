import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// Define a test suite for "Copy Emoji" functionality
describe("Copy Emoji", () => {
  let copyEmoji;

  // Before each test, render the App and get the "Joy" emoji
  beforeEach(() => {
    render(<App />);
    copyEmoji = screen.getByText("Joy");
  });
  // Define a test for copying to clipboard
  test("copy to clibboard test", () => {
    // Simulate a user clicking on the "Joy" emoji
    userEvent.click(copyEmoji);
    // Expect that the "data-clipboard-text" attribute of the parent element matches the "Joy" emoji
    expect(copyEmoji.parentElement.getAttribute("data-clipboard-text")).toMatch("😂");
  });
});
