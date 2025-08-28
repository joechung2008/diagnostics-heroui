import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import StageDefinition from "../StageDefinition";

describe("StageDefinition", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<StageDefinition stageDefinition={{}} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
