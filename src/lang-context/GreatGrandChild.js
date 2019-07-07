import React, { Component } from 'react'
import languageSpecificCopy from './languageSpecificCopy'
import LanguageContext from './LanguageContext'

class GreatGrandChild extends Component {
    // static is not supported on function components - use render prop w/ rff
    static contextType = LanguageContext
    render() {
        const copy = languageSpecificCopy[this.context.lang] || {}
        return (
        <section>
            <h2>{copy.title}</h2>
            <p>{copy.body}</p>
        </section>
        )
    }
}

export default GreatGrandChild
