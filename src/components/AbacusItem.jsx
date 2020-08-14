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
      ReactDOM.findDOMNode(this.refs.upbead).style.transform = 'translateY(60px)'
      ReactDOM.findDOMNode(this.refs.upbead).style.background = 'brown'
      ReactDOM.findDOMNode(this.refs.upbead).style.opacity = '1'
    } else {
      ReactDOM.findDOMNode(this.refs.upbead).style.transform = 'translateY(0px)'
      ReactDOM.findDOMNode(this.refs.upbead).style.background = 'rgb(211, 74, 74)'
      ReactDOM.findDOMNode(this.refs.upbead).style.opacity = '0.9'
    }

  }

  clearUpBeads() {

    React.findDOMNode(this.refs.upbead).style.transform = 'translateY(0px)'
    React.findDOMNode(this.refs.upbead).style.background = 'rgb(211, 74, 74)'
    React.findDOMNode(this.refs.upbead).style.opacity = '0.9'
  }


  render() {
    return (

      <li className="ab-item" >
        <div className="unit" {...this.props.unit}>{this.props.unit}</div>
        <div className="up-beads-container">
          <div className="up-vertical-pole"></div>
          <div ref="upbead" {...this.props} onClick={this.handleupClick} className="upbead"></div>
        </div>

        <DownBeads {...this.props.down} />
      </li>
    )
  }
}