// Get all tab links and tab content divs
const tabLinks = document.querySelectorAll('[data-te-toggle="pill"]');
const tabContents = document.querySelectorAll('[data-te-tab-active]');

// Add a click event listener to each tab link
tabLinks.forEach((tabLink) => {
    tabLink.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior

        // Hide all tab contents
        tabContents.forEach((tabContent) => {
            tabContent.style.display = 'none';
        });

        // Show the selected tab content
        const targetId = tabLink.getAttribute('data-te-target');
        const targetTab = document.querySelector(targetId);
        if (targetTab) {
            targetTab.style.display = 'block';
        }

        // Optionally, you can update the active tab styles here
        tabLinks.forEach((link) => {
            link.classList.remove('active'); // Remove the "active" class from all tabs
        });
        tabLink.classList.add('active'); // Add the "active" class to the clicked tab
    });
});

// Get the modal by id
var modal = document.getElementById("modal");

// Get the modal image tag
var modalImg = document.getElementById("modal-img");

// this function is called when a small image is clicked
function showModal(src) {
    modal.classList.remove('hidden');
    modalImg.src = src;
}

// this function is called when the close button is clicked
function closeModal() {
    modal.classList.add('hidden');
}
  