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
    render() {
        return (
            <>
                <header>
                    <h1>Shopping List</h1>
                </header>
                <main>
                    <AddItemForm />
                    <ShoppingList />
                </main>
            </>
        )
    }
}

export default App1