import React from 'react'
class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date:new Date()};
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    tick(params) {
        this.setState({
            date: new Date()
        })
    }
    
    render() {
        return <div>时钟: {this.state.date.toLocaleTimeString()}</div>  
    }
};

export default Clock;