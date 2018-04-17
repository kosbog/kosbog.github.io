import React from 'react';
import ReactDOM from 'react-dom'
import { skillsLevelAnimation, scrollToElement, disableScroll, fullExperience, getYear, API } from '../utils/utils';
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

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioFull: 3,
            currentContact: "e-mail",
            loading: 'pending',
            isBadBrowser: API.isBadBrowser
        };

        document.addEventListener('scroll', disableScroll); 

        this.showMorePortfolio = this.showMorePortfolio.bind(this);
        this.checkContact = this.checkContact.bind(this);
    }

    componentDidMount() {
        getYear();
        window.onload = () => {
            this.setState({ loading: 'fulfilled' });
            document.removeEventListener('scroll', disableScroll);
            document.getElementsByClassName('preloader')[0].classList.add('hideMe');
            skillsLevelAnimation();
        }
    }

    showMorePortfolio() {
        this.setState({ portfolioFull: this.state.portfolioFull + 3 });
    }

    checkContact(e) {
        this.setState({ currentContact: e.target.value });
    }

    renderContent() {
        return (
            <React.Fragment>
                <Navigation
                    scrollToElement={scrollToElement}
                    api={API} />
                {/* <Welcome
                    api={API}
                    scrollToElement={scrollToElement} /> */}
                <About api={API} />
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
            </React.Fragment>
        )
    }

    render() {
        return (
            <React.Fragment>
                {this.state.isBadBrowser
                    ? <Browser />
                    : <React.Fragment>
                        <Preloader />
                        <div className="container">
                            {this.renderContent()}
                        </div>
                    </React.Fragment>}
            </React.Fragment>
        );
    }
}

export default Home;