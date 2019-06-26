import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Demonym from './Demonym'

describe('<Demonym /> Component', () => {
    it('renders complete form', () => {
        expect(toJson(shallow(<Demonym />))).toMatchSnapshot()
    })
})