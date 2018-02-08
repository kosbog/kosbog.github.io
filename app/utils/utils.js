import data from '../data/data.json';

// Skills level animation
export function skillsLevelAnimation(e) {
    let parentElement = document.getElementsByClassName('skills')[0],
        skillElement = document.getElementsByClassName('skills__level'),
        valueElement = document.getElementsByClassName('skills__value'),
        parentElementYOffset = parentElement.getBoundingClientRect().top,
        windowYOffset = window.scrollY,
        skillValue = [71, 91, 87];

    if (windowYOffset > parentElementYOffset) {
        var valueIndex = 0, skillIndex = 0;

        [...skillElement].forEach(item => {
            item.style.width = `${skillValue[skillIndex] - 7}%`;
            skillIndex += 1;
        });

        [...valueElement].forEach(item => {
            for (let j = 0; j <= skillValue[valueIndex]; j++) {
                setTimeout(function() {
                    item.innerHTML = `${j}%`;
                }, j * 33);
            }
            valueIndex += 1;
        });
        document.removeEventListener('scroll', skillsLevelAnimation);
    }
}

// Show full experience information
export const fullExperience = (index) => {
    let activeElement = document.getElementsByClassName('experience__responsibility')[index];
    activeElement.style.height = '100%';
}

// Scroll to menu element
export const scrollToElement = (element) => {
    console.log(`*** Scroll to #${element} ***`);
    let val = document.getElementsByClassName(element)[0];
    val.scrollIntoView({ block: "start", behavior: "smooth" });
}

// Get current year
export const getYear = () => {
    const year = new Date().getFullYear(),
        element = document.getElementsByClassName('current-year')[0];

    element.innerHTML = `@ ${year}`;
}

// Preloader
export const checkPreloader = () => {
    const img = new Image(),
        localImg = document.getElementsByClassName('photo__image')[0];
    img.onload = () => {
        console.log('image loaded');
    }
    img.src = '../assets/images/self/self.png';
    console.log(img);
}

// Get API data
export const API = {
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
    }
}