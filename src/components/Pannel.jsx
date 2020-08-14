import React, { Component } from 'react';

class Panel extends Component {
  render() {
    return (
      <div id="pannel" className="pannel">
        <button
          {...this.props} onClick={this.props.clearAll}
          className="control clear"
        >
          Clear Abacus
        </button>
        {/* <button
          onClick={this.props.showNum}
          className="control show">
          Show Value
        </button>
        <span id="result">total here</span> */}
      </div>
    );
  }
}

export default Panel;
