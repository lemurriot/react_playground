import React from 'react'

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    }
    handleButtonClick = name => {
        this.setState({
            who: name
        })
    }

    render(){
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={() => this.handleButtonClick('World')}>World</button>
                <button onClick={() => this.handleButtonClick('Friend')}>Friend</button>
                <button onClick={() => this.handleButtonClick('React')}>React</button>
            </div>
        )
    }
}

export default HelloWorld;