import React from 'react';
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Page from "../SimpleButton";

describe("Page", () => {
    it("should render title and children", () => {
        // Test code here
        const title = "Test Title";
        const children = "Test Children";
        const { getByText } = render(<Page title={title}>{children}</Page>);
        expect(getByText(title)).toBeInTheDocument();
        expect(getByText(children)).toBeInTheDocument();
    });
});


