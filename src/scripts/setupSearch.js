export default function setupSearch() {
    const searchButton = document.querySelector('.header__menu-search-button');
    const searchInput = document.querySelector('.header__menu-search-bar');

    // function that executes the search
    function search() {
        const searchText = searchInput.value.trim();
        if (searchText !== '') {
            searchInput.value = `You searched for: '${searchText}'`;
        } else {
            alert('Por favor, digite alguma coisa');
        }
    }

    // when the search button is clicked
    searchButton.addEventListener('click', search);

    // when the Enter key is pressed
    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            search();
        }
    });
}