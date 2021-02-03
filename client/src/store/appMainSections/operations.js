import axios from "axios";
import { setMainSections, setIsLoading } from "./actions";
import { saveErrObjAction } from "../errorObject/saveErrObjAction";
import { openErrModal } from "../ErrorModal/openErrModal";

export const loadMainSection = () => async (dispatch) => {
  dispatch(setIsLoading(true));

  const sectionsFromServer = await axios
    .get("/api/sections-main/")
    .then((r) => r.data)
    .catch((err) => {
      dispatch(saveErrObjAction(err));
      dispatch(openErrModal);
    });

  sectionsFromServer.sort((a, b) => a.index - b.index);

  dispatch(setMainSections(sectionsFromServer));
  dispatch(setIsLoading(false));
};
