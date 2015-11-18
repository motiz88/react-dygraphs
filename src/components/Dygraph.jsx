import React from 'react';
import DygraphBase from 'dygraphs-commonjs';

export default class Dygraph extends React.Component {
    displayName = 'Dygraph';

    static propTypes = {
        data: React.PropTypes.oneOfType([
            React.PropTypes.string /* CSV or URL */,
            React.PropTypes.arrayOf(React.PropTypes.oneOfType([
                React.PropTypes.instanceOf(Date),
                React.PropTypes.number
            ])),
            React.PropTypes.func
        ]).isRequired
    }

    constructor() {
        super();
    }

    componentDidMount() {
        this._dygraph = new DygraphBase(this.refs.root, this.props.data);
    }

    componentWillUpdate(nextProps/*, nextState*/) {
        if (this._dygraph) {
            this._dygraph.updateOptions({
                data: nextProps.data
            });
        }
    }

    componentWillUnmount() {
        if (this._dygraph) {
            this._dygraph.destroy();
            this._dygraph = null;
        }
    }

    render() {
        return <div ref="root"></div>;
    }
}
