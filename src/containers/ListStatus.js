import { connect } from 'react-redux';

import { fetchReports } from '../redux/actions';
import Status from '../components/Status';

const mapStateToProps = state => ({
  status: state.status,
  requestSent: state.reports && state.reports.requestedAt,
  responseReceived: state.reports && state.reports.receivedAt,
  count: state.reports && state.reports.items && state.reports.items.length
});

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(fetchReports());
    }
  };
};

const ListStatus = connect(
  mapStateToProps,
  mapDispatchToProps
)(Status);

export default ListStatus;
