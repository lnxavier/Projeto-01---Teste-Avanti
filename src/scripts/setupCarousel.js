export default function setupCarousel() {
    document.querySelectorAll('.releases').forEach(section => {
        const releasesList = section.querySelector('.releases__list');
        const leftArrow = section.querySelector('.releases__left-arrow');
        const rightArrow = section.querySelector('.releases__right-arrow');
        const tabs = section.querySelectorAll('.releases__tab');
        const indicators = section.querySelectorAll('.releases__indicator');
        const tabCount = tabs.length;
        let currentTab = 0;

        // function to activate a specific tab and its indicator
        function showTab(index) {
            tabs.forEach((tab, i) => {
                tab.classList.toggle('active', i === index);
            });

            indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });
        };

        // function to move between tabs
        function navigateTabs(direction) {
            currentTab += direction;
            if (currentTab < 0) {
                currentTab = tabCount - 1;
            } else if (currentTab >= tabCount) {
                currentTab = 0;
            }
        };

        // when right arrow is clicked
        rightArrow.addEventListener('click', () => {
            navigateTabs(1);
            showTab(currentTab);
        });

        // when left arrow is clicked
        leftArrow.addEventListener('click', () => {
            navigateTabs(-1);
            showTab(currentTab);
        });

        // show the first tab initially
        showTab(currentTab);
    });
}
