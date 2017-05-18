import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { overview } from '../Overview/Reducer';
import { detail } from '../Detail/Reducer';

let reducers = {
  overview,
  detail
}

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

export default rootReducer;