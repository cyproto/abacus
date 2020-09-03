import React from 'react'

export default class DownBeads extends React.Component {
    constructor() {
        super();
        this.downBeadRef = React.createRef();
        this.handledownClick = this.handledownClick.bind(this);
    }

    handledownClick(e) {
        let count = e.target.getAttribute('data-index');
        let parent = e.target.parentNode;
        let flag = this.props.nums[count] === 120 - count * 40;

        if (flag) {
            for (var i = 0; i <= count; i++) {
                this.props.nums[i] += 40;
                parent.childNodes[i].style.transition = '0.7s'
                parent.childNodes[i].style.transform = 'translateY(-30px)'
            }
        } else {
            var val = 120 - count * 40;

            for (var j = count; j < 4; j++) {
                if (this.props.nums[j] !== val) {
                    this.props.nums[j] = val;
                    parent.childNodes[j].style.transform = 'translateY(0px)'
                }
                val -= 40;
            }
        }
    }

    render() {
        return (
            <div ref={this.downBeadRef} className="down-beads-container">
                {this.props.nums.map((item, index) => {
                    return (<div className="downbead" data-index={index} key={index.toString()} onClick={this.handledownClick}>
                    </div>)
                })}
                <div className="down-vertical-pole"></div>
            </div>
        )
    }
}