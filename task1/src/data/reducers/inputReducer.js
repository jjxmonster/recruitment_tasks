import { USER_TYPING } from '../actions/types';

const inputState = {
   userType: '',
};

export const inputReducer = (state = inputState, action) => {
   const { type, payload } = action;
   switch (type) {
      case USER_TYPING:
         return {
            ...state,
            userType: payload,
         };
      default:
         return state;
   }
};
