const product = [
    {
        id: 0,
        image: 'img/o_dcs.jpg',
        title: 'Diploma in Computer Science',
        price: 'Students are trained in both theoretical knowledge and practical skills for software development, system design, databases, data modelling and related mathematical techniques.',
        link: "testwifmaster.html",
    },
    {
        id: 1,
        image: 'img/o_dis.jpg',
        title: 'Diploma in Information Systems',
        price: 'This programme majors in business information systems. It aims to produce graduates with fundamental knowledge in information technology and its business related applications.',
        link: "testwifmaster.html",
    },
    {
        id: 2,
        image: 'img/o_dit.jpg',
        title: 'Diploma in Information Technology',
        price: 'This programme provides students with a basic understanding of computing techniques and aims to develop the computing and information technology-based knowledge and skills required.',
        link: "testwifmaster.html",
    },
    {
        id: 3,
        image: 'img/o_dse.jpg',
        title: 'Diploma in Software Engineering',
        price: 'This programme equips students with the fundamental knowledge of software engineering with theory, practical and analytical thinking skills in software project development.',
        link: "testwifmaster.html",
    },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((item) => {
        return (
            item.title.toLowerCase().includes(searchData)
        )
    })
    displayItem(filteredData)
});

const displayItem = (items) => {
    document.getElementById('root').innerHTML = items.map((item) => {
        var { image, title, price, link } = item;
        return (
            `<div class="mb-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src=${image} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                    <div class="h-20">
                        <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
                    </div>
                    </a>
                    <p class="mb-3 font-normal text-justify text-gray-700 dark:text-gray-400">${price}</p>
                    <div class="flex items-center justify-center">
                    <a href=${link} class="mx-auto inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-pink-200 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-pink-200 dark:focus:ring-blue-800">
                        Read more
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    </div>
                </div>
            </div>
            </div>`
        )
    }).join('')
};
displayItem(categories);