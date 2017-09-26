// Helper functions
// 

// Skills level animation
export const skillsLevelAnimation = () => {
    let parentElement = document.getElementsByClassName('skills')[0],
        skillElement = document.getElementsByClassName('skills__level'),
        valueElement = document.getElementsByClassName('skills__value'),
        parentElementYOffset = parentElement.offsetTop - 400,
        windowYOffset = window.scrollY,
        arr = [72, 86, 81];

    if (parentElementYOffset < windowYOffset) {
        [...skillElement].forEach(item => {
            item.style.width = '80%';
        });
        [...valueElement].forEach(item => {
            for (var j = 0; j < 80; j++) {
                (function(j) {
                    setTimeout(function() {
                        item.innerHTML = `${j}%`;
                    }, j * 30);
                })(j);

            }

        });
    }
}