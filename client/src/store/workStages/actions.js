import {
  ADD_NEW_STAGE,
  LOADING_STAGES,
  SET_IS_LOADING_STAGES,
} from "./actionTypes";

export const setStages = (newStages) => ({
  type: LOADING_STAGES,
  payload: newStages,
});

export const setStagesLoading = (isLoading) => ({
  type: SET_IS_LOADING_STAGES,
  payload: isLoading,
});

export const addNewStage = (newStage) => ({
  type: ADD_NEW_STAGE,
  payload: newStage,
});
