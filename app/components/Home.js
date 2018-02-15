import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { skillsLevelAnimation, scrollToElement, disableScroll, fullExperience, getYear, badBrowserDetect, API } from '../utils/utils';
import Preloader from './Preloader';
import Welcome from './Welcome';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import Navigation from './Navigation';
import Footer from './Footer';
import Browser from './Browser';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioFull: 3,
            currentContact: "e-mail",
            loading: true,
            isBadBrowser: false
        };

        this.showMorePortfolio = this.showMorePortfolio.bind(this);
        this.checkContact = this.checkContact.bind(this);
    }

    componentDidMount() {
        // document.addEventListener('scroll', disableScroll);
        badBrowserDetect()
            .then(res => {
                this.setState({ isBadBrowser: res.unSupport });
                setTimeout(() => {
                    this.setState({ loading: false });
                    getYear();
                }, 11000);
            })
            .catch(e => this.setState({ loading: false }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.loading !== prevState.loading) {
            document.removeEventListener('scroll', disableScroll);
            document.addEventListener('scroll', skillsLevelAnimation);
            document.removeEventListener('scroll', skillsLevelAnimation, true);
        }
    }

    showMorePortfolio() {
        this.setState({ portfolioFull: this.state.portfolioFull + 3 });
    }

    checkContact(e) {
        this.setState({ currentContact: e.target.value });
    }

    renderContent(isBad) {
        return isBad
            ? <Browser />
            : <React.Fragment>
                <Navigation
                    scrollToElement={scrollToElement}
                    api={API} />
                <Welcome
                    scrollToElement={scrollToElement} />
                <About />
                <Skills
                    api={API} />
                <Experience
                    api={API}
                    fullExperience={fullExperience} />
                {/* <Portfolio
                    api={API}
                    portfolioFull={this.state.portfolioFull}
                    showMorePortfolio={this.showMorePortfolio} /> */}
                <Education
                    api={API} />
                <Contacts
                    api={API}
                    checkContact={this.checkContact}
                    currentContact={this.state.currentContact} />
                <Footer />
            </React.Fragment>;
    }

    render() {
        return (
            <React.Fragment>
                {/* {this.state.loading &&
                    <Preloader />} */}
                <div className="container">
                    {this.renderContent(this.state.isBadBrowser)}
                </div>
            </React.Fragment>
        );
    }
}

export default Home;