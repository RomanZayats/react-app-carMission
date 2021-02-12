import * as React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import BlogPageContainer from "./BlogPageContainer";
import { Provider } from "react-redux";
import { BrowserRouter, Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

export function renderWithRouterMatch(
  ui,
  {
    path = "/",
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return {
    ...render(
      <Router history={history}>
        <Route path={path} component={ui} />
      </Router>
    )
  };
}


const mockStore = configureMockStore([thunk]);
const testStore = mockStore({
    blogs: {
        blogs: [{photo: "/img/test-img.png", title: "Test title", text: "Some text", buttonText: "See more", date: "1612550152581"}, {photo: "/img/test-img2.png", title: "Another test title", text: "Some text", buttonText: "See more", date: "1612550152590"}],
        isLoading: false,
    },
})

jest.mock("../PageItem/BlogPageErrorItem", () => () => <div data-testid="blogItem">This is test blog item</div>);
jest.mock("../PageItem/BlogPageItem", () => () => <div data-testid="blogErrorItem">This is test error blog item</div>);
jest.mock("../../../components/Blogs/Blogs"), () => () => <div data-testid="blogErrorItem">This is list of blogs</div>;

test("Is BlogPageContainer return Error item", () => {
  const thisTestStore = mockStore({
    blogs: {
      blogs: undefined,
      isLoading: false,
    }
  })
    
  const { getByTestId } = renderWithRouterMatch(BlogPageContainer, {
    route: "/project/ABC123",
    path: "/project/:id"
  });

  expect(getByText("Match id: ABC123")).toBeInTheDocument();

    // <Provider store={thisTestStore}>
    //     <BrowserRouter history={} >
    //         <BlogPageContainer />
    //     </BrowserRouter>
    // </Provider>
  // )

  // const content = getByTestId("blogErrorItem");



});