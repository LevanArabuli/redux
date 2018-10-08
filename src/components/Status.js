import React from 'react';
import moment from 'moment';

const Status = ({ status, onClick, requestSent, responseReceived, count }) => (
  <div>
    <h2>
      {status}
      {status === 'loading' && (
        <span style={{ color: 'red' }}>
          &nbsp;
          <i className="fa fa-lg fa-spinner fa-spin" />
        </span>
      )}
    </h2>

    {status === 'done' && (
      <div>
        <p>Reports: {count}</p>
        <p>Request Sent: {moment(requestSent).format('YYYY-MM-DD hh:mm:ss')}</p>
        <p>
          Response Received:{' '}
          {moment(responseReceived).format('YYYY-MM-DD hh:mm:ss')}
        </p>
        <button onClick={onClick}>Refresh</button>
      </div>
    )}
  </div>
);

export default Status;
