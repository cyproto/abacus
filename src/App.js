import React, { Component } from 'react';
import InvertedItalianHand from './1599230976526.png';
import './App.scss';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

//@Components
import AbacusItem from "./components/AbacusItem";
import Pannel from "./components/Pannel";

var isFullScreenMode;
class App extends Component {
  constructor(props) {
    super(props);
    isFullScreenMode = false;
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
    this.toggleFullScreen = this.toggleFullScreen.bind(this);
  }

  toggleFullScreen() {
    if (!isFullScreenMode) {
      this.requestFullScreen(document.getElementById('root-element'));
    } else {
      this.exitFullScreen();
    }
    isFullScreenMode = !isFullScreenMode;
    this.setState({
      isFullScreenMode: isFullScreenMode,
    });
  }

  requestFullScreen(element) {
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    if (requestMethod) {
      requestMethod.call(element);
    }
  }

  exitFullScreen() {
    if (document.fullscreenElement || 
      document.webkitFullscreenElement || 
      document.mozFullScreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }

  changeUpState(index, up) {
    let a = this.state.ups.slice()
    a[index].isUp = up
    this.setState({
      ups: a
    })
  }

  animateClearBeads(up, down, i, timer) {
    setTimeout(function () {
      up[i].style.transform = 'translateY(0px)';
      var arr = down[i].getElementsByClassName('downbead')
      for (var j = 0; j < 4; j++) {
        arr[j].style.transform = 'translateY(0px)';
      }
    }, timer);
    return timer + 60;
  }

  async clearAll() {
    var up = document.getElementsByClassName('upbead');
    var down = document.getElementsByClassName('down-beads-container');
    var clearButton = document.getElementsByClassName('pannel');
    var clearButtonIcon = document.getElementsByClassName('trash-icon');
    var invertedItalianHand = document.getElementsByClassName('inverted-italian-hand');

    clearButton[0].disabled = true;
    clearButtonIcon[0].disabled = true;
    invertedItalianHand[0].style.height = '220px';
    invertedItalianHand[0].style.opacity = '1';
    invertedItalianHand[0].style.visibility = 'visible';
    invertedItalianHand[0].style.transition = '1s linear, height 0s, visibility 0s';
    if (window.outerWidth < 768) {
      invertedItalianHand[0].style.transform = 'translateX(-560px)';
    } else {
      invertedItalianHand[0].style.transform = 'translateX(-675px)';
    }

    setTimeout(function () {
      invertedItalianHand[0].style.height = '0px';
      clearButton[0].disabled = false;
      clearButtonIcon[0].disabled = false;
    }, 1500)

    clearButton[0].style.transition = '.5s';
    clearButton[0].style.opacity = '0';
    var timer = 0;
    for (var i = this.state.ups.length - 1; i >= 0; i--) {
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
      timer = this.animateClearBeads(up, down, i, timer);
    }
    setTimeout(function () {
      setTimeout(function () {
        invertedItalianHand[0].style.transition = '0.1s linear';
        invertedItalianHand[0].style.transform = 'translateX(0px)';
        clearButton[0].style.transition = '0.2s';
        clearButton[0].style.opacity = '1';
      }, 200)
    }, 1500);
  }



  render() {
    return (
      <div>
        <header>
        </header>
        <button className="full-screen-toggle" onClick={this.toggleFullScreen}>
          {!isFullScreenMode ? (<FullscreenIcon className="full-screen-icon" />)
            : (<FullscreenExitIcon className="full-screen-icon" />)}
        </button>
        <div className="container">
          <div className="content">
            <Pannel recover={this.state} clearAll={this.clearAll} />
            <div className="left-line"></div>
            <div className="right-line"></div>
            <div className="top-line"></div>
            <div className="bottom-line"></div>
            <div className="center-line"></div>
            <img className="inverted-italian-hand" src={InvertedItalianHand}></img>
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