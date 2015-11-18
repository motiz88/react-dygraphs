import React from 'react';

export default class StarterComponent extends React.Component {
    displayName = 'StarterComponent';

    constructor(props) {
        super(props);
    }

    render() {
        return <div>{'StarterComponent'}</div>;
    }
}
