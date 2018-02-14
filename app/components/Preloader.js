import React, {Component} from 'react';

class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phraseArr: ['Checking the connection...', 'Are you a HR manager?', 'Everything is okay ;)', 'Welcome!'],
            phrase: ''
        };

        this.phraseTimer = null;
    }

    componentDidMount() {
        let counter = 0;
        this.phraseGenerator = setInterval(() => {
            this.setState({
                phrase: this.state.phraseArr[counter]
            });
            counter++;
        }, (9000/(this.state.phraseArr.length)));

        setTimeout(() => {
            clearInterval(this.phraseGenerator)
        }, 9000);
    }

    render() {
        return (
            <div className="preloader">
                <div className="preloader__phrase">
                    {this.state.phrase}
                </div>
                <div className="preloader__loader"></div>
            </div>
        );
    }
}

export default Preloader;