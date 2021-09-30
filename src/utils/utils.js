// Get API data
import data from '../data/data.json';
export const API = {
  isBadBrowser: null,
  get about() {
    return data.about;
  },
  get menu() {
    return data.menu;
  },
  get skills() {
    return data.skills;
  },
  get experience() {
    return data.experience;
  },
  get portfolio() {
    return data.portfolio;
  },
  get education() {
    return data.education;
  },
  get contacts() {
    return data.contacts;
  },
  get images() {
    return data.images;
  },
  get browser() {
    return badBrowserDetect();
  }
}

// Skills level animation
export function skillsLevelAnimation(e) {
  let skillElement = document.getElementsByClassName('skills__level'),
    valueElement = document.getElementsByClassName('skills__value'),
    skillValue = API.skills.map((item, index) => {
      return item.value;
    });

  var valueIndex = 0, skillIndex = 0;

  [...skillElement].forEach(item => {
    item.style.width = `${skillValue[skillIndex] - 7}%`;
    skillIndex += 1;
  });

  [...valueElement].forEach(item => {
    for (let j = 0; j <= skillValue[valueIndex]; j++) {
      setTimeout(function () {
        item.innerHTML = `${j}%`;
      }, j * 33);
    }
    valueIndex += 1;
  });
}

// Show full experience information
export const fullExperience = (index) => {
  let activeElement = document.getElementsByClassName('experience__responsibility')[index];
  let activeExpander = document.getElementsByClassName('experience__full')[index];
  activeElement.classList.toggle('experience__responsibility-expand');
  activeExpander.classList.toggle('experience__full-rotate');
}

// Highlight menu on scroll
export const highlightMenuItem = () => {
  const fromTop = window.scrollY;
  const scrollItems = [...document.getElementsByClassName('section')];
  let curIndex = 0;

  scrollItems?.forEach((elem, idx) => {
    if (elem.offsetTop <= fromTop) {
      curIndex = idx;
    }
  });

  activeLink(curIndex);
}

// Scroll to menu element
export const scrollToElement = (value) => {
  console.log(`*** Scroll to #${value} ***`);
  let element = document.getElementsByClassName(value)[0];
  element.scrollIntoView({ block: "start", behavior: "smooth" });
}

// Set active menu item
export const activeLink = (index = 0) => {
  const links = [...document.querySelectorAll('a.nav__item')]
  links.forEach(element => {
    element.classList.remove('active-menu');
  });
  links[index].classList.add('active-menu');
}

// Get current year
export const getYear = () => {
  const year = new Date().getFullYear(),
    element = document.getElementsByClassName('current-year')[0];

  element.innerHTML = `@${year}`;
}

// Detect browsers
const badBrowserDetect = () => {
  const isIE = /*@cc_on!@*/false || !!document.documentMode,
    isEdge = !isIE && !!window.StyleMedia,
    usAg = window.navigator.userAgent,
    isOperaMini = (usAg.indexOf('Opera Mini') > -1);

  return !!isIE || !!isEdge || !!isOperaMini;
}

// Diable scroll when preloader is active
export const disableScroll = (disabled = true) => {
  window.scrollTo(0, 0);
  const element = document.getElementsByTagName('html')[0];
  disabled
    ? element.classList.add('no-scroll')
    : element.classList.remove('no-scroll');
}

// Progress bar value animation
export const progressBarAnimate = () => {
  const PROGRESS = document.getElementsByTagName('progress')[0];
  const EXCLUDE = document.getElementsByTagName('nav')[0].clientHeight;
  const childs = document.getElementsByClassName('container')[0].children;

  let totalDocumentHeight = Array.from(childs)
    .map(item => item.clientHeight)
    .reduce((prev, curr) => prev + curr);

  let progressValue = (window.scrollY / (totalDocumentHeight - window.innerHeight - EXCLUDE)) * 100;

  PROGRESS.setAttribute('value', progressValue);
}
