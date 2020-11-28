import { LOAD_SOCIAL_NETWORKS, SOCIAL_NETWORKS_LOADING } from "./actions";

const initialState = {
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_SOCIAL_NETWORKS:
            return { ...state, data: action.payload }
        case SOCIAL_NETWORKS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}

export default reducer;