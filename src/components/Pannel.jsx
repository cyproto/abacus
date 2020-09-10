import React, { Component } from 'react';
import InvertedItalianHand from '../1599403601116.png';
import ReactTooltip from "react-tooltip";

class Panel extends Component {
  render() {
    const isMobile = window.outerWidth < 768;
    return (
      <div id="pannel" className="pannel">
        <button data-tip data-for="registerTip"
          {...this.props} onClick={this.props.clearAll}
          className="control clear"
        ><img src={InvertedItalianHand} className="trash-icon" onClick={this.props.clearAll} />
        </button>
        {isMobile ? <div></div> :
          (<ReactTooltip id="registerTip" place="bottom" effect="solid">
            Clear abacus
          </ReactTooltip>)}
      </div>
    );
  }
}

export default Panel;
