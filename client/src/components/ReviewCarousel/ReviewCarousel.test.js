import React from "react";
import { render } from "@testing-library/react";
import ReviewCarousel from "./ReviewCarousel";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
//
// jest.mock("./ReviewItem/ReviewItem", () => (props) => (
//     <>ReviewItem</>
// ));


const mockHeadingText = "Test heading";
const mockSectionClassName = "about-us__container";
const mockId = "testId";

const mockStore = configureStore();
const store = mockStore({
    reviewCarousel: { reviews: [] },
});

test("ReviewCarousel is rendered is correctly", () =>{
const mockDispatch = jest.fn();
const mockSelector = jest.fn();
jest.mock("react-redux", () => ({
    useDispatch: () => mockDispatch,
    useSelector: () => mockSelector,
}));

render(
    <Provider store={store}>
        <ReviewCarousel
            className={mockSectionClassName}
            heading={mockHeadingText}
            anchorName={mockId}
       />

    </Provider>
);
});
