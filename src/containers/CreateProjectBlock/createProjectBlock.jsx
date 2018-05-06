import React from 'react'
import * as todoActions from '../../store/todo/actions';
import * as todoSelectors from '../../store/todo/reducer';
import { connect } from 'react-redux';

class CreateProjectBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projectName: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="projectName">Email address:</label>
            <input type="text" name="projectName" value={this.state.projectName}
              onChange={this.handleChange} className="form-control"
              id="projectName" placeholder="Project Name"></input>
          </div>
          <input type="submit" value="Add Project" className="btn btn-success btn-block btn-lg" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(todoActions.createProjectAction(this.state.projectName));
  }

  handleChange(event) {
    this.setState({projectName: event.target.value});
  }

}

export default connect()(CreateProjectBlock);
