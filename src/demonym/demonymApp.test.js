import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import DemonymApp from './demonymApp'

describe('<DemonymApp /> Component', () => {
    it('renders on load', () => {
        expect(toJson(shallow(<DemonymApp />))).toMatchSnapshot();
    })
})