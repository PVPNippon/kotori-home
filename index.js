//TODO: configure function so that it waits until all DOM elements are loaded to run

function toggleDropdown(event, dropdownId) {
  event.preventDefault();

  // Get the dropdown element
  const dropdown = document.getElementById(dropdownId);

  // Check if the dropdown is already visible
  const isVisible = !dropdown.classList.contains('hidden');

  // Hide all dropdowns first
  document.querySelectorAll('ul[id^="privacyDropdown"], ul[id^="termsDropdown"]').forEach((dropdown) => {
    dropdown.classList.add('hidden');
  });

  // If it was not visible before, toggle it to be visible
  if (!isVisible) {
    dropdown.classList.remove('hidden');
  }
}

// Listen for clicks outside the dropdowns
document.addEventListener('click', function (event) {
  const isDropdown = event.target.closest('ul[id^="privacyDropdown"], ul[id^="termsDropdown"]');
  const isDropdownTrigger = event.target.closest('a[onclick^="toggleDropdown"]');

  // If the click is outside the dropdown and not on a dropdown trigger, hide all dropdowns
  if (!isDropdown && !isDropdownTrigger) {
    document.querySelectorAll('ul[id^="privacyDropdown"], ul[id^="termsDropdown"]').forEach((dropdown) => {
      dropdown.classList.add('hidden');
    });
  }
});

document.addEventListener("DOMContentLoaded", function() {

const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');



// add event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});


  // Check if the page is loaded in an iframe
  if (window.self !== window.top) {
    // Hide the header if inside an iframe
    document.getElementById('navbar').style.display = 'none';
    document.getElementById('footer').style.display = 'none';
    
    document.getElementsByClassName('bg-[url(assets/bottom-gradient-bg.svg)]')[0].classList.remove('bg-[url(assets/bottom-gradient-bg.svg)]')
    
  } else {
    // Check if the page is accessed via GitHub Pages
    if (!window.location.href.includes("kotori-bounce.com") && !window.location.href.includes("127.0.0.1")) {  
      // Hide the header if not on GitHub Pages
      document.getElementById('navbar').style.display = 'none';
      document.getElementById('footer').style.display = 'none';
      document.getElementsByClassName('bg-[url(assets/bottom-gradient-bg.svg)]')[0].classList.remove('bg-[url(assets/bottom-gradient-bg.svg)]')
    }
  }
 });