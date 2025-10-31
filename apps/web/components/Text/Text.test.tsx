import { Text } from "./Text";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe(`<${Text.name} />`, () => {
  it("should render the component with correct text", () => {
    render(<Text />);
    expect(screen.getByText("The Tom & Di Collective")).toBeVisible();
  });
});
