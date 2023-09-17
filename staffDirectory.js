// Function to fetch and load JSON data
async function loadJSON() {
    try {
        const response = await fetch('staffData.json'); // Change the filename to your JSON file
        if (!response.ok) {
            throw new Error('Failed to fetch JSON data');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const staffDirectory = document.getElementById('staffDirectory');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');
const modal = document.getElementById('defaultModal');

let currentPage = 1;
const itemsPerPage = 12;
let searchText = ''; // Store search text separately

// Function to toggle the modal and display staff data
function toggleModal(staff) {
    openModal(staff);
}

function openModal(staff) {
    const modalImage = document.getElementById('modalImage');
    const modalName = document.getElementById('modalName');
    const modalDes = document.getElementById('modalDesignation');
    const modalPosition = document.getElementById('modalPosition');
    const modalDep = document.getElementById('modalDepartment');
    const modalEdu = document.getElementById('modalEdu');
    const bottomPart = document.getElementById('bottomPart');

    modalImage.src = staff.image;
    modalName.textContent = staff.name;
    modalDes.textContent = staff.designation ? staff.designation : '';
    modalPosition.textContent = staff.position ? staff.position : '';
    modalEdu.textContent = staff.education ? staff.education : '';
    modalDep.textContent = staff.department ? staff.department : '';
    bottomPart.innerHTML = `
        ${staff.major ? `<span class="font-medium">Major of Study/Specialization:</span> ${staff.major}` : ''}
        <br>
        ${staff.interest ? `<span class="font-medium">Area of Interest:</span> ${staff.interest}` : ''}
        <br>
        <a href="mailto:${staff.email}"><i class="fa-solid fa-envelope fa-lg"></i> ${staff.email}</a>
    `;

    modal.classList.remove('hidden'); // Show the modal
}


// Function to render the staff directory cards based on filters
async function renderStaffDirectory() {
    const staffData = await loadJSON(); // Load data from JSON file
    const searchText = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value.toLowerCase();

    const filteredData = staffData.filter((staff) => {
        const nameMatch = staff.name.toLowerCase().includes(searchText);
        const departmentMatch = filterValue === '' || staff.department.toLowerCase() === filterValue;
        return nameMatch && departmentMatch;
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentStaffData = filteredData.slice(startIndex, endIndex);

    staffDirectory.innerHTML = ''; // Clear previous content

    currentStaffData.forEach((staff) => {
        const card = document.createElement('div');
        // Added 'flex items-center' for centering
        card.className = 'flex flex-col items-center py-16 transition-colors duration-300 transform cursor-pointer group hover:bg-blue-600 rounded-xl'; 
        card.innerHTML = `
                    <img src="${staff.image}" alt="${staff.name}" class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300">
                    <div>
                        <h1 class="mt-4 text-xl text-center font-semibold text-gray-700 dark:text-white group-hover:text-white">
                        ${staff.name}
                        </h1>
                        ${staff.designation ? 
                            `<p class="mt-2 text-center text-gray-500 dark:text-gray-300 group-hover:text-gray-300"> ${staff.designation}</p>` : ''}
                    </div>
                `;

        // Add a click event listener to the card to toggle the modal
        card.addEventListener('click', () => {
            toggleModal(staff);
        });
        staffDirectory.appendChild(card);
    });
    
    // Toggle visibility of the "Previous Page" button
    if (currentPage === 1) {
        prevPageButton.attributes.disabled = true; // Disable the button
        prevPageButton.style.cursor = 'not-allowed'; // Change the cursor style
    } else {
        prevPageButton.attributes.disabled = false; // Enable the button
        prevPageButton.style.cursor = 'pointer'; // Change the cursor style
    }

    // Toggle visibility of the "Next Page" button
    if (endIndex >= filteredData.length) {
        nextPageButton.attributes.disabled = true; // Disable the button
        nextPageButton.style.cursor = 'not-allowed'; // Change the cursor style
    } else {
        nextPageButton.attributes.disabled = false; // Enable the button
        nextPageButton.style.cursor = 'pointer'; // Change the cursor style
    }
}

// Event listeners for search and filter
searchInput.addEventListener('input', () => {
    searchText = searchInput.value.toLowerCase();
    currentPage = 1; // Reset to first page
    renderStaffDirectory();
});
filterSelect.addEventListener('change', () => {
    currentPage = 1; // Reset to first page
    renderStaffDirectory();
});

// Event listeners for pagination
prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderStaffDirectory();
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
    }
});

nextPageButton.addEventListener('click', async () => {
    const staffData = await loadJSON(); // Load data from JSON file
    const searchText = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value.toLowerCase();

    const filteredData = staffData.filter((staff) => {
        const nameMatch = staff.name.toLowerCase().includes(searchText);
        const departmentMatch = filterValue === '' || staff.department.toLowerCase() === filterValue;
        return nameMatch && departmentMatch;
    });

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (endIndex < filteredData.length) {
        currentPage++;
        renderStaffDirectory();
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
    }
});

// Initial render
renderStaffDirectory();