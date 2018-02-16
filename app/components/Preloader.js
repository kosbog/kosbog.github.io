import React from 'react';

const PreloaderLines = () => {
    let listAmount = 0,
        listItems = [];

    while (listAmount < 10) {
        listItems.push(<li className={`bar_${listAmount + 1}`} key={`bar_${listAmount + 1}`}></li>)
        listAmount++;
    }

    return (
        <div className="preloader__loader--lines">
            <ul>
                {listItems}
            </ul>
        </div>
    );
}

const PreloaderCircle = ({ phrase }) => {
    return (
        <div className="preloader__loader--circle"></div>
    );
}

class Preloader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phraseArr: ['Check your connection...', 'Check who you are...', 'Hmm, HR??', 'No? Oh... In that case...', 'It\'s a joke :)', 'Welcome.'],
            phrase: ''
        };

        this.phraseTimer = null;
        this.timer = null;
    }

    componentDidMount() {
        let counter = 0;
        this.phraseGenerator = setInterval(() => {
            this.setState({
                phrase: this.state.phraseArr[counter]
            });
            counter++;
        }, (9000 / (this.state.phraseArr.length)));

        this.timer = setTimeout(() => {
            clearInterval(this.phraseGenerator);
            document.getElementsByClassName('preloader')[0].classList.add('hideMe');
        }, 10000);
    }

    componentWillUnmount() {
        window.clearTimeout(this.timer);
    }

    render() {
        return (
            <div className="preloader">
                <div className="preloader__loader">
                    <PreloaderLines />
                </div>
                <div className="preloader__phrase">
                    {this.state.phrase}
                </div>
            </div>
        );
    }
}

export default Preloader;