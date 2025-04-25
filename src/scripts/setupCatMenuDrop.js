export default function setupCatMenuDropdown() {
    const filter = document.getElementById('header-filter');
    const allCategoriesMenu = document.querySelector('.header__all-categories-dropdown');

    // show the dropdown menu
    const showMenu = () => {
        allCategoriesMenu.classList.add('active');
    };

    // hide the dropdown menu
    const hideMenu  = () => {
        allCategoriesMenu.classList.remove('active');
    };

    // try to hide the menu after a short delay if not hovering
    const tryHideMenu = () => {
        setTimeout(() => {
            if (!filter.matches(':hover') && !allCategoriesMenu.matches(':hover')) {
                hideMenu();
            }
        }, 300);
    };

    // show menu when hovering the filter
    filter.addEventListener('mouseenter', () => {
        showMenu();
    });

    // keep menu visible when hovering the dropdown
    allCategoriesMenu.addEventListener('mouseenter', () => {
        showMenu();
    });

    // try to hide menu when leaving the filter
    filter.addEventListener('mouseleave', () => tryHideMenu());

    // try to hide menu when leaving the dropdown
    allCategoriesMenu.addEventListener('mouseleave', () => tryHideMenu());
}
