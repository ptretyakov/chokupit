import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import * as AppActions from 'app/app.actions';
import * as HeaderActions from 'app/shared/header/header.actions';

import {
  HEADER_TITLE
} from './index.constants';

export class IndexContainer extends Component {
  componentWillMount() {
    if(this.props.setHeaderButtons !== undefined) {
      this.props.setHeaderButtons(null, null);
      this.props.headerActions.updateHeaderTitle(HEADER_TITLE);
    }
  }

  render() {
    return (
      <div>
        <h1>Index Container</h1>
        <input type="text" placeholder="Input 1" defaultValue="Input 1 value" />
        <button id="change-author-button">Change author name</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mainAuthor: state.mainAuthor,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appActions: bindActionCreators(AppActions, dispatch),
    headerActions: bindActionCreators(HeaderActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexContainer);