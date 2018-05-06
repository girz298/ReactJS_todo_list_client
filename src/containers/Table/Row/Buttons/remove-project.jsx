import React from 'react'
import * as todoActions from '../../../../store/todo/actions';
import { connect } from 'react-redux';

class RemoveProjectButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="btn btn-danger btn-block" onClick={this.handleClick}> Remove Project #{this.props.projectId}</div>
    );
  }

  handleClick() {
    console.log("Will Remove project with ID: " + this.props.projectId);
    this.props.dispatch(todoActions.removeProjectByIdAction(this.props.projectId));
  }
}

export default  connect()(RemoveProjectButton);
