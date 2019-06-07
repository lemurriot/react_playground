import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordion from './Accordion'

describe('Accordion component', () => {

    const accordionProps = [
        { name: 'First tab',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
        { name: 'Second tab',
          content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { name: 'Third tab',
          content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
      ];

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Accordion />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders empty given no selection', () => {
        const wrapper = shallow(<Accordion sections={accordionProps}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('closes the first tab and opens any clicked tab', () => {
      const wrapper = shallow(<Accordion sections={accordionProps} />)
      wrapper.find('button')
      wrapper.find('button').at(1).simulate('click')
      expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('has no tabs open when the current open tab has its button clicked', () => {
      const wrapper = shallow(<Accordion sections={accordionProps} />)
      wrapper.find('button')
      wrapper.find('button').at(0).simulate('click')
      expect(toJson(wrapper)).toMatchSnapshot()
    })
})