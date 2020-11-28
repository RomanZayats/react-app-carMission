import axios from "axios";
import { setMainSections, setIsLoading } from "./actions";

export const loadMainSection = () => async (dispatch) => {
  dispatch(setIsLoading(true));

  const sectionsFromServer = await axios("/api/sections-main").then(
    (r) => r.data
  );

  dispatch(setMainSections(sectionsFromServer));
  dispatch(setIsLoading(false));
};
