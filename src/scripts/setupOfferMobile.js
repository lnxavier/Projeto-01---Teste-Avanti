export default function setupOfferMobile() {
    const offers = document.querySelector('.offers-mobile-container');
    const indicators = document.querySelectorAll('.offers__indicator');

    function updateIndicators() {
        const scrollLeft = offers.scrollLeft;  // get horizontal scroll position
        const containerWidth = offers.offsetWidth;  // get container width

        const index = Math.round(scrollLeft / containerWidth);  // calculate current slide index

        indicators.forEach((indicator, i) => {
            const circle = indicator.querySelector('circle');  // get the circle element
            if (i === index) {
            circle.setAttribute('fill', '#303030');  // active dot
            } else {
            circle.setAttribute('fill', '#838383');  // inactive dot
            }
        });
    }   

    offers.addEventListener('scroll', () => {
    window.requestAnimationFrame(updateIndicators);  // optimize updates
    });

    // run once on page load
    updateIndicators();

}