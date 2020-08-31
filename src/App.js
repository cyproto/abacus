import React, { Component } from 'react';
import './App.scss';

//@Components
import AbacusItem from "./components/AbacusItem";
import Pannel from "./components/Pannel";

class App extends Component {
  constructor(props) {
    super(props);
    this.abacusItemRef = React.createRef();
    this.state = {
      ups: [{ isUp: true }, { isUp: true }, { isUp: true }, { isUp: true },
      { isUp: true }, { isUp: true }, { isUp: true }, { isUp: true },
      { isUp: true }, { isUp: true }, { isUp: true }, { isUp: true },
      { isUp: true }, { isUp: true }, { isUp: true }, { isUp: true },
      { isUp: true }],
      downs: [
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
        { isDown: true, nums: [120, 80, 40, 0] },
      ],
      clearAll: false,
    }
    this.clearAll = this.clearAll.bind(this);
  }

  changeUpState(index, up) {
    let a = this.state.ups.slice()
    a[index].isUp = up
    this.setState({
      ups: a
    })
  }

  clearAll() {
    var up = document.getElementsByClassName('upbead');
    var down = document.getElementsByClassName('down-beads-container');    
    for (var i = 0; i < 17; i++) {
      let ups = this.state.ups.slice();
      ups[i].isUp = true;
      this.setState({
        ups: ups,
      });
      let downs = this.state.downs.slice();
      downs[i].isDown = true;
      this.setState({
        downs: downs,
      });
      downs[i].nums[0] = 120;
      downs[i].nums[1] = 80;
      downs[i].nums[2] = 40;
      downs[i].nums[3] = 0;
      up[i].style.transform = 'translateY(0px)';
      var arr = down[i].getElementsByClassName('downbead')
      for (var j = 0; j < 4; j++) {
        arr[j].style.transform = 'translateY(0px)';
      }
    }
  }

  render() {
    return (
      <div>
        <header>
          <Pannel recover={this.state} clearAll={this.clearAll} />
        </header>
        <div className="container">
          <div className="content">
            <div className="left-line"></div>
            <div className="right-line"></div>
            <div className="top-line"></div>
            <div className="bottom-line"></div>
            <ul className="abacus-list" >
              {this.state.ups.map((up, index) => {
                return (
                  <AbacusItem ref={this.abacusItemRef}
                    clearAll={this.state.clearAll} {...this.props}
                    changeUpState={this.changeUpState.bind(this)}
                    key={index.toString()} index={index}
                    down={this.state.downs[index]}
                    up={this.state.ups[index].isUp} />)
              })}
            </ul>
          </div>
        </div >
      </div>

    );
  }
}

export default App;