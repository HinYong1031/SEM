const diploma = [
    {
        id: 0,
        image: 'img/o_dcs.jpg',
        title: 'Diploma in Computer Science',
        desc: 'Students are trained in both theoretical knowledge and practical skills for software development, system design, databases, data modelling and related mathematical techniques.',
        link: "dcs.html",
    },
    {
        id: 1,
        image: 'img/o_dis.jpg',
        title: 'Diploma in Information Systems',
        desc: 'This programme majors in business information systems. It aims to produce graduates with fundamental knowledge in information technology and its business related applications.',
        link: "dis.html",
    },
    {
        id: 2,
        image: 'img/o_dit.jpg',
        title: 'Diploma in Information Technology',
        desc: 'This programme provides students with a basic understanding of computing techniques and aims to develop the computing and information technology-based knowledge and skills required.',
        link: "dit.html",
    },
    {
        id: 3,
        image: 'img/o_dse.jpg',
        title: 'Diploma in Software Engineering',
        desc: 'This programme equips students with the fundamental knowledge of software engineering with theory, practical and analytical thinking skills in software project development.',
        link: "dse.html",
    },
];

const degree = [
    {
        id: 0,
        image: 'img/o_dcs.jpg',
        title: 'Bachelor in Computer Science',
        desc: 'Students are trained in both theoretical knowledge and practical skills for software development, system design, databases, data modelling and related mathematical techniques.',
        link: "dcs.html",
    },
    {
        id: 1,
        image: 'img/o_dis.jpg',
        title: 'Bachelor in Information Systems',
        desc: 'This programme majors in business information systems. It aims to produce graduates with fundamental knowledge in information technology and its business related applications.',
        link: "dis.html",
    },
    {
        id: 2,
        image: 'img/o_dit.jpg',
        title: 'Bachelor in Information Technology',
        desc: 'This programme provides students with a basic understanding of computing techniques and aims to develop the computing and information technology-based knowledge and skills required.',
        link: "dit.html",
    },
    {
        id: 3,
        image: 'img/o_dse.jpg',
        title: 'Bachelor in Software Engineering',
        desc: 'This programme equips students with the fundamental knowledge of software engineering with theory, practical and analytical thinking skills in software project development.',
        link: "dse.html",
    },
];

// Function to display diploma program content
const displayDiplomaPrograms = (diplomaData) => {
    document.getElementById('root-diploma').innerHTML = diplomaData.map((item) => {
        var { image, title, desc, link } = item;
        return (
            `<div class="mb-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src=${image} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="px-4 mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">${desc}</p>
                    <div class="flex items-center justify-center">
                        <a href=${link} class="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-pink-200 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-pink-200 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>`
        );
    }).join('');
};

// Display diploma program content initially
displayDiplomaPrograms(diploma);


// Add event listener for the search bar on the diploma tab
document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = diploma.filter((item) => {
        return item.title.toLowerCase().includes(searchData);
    });
    displayDiplomaPrograms(filteredData);
});

// Function to display degree program content
const displayDegreePrograms = (degreeData) => {
    document.getElementById('root-degree').innerHTML = degreeData.map((item) => {
        var { image, title, desc, link } = item;
        return (
            `<div class="mb-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src=${image} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="px-4 mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
                    </a>
                    <p class="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">${desc}</p>
                    <div class="flex items-center justify-center">
                        <a href=${link} class="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-900 rounded-lg hover:bg-pink-200 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-pink-200 dark:focus:ring-blue-800">
                            Read more
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>`
        );
    }).join('');
};

// Display degree program content initially
displayDegreePrograms(degree);

// Add event listener for the search bar on the degree tab
document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = degree.filter((item) => {
        return item.title.toLowerCase().includes(searchData);
    });
    displayDegreePrograms(filteredData);
});


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