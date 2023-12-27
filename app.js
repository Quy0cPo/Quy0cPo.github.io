let isLoggedIn = false;

document.getElementById('login').addEventListener('click', (event) => {
  event.preventDefault();
  // Here should be your login logic
  isLoggedIn = true;
  updateProtectedLinks();
});

function updateProtectedLinks() {
  const protectedLinks = document.querySelectorAll('.sidebar-item[data-protected="true"]');

  protectedLinks.forEach(link => {
    if (isLoggedIn) {
      link.classList.add('active');
      link.style.pointerEvents = 'auto';
    } else {
      link.classList.remove('active');
      link.style.pointerEvents = 'none';
    }
  });
}

// Get all the sidebar items
const buttons = document.querySelectorAll('.sidebar-item');

// Add click event to each button
buttons.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove 'active' class from all buttons
    buttons.forEach(b => b.classList.remove('active'));
    
    // Add 'active' class to the clicked button
    this.classList.add('active');
  });
});


// Initial update on page load
updateProtectedLinks();
