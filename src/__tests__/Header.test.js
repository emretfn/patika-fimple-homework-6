import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

// Define a test suite for rendering the header
describe("header-render", () => {
  let headerRender;

  // Before each test, render the App and get the header text
  beforeEach(() => {
    render(<App />);
    headerRender = screen.getByText("Emoji Search");
  });

  // Define a test for checking if the header is present in the document
  test("Document should be have HeaderComponent", () => {
    expect(headerRender).toBeInTheDocument();
  });
});
