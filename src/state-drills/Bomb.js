import React from 'react'


class Bomb extends React.Component {
    state = {
        message: 'tick',
        timer: 0
    }

    componentDidMount(){ 
        this.interval = setInterval(() => {
            this.changeCounter();
        }, 1000);
    }

    changeCounter(){
        const newTime = ++this.state.timer
        this.setState({timer: newTime});
        this.changeMessage()
    }
    
    changeMessage(){
        const { timer } = this.state;
   
            if (timer > 7){
                this.setState({message: 'BOOM!'})
                clearInterval(this.interval)
            } else if (timer % 2 === 0){
                this.setState({message: 'tick'})
            } else {
                this.setState({message: 'tock'})
            }

      
    }

    componentWillUnmount(){
        clearInterval(this.interval)
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