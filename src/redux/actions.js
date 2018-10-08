import fetch from 'cross-fetch';

export const REQUEST_REPORT_LIST = 'REQUEST_REPORT_LIST';
export const RECEIVE_REPORT_LIST = 'RECEIVE_REPORT_LIST';
export const REMOVE_DELETED_REPORT = 'REMOVE_DELETED_REPORT';

export const requestReports = () => {
  return {
    type: REQUEST_REPORT_LIST,
    timestamp: Date.now()
  };
};

export const receiveReports = reports => {
  return {
    type: RECEIVE_REPORT_LIST,
    timestamp: Date.now(),
    reports
  };
};

export const removeDeleteReport = id => {
  return {
    type: REMOVE_DELETED_REPORT,
    id
  };
};

export const fetchReports = () => {
  return dispatch => {
    dispatch(requestReports());
    return fetch('http://localhost:5000/api/reports')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveReports(json.reports));
      });
  };
};

export const deleteReport = id => {
  return dispatch => {
    fetch(`http://localhost:5000/api/reports/${id}`, {
      method: 'DELETE'
    });
    dispatch(removeDeleteReport(id));
  };
};
