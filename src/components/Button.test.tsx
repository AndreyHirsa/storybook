import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";
import { describe, expect, it, vi } from "vitest";

describe("Button", () => {
  it("renders label", () => {
    render(<Button label="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("applies primary class", () => {
    const { container } = render(<Button label="Test" primary />);
    const button = container.querySelector("button");
    expect(button?.className).toContain("primary");
  });

  it("applies size class", () => {
    const { container } = render(<Button label="Test" size="large" />);
    const button = container.querySelector("button");
    expect(button?.className).toContain("large");
  });

  it("calls onClick", () => {
    const handleClick = vi.fn();
    render(<Button label="Click" onClick={handleClick} />);

    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
