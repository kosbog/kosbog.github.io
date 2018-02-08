import React, { Component } from 'react';
import { skillsLevelAnimation, scrollToElement, fullExperience, getYear, checkPreloader, isSupportBrowser, API } from '../utils/utils';
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
            isSupportBrowser: null
        };

        this.showMorePortfolio = this.showMorePortfolio.bind(this);
        this.checkContact = this.checkContact.bind(this);
    }

    componentDidMount() {
        document.addEventListener('scroll', skillsLevelAnimation);
        document.removeEventListener('scroll', skillsLevelAnimation, true);
        getYear();
        checkPreloader();
    }

    showMorePortfolio() {
        this.setState({ portfolioFull: this.state.portfolioFull + 3 });
    }

    checkContact(e) {
        this.setState({
            currentContact: e.target.value
        });
    }

    render() {
        let isIE = /*@cc_on!@*/false || !!document.documentMode,
            isEdge = !isIE && !!window.StyleMedia,
            usAg = window.navigator.userAgent,
            isOperaMini = (usAg.indexOf('Opera Mini') > -1),
            isOpera = (usAg.indexOf('Opera') > -1),
            isIOS = (usAg.match(/(iPod|iPhone|iPad)/));
debugger
            if (isIE || isEdge || isOperaMini || isIOS) {
             this.setState({
                 isSupportBrowser: true,
                 currentContact: 'fif'
             });
         }
         console.log(this.state.isSupportBrowser, this.state.currentContact);
        return (
            <div className="container">
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
        );
    }
}

export default Home;