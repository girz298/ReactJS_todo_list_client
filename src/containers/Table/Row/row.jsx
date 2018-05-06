import React from 'react'
import RemoveProjectButton from './Buttons/remove-project.jsx'

class Row extends React.Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.value.id}</th>
        <td>{this.props.value.name}</td>
        <td>
          <RemoveProjectButton projectId={this.props.value.id}/>
        </td>
      </tr>
    );
  }
}

export default Row;
