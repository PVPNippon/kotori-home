//TODO: configure function so that it waits until all DOM elements are loaded to run

function toggleDropdown(event, dropdownId) {
  event.preventDefault(); // Prevents the page from jumping

   // Hide all dropdowns first
   document.querySelectorAll('ul[id^="privacyDropdown"], ul[id^="termsDropdown"]').forEach(dropdown => {
    dropdown.classList.add('hidden');
  });

  // Toggle the selected dropdown visibility
  const dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle('hidden');
}

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