import React from 'react'


class Bomb extends React.Component {
    state = {
        message: 'tick',
        timer: 8
    }

    componentDidMount(){ 
        this.interval = setInterval(() => {
            this.changeMessageAndCounter();
        }, 1000);
    }

    changeMessageAndCounter(){
        const { timer, message } = this.state;
        let breakLoop = false;
        this.setState({timer: --this.state.timer});
        if (timer === 0){
            this.setState({message: 'BOOM!'});
            clearInterval(this.interval);
        } else {
            message === 'tick' ? this.setState({message: 'tock'}) : this.setState({message: 'tick'})
        }
    }

    render(){
        return (
            <div style={{textAlign: 'center', marginTop:50}}>
                <h1>Hello Bomba</h1>
                <div>{this.state.message}</div>
            </div>
        )
    }
}

export default Bomb;