import React from 'react';
import ReactDOM from 'react-dom';
import {Dygraph} from '../src';
import util from 'util';

var container = document.createElement('div');
document.body.appendChild(container);

class DygraphDemo extends React.Component {
    displayName = 'DygraphDemo';

    constructor(props) {
        super(props);
    }

    state = {
        zoom: null,
        clicked: null,
        data: [[1,10,100], [2,20,80], [3,50,60], [4,70,80]]
    };

    handleZoom = (min, max, yranges) => {
        this.setState({zoom: {min, max, yranges}});
    }

    handlePointClick = (e, point) => {
        this.setState({clicked: point.idx});
    }

    render() {
        return (
            <div>
                <Dygraph
                    data={this.state.data}
                    onPointClick={this.handlePointClick}
                    onZoom={this.handleZoom}
                    strokeWidth={10}
                />
                {this.state.zoom ? util.inspect(this.state.zoom) : null}
                {this.state.clicked}
            </div>
        );
    }
}

ReactDOM.render(<DygraphDemo />, container);
