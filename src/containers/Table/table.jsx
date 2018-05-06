import React from 'react';
import Row from './Row/row.jsx';
import { connect } from 'react-redux';
import * as todoActions from '../../store/todo/actions';
import * as todoSelectors from '../../store/todo/reducer';

class Table extends React.Component {

  componentDidMount() {
    this.props.dispatch(todoActions.fetchProjectsAction());
  }

  renderBody() {
    var result = this.props.projects.map((project) => {
      return <Row key={project.id} value={project}/>
    })
    return <tbody>{result}</tbody>;
  }


  render() {
    if (!this.props.projects) {
      return this.renderLoading();
    }
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Name</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          {this.renderBody()}
        </table>
      </div>
    );
  }

  renderLoading() {
    return <p>Loading ...</p>
  }

}

function mapStateToProps(state) {
  var projects = todoSelectors.getProjects(state);
  return {
    projects: projects
  };
}

export default connect(mapStateToProps)(Table);
