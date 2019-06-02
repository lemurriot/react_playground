import React from 'react'

class Tabs extends React.Component {
    state = {
        currentTabIndex: 0
    }
    
    render(){
        const {tabs} = this.props
        const buttons = tabs.map((item, i) => <button key={i}>{item.name}</button>)
        const currentTab = tabs[this.state.currentTabIndex]
        return (
            <div>
                <hr/>
                <h2>Tabs</h2>
                {buttons}
                {tabs.length && (
                    <div className="content">
                        {currentTab.content} 
                    </div>
                )}
            </div>
        );
    }

    static defaultProps = {
        tabs: []
    }
}

export default Tabs;