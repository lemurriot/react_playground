import React from 'react'
import Tabs from './Tabs'
import ReactDOM from 'react-dom'
import { shallow }from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Tabs component', () => {

    const tabsProp = [
        { name: 'First tab',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
        { name: 'Second tab',
          content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { name: 'Third tab',
          content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
      ];

      it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Tabs />, div)
        ReactDOM.unmountComponentAtNode(div)
        
    })
    
    it('renders empty given no tabs', () => {
        const wrapper = shallow(<Tabs />)
        // The wrapper allows us to find nodes within this component's tree, it also allows us to simulate events on nodes.
        toJson(wrapper)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders the first tab by default', () => {
      const wrapper = shallow(<Tabs tabs={tabsProp} />)
      expect(toJson(wrapper)).toMatchSnapshot()
  })

    it('closes the first tab and opens any clicked tab', () => {
      const wrapper = shallow(<Tabs tabs={tabsProp} />)
      wrapper.find('button')
      // console.log('>>> WRAPPER <<<')
      // console.log(wrapper.debug())
      // console.log('>>> FIND(BUTTON) <<<')
      // console.log(wrapper.find('button').debug())
      wrapper.find('button').at(1).simulate('click')
      expect(toJson(wrapper)).toMatchSnapshot()
    })
})




