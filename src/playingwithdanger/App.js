import React, { Component } from 'react'
import Currency from './Currency'
import CurrencyError from './CurrencyError'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <CurrencyError>
                    Error Boundary App
                    Germany: <Currency value={21} locale="de-DE" currency="USD"/>
                    USA: <Currency value={21} locale="en-US" currency="US"/>
                </CurrencyError>
                
            </div>
        );
    }
}
