import { featuresIsLoading, setFeatures, updateFeatures } from "./actions";
import axios from "axios";
import { saveErrObjAction } from "../errorObject/saveErrObjAction";
import { openErrModal } from "../ErrorModal/openErrModal";
import { getFeatures } from "./selectors";

export const loadFeatures = () => async (dispatch) => {
  dispatch(featuresIsLoading(true));

  const featuresFromServer = await axios({
    method: "GET",
    url: "/api/features/",
  })
    .then((res) => res.data)
    .catch((err) => {
      dispatch(saveErrObjAction(err));
      dispatch(openErrModal);
    });

  dispatch(setFeatures(featuresFromServer));
  dispatch(featuresIsLoading(false));
};

export const filterAboutUs = (id) => (dispatch, getStore) => {
  const features = getFeatures(getStore());

  const filtered = features.filter((feature) => feature._id !== id);
  dispatch(updateFeatures(filtered));
};

export const updateFeaturesByNewSrc = (src, id) => (dispatch, getStore) => {
  const stages = getFeatures(getStore());

  const updated = stages.map((feature) => {
    if (feature._id === id) {
      return {
        ...feature,
        imgPath: src,
      };
    } else {
      return feature;
    }
  });

  dispatch(updateFeatures(updated));
};
