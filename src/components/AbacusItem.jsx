import React from 'react'
import DownBeads from './DownBeads'
import ReactDOM from "react-dom";

export default class AbacusItem extends React.Component {
  constructor() {
    super();
    this.handleupClick = this.handleupClick.bind(this);
  }

  handleupClick() {
    //this.props.up = !this.props.up
    this.props.changeUpState(this.props.index, !this.props.up)

    ReactDOM.findDOMNode(this.refs.upbead).style.transition = '.5s'
    if (this.props.up) {
      ReactDOM.findDOMNode(this.refs.upbead).style.transform = 'translateY(30px)'
    } else {
      ReactDOM.findDOMNode(this.refs.upbead).style.transform = 'translateY(0px)'
    }

  }

  clearUpBeads() {

    React.findDOMNode(this.refs.upbead).style.transform = 'translateY(0px)'
  }


  render() {
    return (

      <li className="ab-item" >
        <div className="unit">{this.props.unit}</div>
        <div className="up-beads-container">
          <div className="up-vertical-pole"></div>
          <div ref="upbead" {...this.props} unit={this.props.unit} up={this.props.up.toString()} onClick={this.handleupClick} className="upbead">
            
          <div className="upbead-top">
            </div>
            <div className="upbead-middle">
            </div>
            <div className="upbead-bottom">
            </div>
          </div>
        </div>
        <div className="up-vertical-pole-center-dot"></div>
        <DownBeads {...this.props.down} />
      </li>
    )
  }
}