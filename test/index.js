import ModuleDefaultComponent from '../src';
import {Dygraph} from '../src';

describe('module entry point', function() {
    it('should be a function', function() {
        expect(ModuleDefaultComponent).to.be.a('function');
    });
    it('should be Dygraph', function() {
        expect(ModuleDefaultComponent).to.equal(Dygraph);
    });
});

const testsContext = require.context('./specs/', true, /\.jsx?$/);

testsContext.keys().forEach(testsContext);

const componentsContext = require.context('../src/components/', true, /\.jsx?$/);

componentsContext.keys().forEach(componentsContext);
