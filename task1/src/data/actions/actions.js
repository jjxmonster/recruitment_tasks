import { getNames } from '../fetch/namesFetch';
import {
   GET_NAMES,
   DATA_FAILURE,
   DATA_SUCCESS,
   USER_TYPING,
} from '../actions/types';

export const fetchNames = () => async dispatch => {
   dispatch({
      type: GET_NAMES,
   });
   try {
      const response = await getNames();
      dispatch({
         type: DATA_SUCCESS,
         payload: response,
      });
   } catch (error) {
      dispatch({
         type: DATA_FAILURE,
      });
   }
};

export const userTyping = value => {
   return {
      type: USER_TYPING,
      payload: value,
   };
};
