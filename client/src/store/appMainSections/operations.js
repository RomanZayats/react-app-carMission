import axios from "axios";
import { setMainSections, setIsLoading } from "./actions";
import { toastr } from "react-redux-toastr";

export const loadMainSection = () => async (dispatch) => {
  dispatch(setIsLoading(true));

  const sectionsFromServer = await axios
    .get("/api/sections-main/")
    .then((r) => r.data)
    .catch((err) => {
      toastr.error(err.message);
    });

  sectionsFromServer.sort((a, b) => a.index - b.index);

  dispatch(setMainSections(sectionsFromServer));
  dispatch(setIsLoading(false));
};
