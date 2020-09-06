import React, { Component } from 'react';
import { FaTrash } from 'react-icons/fa';
import InvertedItalianHand from '../1599230976526.png';

class Panel extends Component {
  render() {
    return (
      <div id="pannel" className="pannel">
        <button
          {...this.props} onClick={this.props.clearAll}
          className="control clear"
        ><img src={InvertedItalianHand} className="trash-icon" onClick={this.props.clearAll} />
        </button>
      </div>
    );
  }
}

export default Panel;
