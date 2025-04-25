export default function setupDepMenuDropdown () {
    const departments = document.querySelectorAll('.header__item-list');
    const dropdownItem = document.querySelectorAll('.header__department-dropdown__item');
    const dropdownDepartments = document.querySelector('.header__department-dropdown');

    // when hovering a department, show the dropdown and highlight the corresponding item
    departments.forEach((department, i) => {
        department.addEventListener('mouseenter', () => {
            dropdownDepartments.classList.add('active');

            dropdownItem.forEach((item, index) => {
                item.classList.toggle('highlight', index === i);
            });
        });
    });

    // when hovering an item in the dropdown, highlight the matching department and item
    dropdownItem.forEach((item, i) => {
        item.addEventListener('mouseenter', () => {
            departments.forEach((dep, index) => {
                dep.classList.toggle('highlight', i === index);
            });
            dropdownItem.forEach((dropdown, index) => {
                dropdown.classList.toggle('highlight', i === index);
            });
        });
    });

    // function to hide dropdown when mouse leaves both department and dropdown areas
    const tryHideDepDropdown = () => {
        setTimeout(() => {
            const isHoveringDep = Array.from(departments).some(dep => dep.matches(':hover'));
            const isHoveringDropdow = dropdownDepartments.matches(':hover');

            if(!isHoveringDep && !isHoveringDropdow) {
                dropdownDepartments.classList.remove('active');

                departments.forEach(dep => dep.classList.remove('highlight'));
                dropdownItem.forEach(item => item.classList.remove('highlight'));
            };
        }, 300);
    }

    // set up mouse leave listeners to trigger hiding
    departments.forEach(department => {
        department.addEventListener('mouseleave', () => tryHideDepDropdown());
    });

    dropdownDepartments.addEventListener('mouseleave', () => tryHideDepDropdown());
}
