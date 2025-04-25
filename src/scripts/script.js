import offerPadding from './offerPadding.js';
import setupCarousel from './setupCarousel.js';
import setupCatMenuDropdown from './setupCatMenuDrop.js';
import setupDepMenuDropdown from './setupDepMenuDropdown.js';
import setupFooter from './setupFooter.js';
import setupOfferMobile from './setupOfferMobile.js';
import setupSearch from './setupSearch.js';

// initialize the carousel functionality
setupCarousel();

// initialize the categories dropdown menu
setupCatMenuDropdown();

// initialize the departments dropdown menu
setupDepMenuDropdown();

// apply header padding to offers section
offerPadding();

// initialize footer behavior based on screen size
setupFooter();

// initialize search button and input behavior
setupSearch();

// initialize the mobile offers section behavior
setupOfferMobile();