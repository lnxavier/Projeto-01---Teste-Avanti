export default function offerPadding() {
    const header = document.querySelector('.header');
    const offer = document.querySelector('.offer');
    const offerMobile = document.querySelector('.offers-mobile');

    // set top padding of offer section equal to the header height
    offer.style.paddingTop = `${header.offsetHeight}px`;
    offerMobile.style.paddingTop = `${header.offsetHeight}px`;
}