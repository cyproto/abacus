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
          <svg ref="upbead" className="upbead" {...this.props} unit={this.props.unit} up={this.props.up.toString()} onClick={this.handleupClick} width="34" height="34" viewBox="0 0 80 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <rect width="80" height="62" fill="transparent" />
              <path d="M37.8923 -6.91914C39.0607 -8.07266 40.9393 -8.07266 42.1077 -6.91915L78.1002 28.6151C80.0087 30.4994 78.6745 33.75 75.9925 33.75H4.0075C1.32551 33.75 -0.00875231 30.4994 1.89981 28.6151L37.8923 -6.91914Z" fill="#F2E401" />
              <path d="M42.409 68.6691C41.2406 69.8227 39.362 69.8227 38.1936 68.6691L2.20109 33.1349C0.292523 31.2506 1.62678 28 4.30877 28H7.82532H18.6506H29.476H40.3013H51.1266L61.9519 28H72.7772H76.2938C78.9758 28 80.31 31.2506 78.4015 33.1349L42.409 68.6691Z" fill="#F2E401" />
              <ellipse cx="40" cy="31" rx="39" ry="4" fill="#1A1A1A" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="80" height="62" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="up-vertical-pole-center-dot"></div>
        <DownBeads {...this.props.down} />
      </li>
    )
  }
}