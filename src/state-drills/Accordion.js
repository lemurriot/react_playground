import React from 'react'
import './Accordion.css'


class Accordion extends React.Component {
    state = {
        isShown: -1
    }



    handleClick = i => {
        this.state.isShown === i ? 
        this.setState({
            isShown: -1
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
                    {liList}
                </ul>
            </div>
        );
    }

    static defaultProps = {
        sections: []
    }
}

export default Accordion;