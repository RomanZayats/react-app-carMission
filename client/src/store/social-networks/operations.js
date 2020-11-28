import axios from "axios";
import { setSNData, SNDataLoading } from "./actions";

export const loadNavbarData = () => (dispatch) => {
    dispatch(SNDataLoading(true))
    axios("/api/social-networks")
        .then(res => {
        dispatch(setSNData(res.data))
        dispatch(SNDataLoading(false))
    })
}