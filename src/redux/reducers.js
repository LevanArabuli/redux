import { combineReducers } from 'redux';

import {
  REQUEST_REPORT_LIST,
  RECEIVE_REPORT_LIST,
  REMOVE_DELETED_REPORT
} from './actions';

const reports = (
  state = {
    requestedAt: null,
    receivedAt: null,
    items: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_REPORT_LIST:
      return Object.assign({}, state, {
        requestedAt: action.timestamp,
        receivedAt: null,
        items: []
      });
    case RECEIVE_REPORT_LIST:
      return Object.assign({}, state, {
        receivedAt: action.timestamp,
        items: action.reports
      });
    case REMOVE_DELETED_REPORT:
      return Object.assign({}, state, {
        items: state.items.filter(r => r.id !== action.id)
      });
    default:
      return state;
  }
};

const status = (state = 'done', action) => {
  switch (action.type) {
    case REQUEST_REPORT_LIST:
      return 'loading';
    case RECEIVE_REPORT_LIST:
      return 'done';
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reports,
  status
});

export default rootReducer;
