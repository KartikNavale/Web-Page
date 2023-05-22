 // Close the menu when a link is clicked
document.querySelectorAll('.menu a').forEach(function(link) {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });
  
  // Close the menu when clicked outside
  document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu');
    var checkbox = document.getElementById('hamburger-checkbox');
    
    if (!menu.contains(event.target) && !checkbox.contains(event.target)) {
      closeMenu();
    }
  });
  
  function closeMenu() {
    document.getElementById('hamburger-checkbox').checked = false;
  }
  