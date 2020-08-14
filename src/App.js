import React, { Component } from 'react';
import './App.scss';

//@Components
import AbacusItem from "./components/AbacusItem";
import Pannel from "./components/Pannel";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ups: [{ isUp: 0 }, { isUp: 0 }, { isUp: 0 }, { isUp: 0 },
      { isUp: 0 }, { isUp: 0 }, { isUp: 0 }, { isUp: 0 },
      { isUp: 0 }, { isUp: 0 }, { isUp: 0 }, { isUp: 0 },
      { isUp: 0 }, { isUp: 0 }, { isUp: 0 }, { isUp: 0 },
      { isUp: 0 }],
      downs: [
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
        { isDown: 1, nums: [120, 80, 40, 0] },
      ],
      clearAll: false,
      units: ['111111111.11111111', '11111111.11111111', '1111111.1111111', '111111.11111111', '11111.11111111', '1111.11111111', '111.11111111', '11.11111111', '1.11111111', '0.11111111', '0.01111111', '0.00111111', '0.00011111', '0.00001111', '0.00000111', '0.00000011', '0.00000001']
    }

    this.showNum = this.showNum.bind(this)
  }

  showNum() {
    var total = 0;
    var downs = this.state.downs;
    var fives = this.state.ups;
    var res = [];
    var f = [];
    var head = [];
    for (var i = 0; i < 7; i++) {
      var cur = downs[i].nums;
      var five = fives[i].isUp;
      if (five) {
        head.push(i)
        f.push(i)
      }
      for (var j = 0; j < 4; j++) {
        if (cur[j] !== 120 - j * 40) {
          if (res[res.length - 1] && res[res.length - 1][0] === i) {
            res.pop();
          }
          head.push(i);
          res.push([i, j])
        }
      }
    }
    let set = new Set(head);
    let array = Array.from(set);
    var weishu = array[array.length - 1] - array[0];
    var start = res[0][0];
    for (let [item] of res.entries()) {
      var weight = weishu - (item[0] - start);
      total += Math.pow(10, weight) * (parseInt(item[1]) + 1)
    }
    return total
  }

  changeUpState(index, up) {
    let a = this.state.ups.slice()
    a[index].isUp = up
    this.setState({
      ups: a
    })
    //alert(this.state.ups[index].isUp)
  }

  clearAll() {
    var up = document.getElementsByClassName('upbead');
    var down = document.getElementsByClassName('down-beads-container');

    for (var i = 0; i < 17; i++) {
      up[i].style.transform = 'translateY(0px)';
      up[i].style.background = 'rgb(211, 74, 74)'
      up[i].style.opacity = '0.9'
      var arr = down[i].getElementsByClassName('downbead')
      for (var j = 0; j < 4; j++) {
        arr[j].style.transform = 'translateY(0px)';
        arr[j].style.background = 'rgb(211, 74, 74)'
        arr[j].style.opacity = '0.9'
      }
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>Abacus</h1>
          <Pannel recover={this.state} clearAll={this.clearAll} showNum={this.showNum} />
        </header>
        <div className="container">
          <div className="content">
            <ul className="abacus-list" >
              {this.state.ups.map((up, index) => {
                return <AbacusItem ref='item' clearAll={this.state.clearAll} {...this.props} changeUpState={this.changeUpState.bind(this)} key={index} index={index} down={this.state.downs[index]} unit={this.state.units[index]} up={this.state.ups[index].isUp} />
              })}
            </ul>
          </div>
        </div >
      </div>

    );
  }
}

export default App;