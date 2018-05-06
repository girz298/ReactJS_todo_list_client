import React from 'react'
import * as todoActions from '../../store/todo/actions';
import * as todoSelectors from '../../store/todo/reducer';
import { connect } from 'react-redux';
import './refreshProjectsBlock.css';

class RefreshProjectsBlock extends React.Component {

  constructor(props) {
    super();
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  render() {
    return (
      <div>
        <div className="btn btn-info btn-block btn-lg button-margin-bottom" onClick={this.handleRefreshClick}>Refresh</div>
      </div>
    );
  }

  handleRefreshClick() {
    this.props.dispatch(todoActions.fetchProjectsAction());
    console.log('Refresh Button Clicked!');
  }

}

export default connect()(RefreshProjectsBlock);
