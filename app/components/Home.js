import React, { Component } from 'react';
import { skillsLevelAnimation, scrollToElement, fullExperience, getYear, checkPreloader, browserDetect, API } from '../utils/utils';
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

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioFull: 3,
            currentContact: "e-mail",
            loading: true,
            browser: false
        };

        this.showMorePortfolio = this.showMorePortfolio.bind(this);
        this.checkContact = this.checkContact.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', skillsLevelAnimation);
        document.removeEventListener('scroll', skillsLevelAnimation, true);
        getYear();
        checkPreloader();
        browserDetect()
            .then(res => {
                if (res.isSupport) {
                    this.setState({ browser: true, loading: false });
                }
            }).catch(e => console.log(e))
    }

    showMorePortfolio() {
        this.setState({ portfolioFull: this.state.portfolioFull + 3 });
    }

    checkContact(e) {
        this.setState({ currentContact: e.target.value });
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.loading ?
                        <Preloader /> :
                        <div>
                            <Navigation scrollToElement={scrollToElement} api={API} />
                            <Welcome scrollToElement={scrollToElement} />
                            <About />
                            <Skills api={API} />
                            <Experience api={API} fullExperience={fullExperience} />
                            {!!API.portfolio.length &&
                                <Portfolio
                                    api={API}
                                    portfolioFull={this.state.portfolioFull}
                                    showMorePortfolio={this.showMorePortfolio} />}
                            <Education api={API} />
                            <Contacts
                                api={API}
                                checkContact={this.checkContact}
                                currentContact={this.state.currentContact} />
                            <Footer />
                        </div>
                }
            </div>
        );
    }
}

export default Home;