import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';

class Panel extends Component {
  render() {
    return (
      <div id="pannel" className="pannel">
        <button
          {...this.props} onClick={this.props.clearAll}
          className="control clear"
        ><FaTrash className="trash-icon"/>
        </button>
      </div>
    );
  }
}

export default Panel;
