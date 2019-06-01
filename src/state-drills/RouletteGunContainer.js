import React, { Component } from 'react'
import RouletteGun from './RouletteGun'

class RouletteGunContainer extends Component {

    render(){
        return (
            <div style={{textAlign: 'center', marginTop:50}}>
                <RouletteGun bulletInChamber={8}/>
            </div>
        );
    }
}

export default RouletteGunContainer;