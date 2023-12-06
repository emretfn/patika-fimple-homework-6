import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import emojiList from "../emojiList.json";

// Define a test suite for rendering the emoji list
describe("emoji-list-render", () => {
  // Before each test, render the App
  beforeEach(() => {
    render(<App />);
  });

  // Define a test for rendering the emoji list
  test("Emoji list render", () => {
    // For each of the first 20 items in the emoji list
    emojiList.slice(0, 20).map((item) => {
      // Expect that the title of the item is present in the document
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
