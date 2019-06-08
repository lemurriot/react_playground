import React from 'react'
import AddItemForm from './shopping-list/AddItemForm'
import ShoppingList from './shopping-list/ShoppingList'

class App1 extends React.Component {
    state = {
        shoppingItems: [
            { name: 'apples', checked: false },
            { name: 'oranges', checked: true },
            { name: 'bread', checked: false },
        ]
    }
    handleDeleteItem = (item) => {
        const newItems = this.state.shoppingItems.filter(itm => itm !== item)
        this.setState({
            shoppingItems: newItems
        })
    }
    handleCheckItem = (item) => {
        const newItems = this.state.shoppingItems.map(itm => {
            if (itm === item) {
                itm.checked = !itm.checked
            }
            return itm
        })
        this.setState({
            shoppingItems: newItems
        })
    }
    handleAddItem = (itemName) => {
        console.log('added Item', { itemName })
    }

    render() {
        const { shoppingItems } = this.state;
        return (
            <>
                <header>
                    <h1>Shopping List</h1>
                </header>
                <main>
                    <AddItemForm onAddItem={this.handleAddItem}/>
                    <ShoppingList 
                        items={shoppingItems}
                        onDeleteItem={this.handleDeleteItem}
                        onCheckItem={this.handleCheckItem}
                    />
                </main>
            </>
        )
    }
}

export default App1