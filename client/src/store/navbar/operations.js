import axios from "axios";
import { setNavbarData, navbarDataLoading, updateItem } from "./actions";
import { getNavbarData } from "./selectors";
import { toastr } from "react-redux-toastr";

export const loadNavbarData = () => (dispatch) => {
  dispatch(navbarDataLoading(true));
  axios("/api/navbar")
    .then((res) => {
      dispatch(setNavbarData(res.data));
    })
    .catch((err) => {
      toastr.error(err.message);
    });
  dispatch(navbarDataLoading(false));
};

export const filterNavbarData = (id) => (dispatch, getStore) => {
  const items = getNavbarData(getStore());
  const filtered = items.filter((item) => item._id !== id);
  dispatch(updateItem(filtered));
};
