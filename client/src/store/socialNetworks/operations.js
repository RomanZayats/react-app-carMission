import axios from "axios";
import { setSocialNetworks, updateSocialNetwroks } from "./actions";
import { getSocialNetworks } from "./selectors";
import { saveErrObjAction } from "../errorObject/saveErrObjAction";
import { openErrModal } from "../ErrorModal/openErrModal";

export const loadSocialNetworks = () => (dispatch) => {
  axios("/api/social-networks").then((res) => {
    dispatch(setSocialNetworks(res.data));
  })
  .catch((err) => {
    dispatch(saveErrObjAction(err));
    dispatch(openErrModal);
  });
};

export const filterSocialNetworks = (id) => (dispatch, getStore) => {
  const items = getSocialNetworks(getStore());
  const filtered = items.filter((item) => item._id !== id);
  dispatch(updateSocialNetwroks(filtered));
};
