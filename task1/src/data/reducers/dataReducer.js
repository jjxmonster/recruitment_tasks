import { GET_NAMES, DATA_FAILURE, DATA_SUCCESS } from '../actions/types';

const dataState = {
   isDataLoading: false,
   isDataSuccess: undefined,
   isDataFailure: undefined,
   names: undefined,
};

export const dataReducer = (state = dataState, action) => {
   const { type, payload } = action;
   switch (type) {
      case GET_NAMES:
         return {
            ...state,
            isDataLoading: true,
         };
      case DATA_SUCCESS:
         return {
            ...state,
            names: payload,
            isDataLoading: false,
            isDataSuccess: true,
         };
      case DATA_FAILURE:
         return {
            ...state,
            isDataLoading: false,
            isDataFailure: true,
         };
      default:
         return state;
   }
};
