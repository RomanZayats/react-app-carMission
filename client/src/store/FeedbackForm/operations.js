import { openErrModal } from "../ErrorModal/openErrModalAction";
import { saveErrObjAction } from "../errorObject/saveErrObjAction";
import axios from "axios";
import { confirmFeedbackFormAction, hideFeedbackFormAction } from "./actions";

export const postFeedback = (feedbackObj) => async (dispatch) => {
  const response = await axios
    .post("/api/feedback", feedbackObj)
    .catch((err) => {
      dispatch(openErrModal);
      dispatch(saveErrObjAction(err));
      dispatch(hideFeedbackFormAction);
    });
  if (response) {
    dispatch(confirmFeedbackFormAction);
  }
};
