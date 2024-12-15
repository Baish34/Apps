// Select all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Add click event listener to each header
accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    // Find the content related to this header
    const content = header.nextElementSibling;

    // Toggle the 'active' class on the content to show or hide it
    content.classList.toggle('active');
  });
});
