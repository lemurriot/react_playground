import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import TheDate from './TheDate';

describe('theDate component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TheDate />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it.skip('renders in the UI as expected', () => {
        const tree = renderer
            .create(<TheDate />, )
            .toJSON();
        expect(tree).toMatchSnapshot();
    })
})


