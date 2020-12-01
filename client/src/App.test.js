import React from "react";
import {render} from "@testing-library/react";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {HelmetProvider} from "react-helmet-async";
import store from "./store/store";

test("app render", () => {
    const {container} = render(
        <BrowserRouter>
            <Provider store={store}>
                <HelmetProvider>
                    <App/>
                </HelmetProvider>
            </Provider>
        </BrowserRouter>
    );

    expect(container.firstChild).toHaveClass("App");
});
