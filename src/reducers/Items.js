import * as types from '../constants/ActionTypes';

const initialState = {};

function items(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_RESULTS:
      return {
        ...state,
        results: action.results
      };
    default:
      return state;
    }
}

export default items;
