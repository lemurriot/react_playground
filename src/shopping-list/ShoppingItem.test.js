import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ShoppingItem from './ShoppingItem'

describe(`<ShoppingItem /> Component`, () => {
    it('renders empty given no item', () => {
        const wrapper = shallow(<ShoppingItem />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the item when supplied', () => {
        const testItem = { name: 'test-item', checked: false }
        const wrapper = shallow(<ShoppingItem item={testItem} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('strikes through checked items', () => {
        const testItem = { name: 'test-item', checked: true }
        const wrapper = shallow(<ShoppingItem item={testItem} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})