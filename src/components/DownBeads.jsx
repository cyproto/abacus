import React from 'react'

export default class DownBeads extends React.Component {
    constructor() {
        super();
        this.handledownClick = this.handledownClick.bind(this);
    }

    handledownClick(e) {
        let count = e.target.getAttribute('data-index');
        let parent = e.target.parentNode;
        let flag = this.props.nums[count] === 120 - count * 40;

        if (flag) {
            for (var i = 0; i <= count; i++) {
                this.props.nums[i] += 40;
                parent.childNodes[i].style.transition = '.5s'
                parent.childNodes[i].style.transform = 'translateY(-40px)'
                parent.childNodes[i].style.background = 'brown'
                parent.childNodes[i].style.opacity = '1'
            }
        } else {
            var val = 120 - count * 40;

            for (var j = count; j < 4; j++) {
                if (this.props.nums[j] !== val) {
                    this.props.nums[j] = val;
                    //??????????
                    // parent.childNodes[j].style.transition = '.5s'
                    parent.childNodes[j].style.transform = 'translateY(0px)'
                    parent.childNodes[j].style.background = 'rgb(211, 74, 74)'
                    parent.childNodes[j].style.opacity = '0.9'
                }
                val -= 40;
            }
        }
    }

    render() {
        return (
            <div ref='dbs' className="down-beads-container">
                {this.props.nums.map((item, index) => {
                    return <div data-index={index} key={index.toString()} className="downbead" onClick={this.handledownClick}></div>
                })}
                <div className="down-vertical-pole"></div>
                <div className="down-vertical-pole-center-dot"></div>
            </div>
        )
    }
}