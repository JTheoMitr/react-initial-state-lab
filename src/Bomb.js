// your Bomb code here!

import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    countTracker = (seconds) => {
        return seconds > 0 ? `${this.state.secondsLeft} seconds left before I go boom!` : "Boom!"
    }

    

    render() {
        return (
            <div>{this.countTracker(this.state.secondsLeft)}</div>
        )
    }
}

export default Bomb