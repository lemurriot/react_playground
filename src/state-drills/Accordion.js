import React from 'react'
import './Accordion.css'


class Accordion extends React.Component {
    state = {
        isShown: null
    }



    handleClick = i => {
        this.state.isShown === i ? 
        this.setState({
            isShown: null
        }) :
        this.setState({
            isShown: i
        })
    }

    render() {
        const liList = this.props.sections.map((item, i) => <li key={i}><button id={`${i}`} onClick={() => this.handleClick(i)}>{item.name}</button><p className={this.state.isShown === i ? 'show-content' : 'hide-content'}>{item.content}</p></li>)
        return (
            <div>
                <hr/>
                <h2>Accordion</h2>
                <ul>
                    {!!this.props.sections.length && liList}
                </ul>
            </div>
        );
    }

    static defaultProps = {
        sections: []
    }
}

export default Accordion;