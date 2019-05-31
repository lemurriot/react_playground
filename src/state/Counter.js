import React from 'react'


class Counter extends React.Component {
    state = {
        count: 0
    }

    handleButtonClick= () => {
        const newCount = ++this.state.count
        this.setState({
            count: newCount
        })
    }

    render(){
        return (
            <div>
                <p>Current Count: {this.state.count}</p>
                <button onClick={() => this.handleButtonClick()}>Add One</button>
            </div>
        );
    }
}

export default Counter;