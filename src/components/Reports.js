import React from 'react';

const Reports = ({ reports, onDelete }) => (
  <div style={{ border: '1px solid black' }}>
    <ul style={{ fontSize: 20, fontFamily: 'Menlo' }}>
      {reports.map(r => (
        <li key={r.id}>
          <a href={`/reports/${r.id}`}>{r.name}</a>
          &nbsp;
          <i className="fa fa-trash" onClick={() => onDelete(r.id)} />
        </li>
      ))}
    </ul>
  </div>
);

export default Reports;
