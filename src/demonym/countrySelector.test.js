import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CountrySelector from './countrySelector'

describe('<CountrySelector /> component', () => {
    it('renders upon load', () => {
        expect(toJson(shallow(<CountrySelector />))).toMatchSnapshot()
    })
})
