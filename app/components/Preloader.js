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
            phrase: ''
        };

        this.phraseTimer = null;
    }

    componentDidMount() {
        let counter = 0;
        this.phraseGenerator = setTimeout(() => {
            this.setState({
                phrase: 'Loading...'
            });
        }, 300);
    }

    componentWillUnmount() {
        window.clearTimeout(this.phraseGenerator);
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