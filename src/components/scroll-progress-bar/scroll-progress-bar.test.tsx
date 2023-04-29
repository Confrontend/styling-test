import { render, fireEvent } from "@testing-library/react";
import ScrollProgressBar from "./scroll-progress-bar";

// Mock window properties
const innerHeight = 800;
Object.defineProperty(window, "innerHeight", { value: innerHeight });
Object.defineProperty(window, "scrollY", { value: 0 });
Object.defineProperty(document.body, "clientHeight", { value: 1600 });

// Utility function to simulate window scrolling
const simulateScroll = (scrollY: number) => {
  window.scrollY = scrollY;
  fireEvent.scroll(window);
};

describe("ScrollProgressBar", () => {
  it("renders progress bar with default color", () => {
    const { getByTestId } = render(<ScrollProgressBar />);
    const progressBar = getByTestId("progress-bar");
    expect(progressBar).toHaveStyle("background-color: blue");
  });

  it("renders progress bar with custom color", () => {
    const { getByTestId } = render(<ScrollProgressBar color="red" />);
    const progressBar = getByTestId("progress-bar");
    expect(progressBar).toHaveStyle("background-color: red");
  });

  it("updates progress bar width on scroll", () => {
    const { getByTestId } = render(<ScrollProgressBar />);
    const progressBar = getByTestId("progress-bar");

    simulateScroll(innerHeight / 4);
    expect(progressBar).toHaveStyle("width: 25%");

    simulateScroll(innerHeight / 2);
    expect(progressBar).toHaveStyle("width: 50%");
  });
});
