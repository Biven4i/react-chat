import { combineReducers } from 'redux';

import userSlice from './user';
import messageSLice from './message';

const rootReducer = combineReducers({
   user: userSlice,
   message: messageSLice, 
});

export default rootReducer;