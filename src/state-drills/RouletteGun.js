import React from 'react'

class RouletteGun extends React.Component {
    state = {
        chamber: null,
        spinningTheChamber: false,
        verdict: "You're safe"
    }

    handlePullTrigger = () => {
        this.setState({spinningTheChamber: true});
        this.setState({verdict: "Spinning the barrel and pulling the trigger"})           
        this.timeout = setTimeout(() => {
            this.setState({
                spinningTheChamber: false
            })
            this.setState({chamber: Math.floor(Math.random() * 8 + 1)})
            this.getBulletStatus()
        }, 2000);
    }

    getBulletStatus = () => {
        console.log(this.state.chamber, this.props.bulletInChamber)
        this.state.chamber === this.props.bulletInChamber ? this.setState({verdict: 'BANG!!'}) : this.setState({verdict: "You're safe"})
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    render(){
        const { spinningTheChamber } = this.state;
        return (
            <div>
                <p>{this.state.verdict}</p>
                <button onClick={() => this.handlePullTrigger()}>Pull the trigger!</button>
            </div>
        );
    }

    static defaultProps = {
        bulletInChamber: 8
    }
}


export default RouletteGun;