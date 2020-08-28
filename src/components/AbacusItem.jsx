import React from 'react'
import DownBeads from './DownBeads'
import ReactDOM from "react-dom";
import { ReactComponent as BeadSvg } from './bead.svg';

export default class AbacusItem extends React.Component {
  constructor() {
    super();
    this.upbeadRef = React.createRef();
    this.handleupClick = this.handleupClick.bind(this);
  }

  handleupClick() {
    //this.props.up = !this.props.up

    ReactDOM.findDOMNode(this.upbeadRef.current).style.transition = '.5s'
    if (this.props.up) {
      ReactDOM.findDOMNode(this.upbeadRef.current).style.transform = 'translateY(30px)'
    } else {
      ReactDOM.findDOMNode(this.upbeadRef.current).style.transform = 'translateY(0px)'
    }

    this.props.changeUpState(this.props.index, !this.props.up)

  }

  clearUpBeads() {

    React.findDOMNode(this.refs.current).style.transform = 'translateY(0px)'
  }


  render() {
    return (

      <li className="ab-item" >
        <div className="unit">{this.props.unit}</div>
        <div className="up-beads-container">
          <div className="up-vertical-pole"></div>
          <BeadSvg ref={this.upbeadRef} className="upbead" {...this.props} unit={this.props.unit} up={this.props.up.toString()} onClick={this.handleupClick} />
        </div>
        <div className="up-vertical-pole-center-line">
          <div className="up-vertical-pole-center-dot">

          </div>
        </div>
        <DownBeads {...this.props.down} />
      </li>
    )
  }
}