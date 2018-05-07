import React from 'react'
import * as todoActions from '../../../../store/todo/actions';
import { connect } from 'react-redux';

class RemoveProjectButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isButtonDisabled: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div className="btn btn-danger btn-block" onClick={this.handleClick}> Remove Project #{this.props.projectId}</div>
    );
  }

  handleClick() {
    if (!this.state.isButtonDisabled) {
      console.log("Will Remove project with ID: " + this.props.projectId);
      this.props.dispatch(todoActions.removeProjectByIdAction(this.props.projectId));
      this.setState({
        isButtonDisabled: true
      });
    }
  }
}

export default  connect()(RemoveProjectButton);
