export default function setupFooter() {

    function configureFooter() {
        // check screen width
        if (window.innerWidth > 1024) {
            // for large screens, show the list and remove click events
            document.querySelectorAll('.footer__column-list').forEach(footerList => {
                footerList.classList.remove('hide');
            });
            document.querySelectorAll('.footer__column-title').forEach(footerBtn => {
                footerBtn.removeEventListener('click', toggleFooterList);
            });
        } else {
            // for small screens, hide the list and add click events
            document.querySelectorAll('.footer__column-list').forEach(footerList => {
                footerList.classList.add('hide');
            });
            document.querySelectorAll('.footer__column-title').forEach(footerBtn => {
                footerBtn.addEventListener('click', toggleFooterList);
            });
        }
    }

    // toggle the visibility of the list
    function toggleFooterList(event) {
        const footerList = event.target.closest('.footer__column').querySelector('.footer__column-list');
        footerList.classList.toggle('hide');
    }

    // initialize behavior on page load
    configureFooter();

    // update behavior when resizing the screen
    window.addEventListener('resize', configureFooter);
}
