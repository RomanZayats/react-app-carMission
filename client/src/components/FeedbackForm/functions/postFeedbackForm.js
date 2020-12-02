import { openErrModal } from "../../../store/ErrorModal/openErrModalAction"
import { saveErrObjAction } from "../../../store/errorObject/saveErrObjAction"

const axios = require("axios")

export default function postFeedback (feedbackObj, dispatch) {
  axios.post("/api/feedbacks", feedbackObj)
    .catch((err) => {
      console.error(err)
      dispatch(openErrModal)
      dispatch(saveErrObjAction(err))
    })
};