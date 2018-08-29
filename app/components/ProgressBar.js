import React, { Component } from 'react';

class ProgressBar extends Component {
    render() {
        return (
            <progress value max='100'></progress>
        );
    }
}

export default ProgressBar;