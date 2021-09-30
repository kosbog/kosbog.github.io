import React from 'react';
import { skillsLevelAnimation, scrollToElement, disableScroll, fullExperience, getYear, progressBarAnimate, API, activeLink, highlightMenuItem } from '../utils/utils';
import Preloader from './Preloader';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Contacts from './Contacts';
import Navigation from './Navigation';
import Footer from './Footer';
import Browser from './Browser';
import ProgressBar from './ProgressBar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolioFull: 3,
      currentContact: "",
      loading: 'pending',
      isBadBrowser: API.browser
    };
    disableScroll();
  }

  componentDidMount() {
    window.onload = () => {
      document.addEventListener('scroll', progressBarAnimate);
      document.addEventListener('scroll', highlightMenuItem);
      document.getElementsByClassName('preloader')[0].classList.add('hideMe');
      if (!this.state.isBadBrowser) {
        this.initSetupApp();
      } else {
        this.setState({ loading: 'error' });
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', progressBarAnimate);
  }

  initSetupApp = () => {
    this.setState({ loading: 'fulfilled' });
    disableScroll(false);
    activeLink();
    skillsLevelAnimation();
    getYear();
  }

  showMorePortfolio = () => {
    this.setState({ portfolioFull: this.state.portfolioFull + 3 });
  }

  checkContact = (e) => {
    this.setState({ currentContact: e.target.value });
  }

  renderContent = () => {
    return (
      <div className="container">
        <Navigation
          scrollToElement={scrollToElement}
          api={API} />
        <About api={API} />
        <Skills
          api={API} />
        <Experience
          api={API}
          fullExperience={fullExperience} />
        <Education
          api={API} />
        <Contacts
          api={API}
          checkContact={this.checkContact}
          currentContact={this.state.currentContact} />
        <Footer />
      </div>
    )
  }

  render() {
    return (
      <>
        <ProgressBar />
        <Preloader />
        {this.state.isBadBrowser ? <Browser /> : this.renderContent()}
      </>
    );
  }
}

export default Home;