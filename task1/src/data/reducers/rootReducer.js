import { combineReducers } from 'redux';

import { dataReducer } from './dataReducer';
import { inputReducer } from './inputReducer';

export const rootReducer = combineReducers({
   data: dataReducer,
   input: inputReducer,
});
