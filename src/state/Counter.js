import React from 'react';
import PropTypes from 'prop-types'


class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    handleIncrementButtonClick= () => {

        const newCount = this.state.count + this.props.step;
        this.setState({
            count: newCount
        })
    }

    handleDecrementButtonClick = () => {
        const newCount = this.state.count - this.props.step;
        this.setState({
            count: newCount
        })
    }


    render(){
        return (
            <div>
                <p>Current Count: {this.state.count}</p>
                <button onClick={() => this.handleIncrementButtonClick()}>Add {this.props.step}</button>
                <button onClick={() => this.handleDecrementButtonClick()}>Take {this.props.step} Away</button>
            </div>
        );
    }

    static defaultProps = {
        step: 1
    }
}

Counter.propTypes = {
    step: PropTypes.number
}

export default Counter;