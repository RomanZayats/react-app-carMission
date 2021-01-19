import { LOAD_DATA, ADD_NEW_ITEM, UPDATE_ITEM } from "./actionTypes";

export const setSocialNetworks = (data) => ({
  type: LOAD_DATA,
  payload: data,
});

export const addNewSocialNetworks = (newItem) => ({
  type: ADD_NEW_ITEM,
  payload: newItem,
});

export const updateSocialNetwroks = (item) => ({
  type: UPDATE_ITEM,
  payload: item,
});

