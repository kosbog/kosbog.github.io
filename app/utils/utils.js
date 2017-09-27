// Helper functions

// Skills level animation
export const skillsLevelAnimation = (e) => {
    let parentElement = document.getElementsByClassName('skills')[0],
        skillElement = document.getElementsByClassName('skills__level'),
        valueElement = document.getElementsByClassName('skills__value'),
        parentElementYOffset = parentElement.offsetTop * 0.65,
        windowYOffset = window.scrollY,
        skillValue = [68, 86, 79];

    console.log(parentElementYOffset, windowYOffset);

    if (windowYOffset > parentElementYOffset) {
        var valueIndex = 0, skillIndex = 0;

        [...skillElement].forEach(item => {
            item.style.width = `${skillValue[skillIndex] - 5}%`;
            skillIndex += 1;
        });

        [...valueElement].forEach(item => {
            for (let j = 0; j <= skillValue[valueIndex]; j++) {
                setTimeout(function() {
                    item.innerHTML = `${j}%`;
                }, j * 28);
            }
            valueIndex += 1;
        });
    }
}

// Show full experience information
export const fullExperience = (index) => {
    let activeElement = document.getElementsByClassName('experience__responsibility')[index];

    activeElement.style.height = '100%';
}