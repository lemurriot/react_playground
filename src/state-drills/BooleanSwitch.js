import React from 'react'

class BooleanSwitch extends React.Component {
    state = {
        isLoggedIn: false
    }

    handleClick = () => {
        this.setState(prevState => {
            return {isLoggedIn: !prevState.isLoggedIn}
        })
    }
    
    render(){
        let btnText = this.state.isLoggedIn ? 'Log Out' : 'Log In'
        return (
            <button onClick={() => this.handleClick()}>{btnText}</button>

        );
    }
}


export default BooleanSwitch;