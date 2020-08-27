import React from 'react'
import DownBeads from './DownBeads'
import ReactDOM from "react-dom";
import { ReactComponent as BeadSvg } from './bead.svg';

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
          <BeadSvg ref="upbead" className="upbead" {...this.props} unit={this.props.unit} up={this.props.up.toString()} onClick={this.handleupClick} />
        </div>
        <div className="up-vertical-pole-center-dot"></div>
        <DownBeads {...this.props.down} />
      </li>
    )
  }
}