import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchReports, deleteReport } from '../redux/actions';
import Reports from '../components/Reports';

class ReportList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(fetchReports());
  }

  deleteReportCallback(id) {
    const { dispatch } = this.props;
    dispatch(deleteReport(id));
  }

  render() {
    const { reports, status } = this.props;

    return (
      status === 'done' &&
      reports && (
        <div>
          <h3>Report list:</h3>
          <Reports
            reports={reports.items}
            onDelete={this.deleteReportCallback.bind(this)}
          />
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  reports: state.reports,
  status: state.status
});

export default connect(mapStateToProps)(ReportList);
