import axios from "axios";
// const SUCCESS, INFO, WARNING, DANGER
const messages = [];
const url = 'http://localhost:4000/'

// types
const ALL_MESSAGES = "@MESSAGE/ALL_MESSAGES";

// reducer
export default function MessageReducer(state = messages, action) {
  switch (action.type) {
    case ALL_MESSAGES:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

// actions
export const obtenerAllMessage = () => async (dispatch, getState) => {
  await axios .get(`${url}api/mensaje`)
    .then( async ({ data }) => {
      await dispatch({
        type: ALL_MESSAGES,
        payload: data,
      });
    })
    .catch((e) => {});
};