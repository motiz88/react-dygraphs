import React from 'react';
import DygraphBase from 'dygraphs-commonjs';
import {propTypes as dygraphPropTypes, spreadProps as spreadKnownProps} from './Dygraph/options';

export default class Dygraph extends React.Component {
    displayName = 'Dygraph';

    static propTypes = Object.assign({}, dygraphPropTypes);

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {known: initAttrs} = spreadKnownProps(this.props, true);
        this._dygraph = new DygraphBase(this.refs.root, this.props.data, initAttrs);

    }

    componentWillUpdate(nextProps/*, nextState*/) {
        if (this._dygraph) {
            const {known: updateAttrs} = spreadKnownProps(nextProps, false);
            this._dygraph.updateOptions(updateAttrs);
        }
    }

    componentWillUnmount() {
        if (this._dygraph) {
            this._dygraph.destroy();
            this._dygraph = null;
        }
    }

    render() {
        return <div ref='root'></div>;
    }
}
