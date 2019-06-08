import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddItemForm from './AddItemForm'

describe('<AddItemForm /> Component', () => {
    it('renders complete form', () => {
        expect(toJson(shallow(<AddItemForm />))).toMatchSnapshot()
    })
})
