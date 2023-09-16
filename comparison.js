/********************************   Data   *****************************************/
const Diploma = [
        { programImg: 'img/CS.jpg', programName: "Computer Science", campus: "KL,PG,JH", totalFee: 17800, Career: "Junior Analyst Programmers, Junior Systems Analysts,Junior Software Engineers, Junior Systems Engineers, Junior Research Officers, Junior Quantitative Analysts, Junior Software Developers"},
        { programImg: 'img/IS.jpg', programName: "Information Systems", campus: "KL,PG,PK", totalFee: 17800, Career: "Junior Programmers, Junior Systems Analysts, Junior SAP Support Consultants, Junior IT Support Executives, Junior IT Executives"},
        { programImg: 'img/IT.jpg', programName: "Information Technology", campus: "KL,PG,PK,JH,PH,SB", totalFee: 17800, Career: "Junior Programmers, Junior Systems Analysts, Junior Network Support Officers, Junior IT Support Executives, Junior IT Executives, Web Developer"},
        { programImg: 'img/SE.jpg', programName: "Software Engineering", campus: "SB", totalFee: 17800, Career: "Junior Software Engineers, Junior Software Developers, Junior Software Testers, Junior Web Developers, Junior Database Administrators, Junior Systems Analysts"}
];

const BachelorDegree = {
    Science: [
        { programImg: 'img/MMC.jpg', programName: "Management Mathematics with Computing", campus: "KL", totalFee: 34100, Career: "Officers in financial institutions, Quantitative Analysts, Quality Managers, Research Officers, Research Officers, Financial Analysts, Management Consultants, Financial Planners and Advisors, Pricing Analysts, Market Risk Managers, Credit Risk Managers, Asset/Liability Managers, IT Managers, Programmers"}
    ], 
    CS: [
        { programImg: 'img/IST.jpg', programName: "Interactive Software Technology", campus: "KL", totalFee: 35100, Career: "Games Designers, Games Programmers, Games Software Engineers, Games Producers, Games Testers, Technical Lead, Web Designers, Multimedia Developers, Software Developers, Mobile Application Developers, Systems Analysts"},
        { programImg: 'img/DS.jpg', programName: "Data Science", campus: "KL, PG", totalFee: 34300, Career: "Data Scientists, Data Engineers, Data Analyst, Data Modelling Engineers, Software Developers, Mobile Application Developers, Computer Science Researchers, Machine Learning Engineers"}
    ],
    IS: [
        { programImg: 'img/EIS.jpg', programName: "Interactive Software Technology", campus: "KL", totalFee: 34300, Career: "ERP Consultants, Business and Systems Analysts, Business Process Consultants, Business Intelligence Specialists, Data Warehouse Developers, IT Consultants, IT Managers, Programmers, Web Designers, Database Administrators"}
    ],
    IT: [
        { programImg: 'img/IS.jpg', programName: "Information Security", campus: "KL", totalFee: 33800, Career: "Information Security Analysts, Information Security Consultants, Information Security Managers, Information Security Engineers, Information Security Administrators, Information Security Auditors, Forensics Analysts, Forensics Investigators, Security Software Developers, Mobile Application Developers, Network Security Engineers"},
        { programImg: 'img/IT.jpg', programName: "Internet Technology", campus: "KL, PG", totalFee: 34600, Career: "Web Developers, Multimedia Developers, Mobile Application Developers, Systems Analysts, Network Engineers, IT Consultants, IT Managers, IoT Developers"},
        { programImg: 'img/SSD.jpg', programName: "Software Systems Development", campus: "KL,PG,PK,JH,PH,SB", totalFee: 34600, Career: "Programmers, Web Developers, Multimedia Developers, Mobile Application Developers, Systems Analysts, Software Engineers, Database Administrators, Network Engineers, IT Consultants, IT Managers, IoT Developers"}
    ], 
    SE: [
        { programImg: 'img/SE.jpg', programName: "Software Engineering", campus: "KL,PG", totalFee: 34600, Career: "Software Engineers, Software Testers, Software Quality Assurance Engineers, Software Developers, Software Architects, Systems Analysts, Web Developers, Mobile Application Developers, IT Consultants, IT and Project Managers, Programmers"}
    ]
};

// if diploman = 2, degree = 3\
/**************************** getElementID **********************************************/
const diplomaLink = document.getElementById('diplomaListItem');
const bachelorLink = document.getElementById('bachelorListItem');

const searchCriteria = document.getElementById("searchCriteria");
const otherInput = document.getElementById("otherInput");
const noticeSpan = document.getElementById("notice");
const searchInput = document.getElementById("searchInput");

/***************************** Navigate bar *****************************************/
diplomaLink.addEventListener('click', () => exchangeClasses('diplomaListItem', 'bachelorListItem'));
bachelorLink.addEventListener('click', () => exchangeClasses('bachelorListItem', 'diplomaListItem'));

// Function to exchange Tailwind CSS classes between two list items when one is clicked
function exchangeClasses(item1Id, item2Id) {
    const item1 = document.getElementById(item1Id);
    const item2 = document.getElementById(item2Id);

    // Get the classes of the two items
    const item1Classes = item1.querySelector('a').getAttribute('class');
    const item2Classes = item2.querySelector('a').getAttribute('class');

    // Set the classes of the two items to exchange their styles
    item1.querySelector('a').setAttribute('class', item2Classes);
    item2.querySelector('a').setAttribute('class', item1Classes);
}

/*************************** grupDataProgram *******************************/
// Function to group data by program name
function groupDataByProgram(data) {
    const groupedData = {};

    data.forEach(item => {
        const programName = item.programName;

        if (!groupedData[programName]) {
            groupedData[programName] = [];
        }

        groupedData[programName].push(item);
    });

    return groupedData;
} 

/**************** Drop Down List + input field ************************/
searchCriteria.addEventListener("change", function () {
    if (searchCriteria.value === "totalFee") { 
        searchInput.type = "number"; // Show the label and input
        // Set the min and max attributes
        searchInput.setAttribute("min", "30000");
        searchInput.setAttribute("max", "50000");
    } 

    if (searchCriteria.value === "totalFee") {
        searchInput.placeholder = "Enter max total fee (between 30000 and 50000)";
    } 
    if (searchCriteria.value === "programName") {
        searchInput.placeholder = "Enter program name ";
    } 
    if (searchCriteria.value === "campus") {
        searchInput.placeholder = "Enter campus (KL,PG,PK,JH,PH,SB)";
    } 
    if (searchCriteria.value === "career") {
        searchInput.placeholder = "Enter your interested job";
    } 
});

/***************************** Table *****************************************/
// function determineDatabase(identifier, event) {
//     // Prevent the default behavior of the anchor tag (e.g., prevent navigating to a new page)
//     event.preventDefault();

//     //=========== To check which database will be use ===========
//     if (identifier === 'diplomaListItem') {
//         // Group the data by program name
//         const groupedData = groupDataByProgram(Diploma);
//         const filterData = determineDiplomaFilter();
//         filterData.forEach(program => {
//             // Add the "duration" property to each object
//             program.duration = 2;
//         });
        
//         console.log('Diploma link clicked');
//     } else if (identifier === 'bachelorListItem') {
//         const groupedData = groupDataByProgram(BachelorDegree);
//         const filterData = determineFilter();
//         groupedData[filterData].forEach(program => {
//             program.duration = 3;
//         });
        
//     }else{
//         // set Default as Diploma
//         const groupedData = groupDataByProgram(Diploma);
//         const filterData = determineFilter();
//     }
//     const header = ["Program Name", "Campus", "Duration", "Total Fee", "Career"];
//     tableCreate(filterData, header);
// }

// function determineDiplomaFilter(){
//     //=========== To check which item in drop down list item is select ===========
//     if (searchCriteria.value === "all") { 
//         const filterAttribute = "programName";
//         try {
//             const valueToMatch = ''; // Replace with the value you want to match
          
//             if (!filterAttribute || !valueToMatch) {
//               throw new Error("Filter attribute and value must be provided.");
//             }
          
//             const filteredDiploma = Diploma.filter(item => {
//               const propertyToFilter = filterAttribute;
//               const valueToCompare = valueToMatch;
//               return item[propertyToFilter].includes(valueToCompare);
//             });
          
//             // Handle the filteredDiploma array as needed
//             console.log(filteredDiploma);
//           } catch (error) {
//             // Handle any potential errors here
//             const noticeSpan = document.getElementById('noticeSpan'); // Replace with the actual element ID
//             if (noticeSpan) {
//               noticeSpan.textContent = "Data not found! Please make sure the input is correct.";
//               noticeSpan.style.display = "flex";
//             } else {
//               console.error("An error occurred:", error);
//             }
//           }
//         }
//     else if (searchCriteria.value === "programName") {
//         const filterAttribute = "programName";
//         try {
//             const valueToMatch = searchInput.value; // Replace with the value you want to match
          
//             if (!filterAttribute || !valueToMatch) {
//               throw new Error("Filter attribute and value must be provided.");
//             }
          
//             const filteredDiploma = Diploma.filter(item => {
//               const propertyToFilter = filterAttribute;
//               const valueToCompare = valueToMatch;
//               return item[propertyToFilter].includes(valueToCompare);
//             });
          
//             // Handle the filteredDiploma array as needed
//             console.log(filteredDiploma);
//           } catch (error) {
//             // Handle any potential errors here
//             const noticeSpan = document.getElementById('noticeSpan'); // Replace with the actual element ID
//             if (noticeSpan) {
//               noticeSpan.textContent = "Data not found! Please make sure the input is correct.";
//               noticeSpan.style.display = "flex";
//             } else {
//               console.error("An error occurred:", error);
//             }
//           }
//     }
//     else if (searchCriteria.value === "campus") {
//         const filterAttribute = "campus";

//         try {
//             const valueToMatch = searchInput.value; // Replace with the value you want to match
          
//             if (!filterAttribute || !valueToMatch) {
//               throw new Error("Filter attribute and value must be provided.");
//             }
          
//             const filteredDiploma = Diploma.filter(item => {
//               const propertyToFilter = filterAttribute;
//               const valueToCompare = valueToMatch;
//               return item[propertyToFilter].includes(valueToCompare);
//             });
          
//             // Handle the filteredDiploma array as needed
//             console.log(filteredDiploma);
//           } catch (error) {
//             // Handle any potential errors here
//             const noticeSpan = document.getElementById('noticeSpan'); // Replace with the actual element ID
//             if (noticeSpan) {
//               noticeSpan.textContent = "Data not found! Please make sure the input is correct.";
//               noticeSpan.style.display = "flex";
//             } else {
//               console.error("An error occurred:", error);
//             }
//           }
//     } 
//     else if (searchCriteria.value === "career") {
//         const filterAttribute = "career";

//         try {
//             const valueToMatch = searchInput.value; // Replace with the value you want to match
          
//             if (!filterAttribute || !valueToMatch) {
//               throw new Error("Filter attribute and value must be provided.");
//             }
          
//             const filteredDiploma = Diploma.filter(item => {
//               const propertyToFilter = filterAttribute;
//               const valueToCompare = valueToMatch;
//               return item[propertyToFilter].includes(valueToCompare);
//             });
          
//             // Handle the filteredDiploma array as needed
//             console.log(filteredDiploma);
//           } catch (error) {
//             // Handle any potential errors here
//             const noticeSpan = document.getElementById('noticeSpan'); // Replace with the actual element ID
//             if (noticeSpan) {
//               noticeSpan.textContent = "Data not found! Please make sure the input is correct.";
//               noticeSpan.style.display = "flex";
//             } else {
//               console.error("An error occurred:", error);
//             }
//           }
//     } 
//     else { //(searchCriteria.value === "totalFee") 
//         const filterAttribute = "totalFee";

//         try {
//             const searchInput = document.getElementById('searchInput'); // Assuming you have an input field with id="searchInput"
//             const valueToMatch = parseFloat(searchInput.value); // Parse the user input to a number
          
//             if (!isNaN(valueToMatch)) {
//               const filteredDiploma = Diploma.filter(item => item.totalFee < valueToMatch);
//               return filteredDiploma;
//             } else {
//               // Handle the case where the user input is not a valid number
//               const noticeSpan = document.getElementById('noticeSpan'); // Assuming you have an element with id="noticeSpan" for displaying errors
//               if (noticeSpan) {
//                 noticeSpan.textContent = "Please enter a valid number for totalFee.";
//                 noticeSpan.style.display = "flex";
//               }
//             }
//           } catch (error) {
//             // Handle other potential errors here
//             console.error("An error occurred:", error);
//           } 
//     }
// }

// function determineDegreeFilter(){
//     //=========== To check which item in drop down list item is select ===========
//     if (searchCriteria.value === "all") { 
//         const filterAttribute = "programName";

//         try {
//             const valueToMatch = ""; // Replace with the value you want to match
          
//             const filteredBachelorDegree = {};
          
//             for (const category in BachelorDegree) {
//               if (BachelorDegree.hasOwnProperty(category)) {
//                 filteredBachelorDegree[category] = BachelorDegree[category].filter(item => {
//                   const propertyToFilter = filterAttribute;
//                   const valueToCompare = valueToMatch;
//                   return item[propertyToFilter].includes(valueToCompare);
//                 });
//               }
//             }
          
//             // Handle the filteredBachelorDegree object as needed
//             console.log(filteredBachelorDegree);
//           } catch (error) {
//             // Handle any potential errors here
//             console.error("An error occurred:", error);
//           }
//     }
//     else if (searchCriteria.value === "programName") {
//         const filterAttribute = "programName";

//         try {
//             const valueToMatch = searchInput.value; // Replace with the value you want to match
          
//             const filteredBachelorDegree = {};
          
//             for (const category in BachelorDegree) {
//               if (BachelorDegree.hasOwnProperty(category)) {
//                 filteredBachelorDegree[category] = BachelorDegree[category].filter(item => {
//                   const propertyToFilter = filterAttribute;
//                   const valueToCompare = valueToMatch;
//                   return item[propertyToFilter].includes(valueToCompare);
//                 });
//               }
//             }
          
//             // Handle the filteredBachelorDegree object as needed
//             console.log(filteredBachelorDegree);
//           } catch (error) {
//             // Handle any potential errors here
//             console.error("An error occurred:", error);
//           }
//     }
//     else if (searchCriteria.value === "campus") {
//         const filterAttribute = "campus";

//         try {
//             const valueToMatch = searchInput.value; // Replace with the value you want to match
          
//             const filteredBachelorDegree = {};
          
//             for (const category in BachelorDegree) {
//               if (BachelorDegree.hasOwnProperty(category)) {
//                 filteredBachelorDegree[category] = BachelorDegree[category].filter(item => {
//                   const propertyToFilter = filterAttribute;
//                   const valueToCompare = valueToMatch;
//                   return item[propertyToFilter].includes(valueToCompare);
//                 });
//               }
//             }
          
//             // Handle the filteredBachelorDegree object as needed
//             console.log(filteredBachelorDegree);
//           } catch (error) {
//             // Handle any potential errors here
//             console.error("An error occurred:", error);
//           }
//     }
//     else if (searchCriteria.value === "career") {
//         const filterAttribute = "career";

//         try {
//             const valueToMatch = searchInput.value; // Replace with the value you want to match
          
//             const filteredBachelorDegree = {};
          
//             for (const category in BachelorDegree) {
//               if (BachelorDegree.hasOwnProperty(category)) {
//                 filteredBachelorDegree[category] = BachelorDegree[category].filter(item => {
//                   const propertyToFilter = filterAttribute;
//                   const valueToCompare = valueToMatch;
//                   return item[propertyToFilter].includes(valueToCompare);
//                 });
//               }
//             }
          
//             // Handle the filteredBachelorDegree object as needed
//             console.log(filteredBachelorDegree);
//           } catch (error) {
//             // Handle any potential errors here
//             console.error("An error occurred:", error);
//           }
//     }
//     else { //(searchCriteria.value === "totalFee") 
//         const filterAttribute = "totalFee";

//         try {
//             const valueToMatch = parseFloat(searchInput.value); // Parse the user input to a number
//             if (!isNaN(valueToMatch)) {
//               const filteredBachelorDegree = {};
          
//               for (const category in BachelorDegree) {
//                 if (BachelorDegree.hasOwnProperty(category)) {
//                   filteredBachelorDegree[category] = BachelorDegree[category].filter(item => item.totalFee < valueToMatch);
//                 }
//               }
          
//               // Return or use the filteredBachelorDegree object as needed
//               return filteredBachelorDegree;
//             } else {
//               // Handle the case where the user input is not a valid number
//               noticeSpan.textContent = "Please enter a valid number for totalFee.";
//               noticeSpan.style.display = "flex";
//             }
//           } catch (error) {
//             // Handle other potential errors here
//             console.error("An error occurred:", error);
            
//           }
//     }
// }


// /*************************** Diploma *****************************************/
// function tableCreate(filterData, attributes) {
//     const resultsContainer = document.getElementById('results');
    
//     // Create a two-column table
//     resultsContainer.innerHTML = ''; // Clear previous results
//     const table = document.createElement('table');
//     table.classList.add('result-table');

//     attributes.forEach(attribute => {
//         const row = document.createElement('tr');
//         const attributeCell = document.createElement('td');
//         attributeCell.textContent = attribute;
//         row.appendChild(attributeCell);

//         const valueCell = document.createElement('td');
//         row.appendChild(filteredDiploma);

//         table.appendChild(row);
//     });

//     resultsContainer.appendChild(table);
// }


function filterAndDisplay() {
    const searchCriteria = document.getElementById('searchCriteria').value;
    const searchInput = document.getElementById('searchInput').value;
    const noticeSpan = document.getElementById('noticeSpan');

    try {
        let filterAttribute = '';
        let valueToMatch = '';

        switch (searchCriteria) {
            case 'programName':
                filterAttribute = 'programName';
                valueToMatch = searchInput.toLowerCase();
                break;
            case 'campus':
                filterAttribute = 'campus';
                valueToMatch = searchInput.toLowerCase();
                break;
            case 'career':
                filterAttribute = 'career';
                valueToMatch = searchInput.toLowerCase();
                break;
            case 'totalFee':
                filterAttribute = 'totalFee';
                valueToMatch = parseFloat(searchInput);
                break;
            case 'all':
                // Display all data
                tableCreate(Diploma);
                return;
            default:
                filterAttribute = 'programName'; // Default to programName
                break;
        }

        if (!filterAttribute || (searchCriteria !== 'totalFee' && !valueToMatch)) {
            throw new Error("Filter attribute and value must be provided.");
        }

        if (searchCriteria === 'totalFee' && isNaN(valueToMatch)) {
            throw new Error("Please enter a valid number for totalFee.");
        }

        let filteredData;
        if (searchCriteria !== 'totalFee') {
            filteredData = Diploma.filter(item =>
                item[filterAttribute].toLowerCase().includes(valueToMatch)
            );
        } else {
            filteredData = Diploma.filter(item =>
                item[filterAttribute] < valueToMatch
            );
        }

        if (filteredData.length === 0) {
            noticeSpan.textContent = "Data not found! Please make sure the input is correct.";
            noticeSpan.style.display = "block";
        } else {
            tableCreate(filteredData);
            noticeSpan.style.display = "none";
        }
    } catch (error) {
        console.error("An error occurred:", error);
        noticeSpan.textContent = "An error occurred. Please check your input.";
        noticeSpan.style.display = "block";
    }
}

function tableCreate(data) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (data.length === 0) {
        resultsContainer.textContent = "No data to display.";
        return;
    }

    const table = document.createElement('table');
    table.classList.add('result-table');

    const attributes = Object.keys(data[0]); // Assuming all objects have the same keys

    // Create header row
    const headerRow = document.createElement('tr');
    attributes.forEach(attribute => {
        const headerCell = document.createElement('th');
        headerCell.textContent = attribute;
        headerRow.appendChild(headerCell);
    });
    table.appendChild(headerRow);

    // Create data rows
    data.forEach(item => {
        const dataRow = document.createElement('tr');
        attributes.forEach(attribute => {
            const dataCell = document.createElement('td');
            dataCell.textContent = item[attribute];
            dataRow.appendChild(dataCell);
        });
        table.appendChild(dataRow);
    });

    resultsContainer.appendChild(table);
}