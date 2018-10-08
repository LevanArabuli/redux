import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './redux/store';
import ReportList from './containers/ReportList';
import ListStatus from './containers/ListStatus';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ListStatus />
          <ReportList />
        </div>
      </Provider>
    );
  }
}
