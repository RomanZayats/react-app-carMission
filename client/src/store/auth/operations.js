import { setIsAuth } from "./actions";
import axios from "axios";
import { decodeUser } from "../../utils/functions/decodeUser";

export const checkToken = () => (dispatch) => {
  const { decoded, token } = decodeUser();
  if (decoded && token) {
    if (decoded.exp * 1000 > Date.now()) {
      axios.defaults.headers.common.Authorization = token;
      dispatch(setIsAuth(true));
    } else {
      dispatch(setIsAuth(false));
    }
  } else {
    dispatch(setIsAuth(false));
  }
};
