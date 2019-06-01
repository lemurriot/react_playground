import React from 'react'

class HelloWorld extends React.Component {
    state = {
        who: 'World'
    }
    handleButtonClick = name => {
        this.setState({
            who: name
        })
    }

    render(){
        return (
            <div style={{textAlign:'center',marginTop:50}}>
                <h2>Hello, {this.state.who}!</h2>
                <button onClick={() => this.handleButtonClick('World')}>World</button>
                <button onClick={() => this.handleButtonClick('Friend')}>Friend</button>
                <button onClick={() => this.handleButtonClick('React')}>React</button>
            </div>
        )
    }
}

export default HelloWorld;