import {StarterComponent} from '../src';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

describe('StarterComponent', function() {
    it('should be a function', function() {
        expect(StarterComponent).to.be.a('function');
    });
    it('should be a React component', function() {
        expect(new StarterComponent()).to.be.an.instanceof(React.Component);
    });
    it('should render a div', function() {
        const renderer = ReactTestUtils.createRenderer();
        renderer.render(<StarterComponent />);
        const result = renderer.getRenderOutput();
        expect(result.type).to.equal('div');
    });
});
