import React from "react";
import renderer from "react-test-renderer";

import App from "./App";

describe("App", () => {
    it("should display welcome message", () => {
        const tree = renderer.create(<App />);

        expect(tree.toJSON()).toMatchSnapshot();
        expect(tree.root.findByType("Text").children).toContain(
            "Open up App.tsx to start working on your app!"
        );
    });
});