const courseDB = [
    { "Study":"diploma", "categories": "", "programImg": 'img/ProgramImg/CS.jpg', "programName": "Computer Science", "campus": "Kuala Lumpur, Penang, Johor", "totalFee": "RM17,800", "Career": "Junior Analyst Programmers, Junior Systems Analysts,Junior Software Engineers, Junior Systems Engineers, Junior Research Officers, Junior Quantitative Analysts, Junior Software Developers"},
    { "Study":"diploma", "categories": "", "programImg": 'img/ProgramImg/InSys.jpg', "programName": "Information Systems", "campus": "Kuala Lumpur, Penang, Perak", "totalFee": "RM17,800", "Career": "Junior Programmers, Junior Systems Analysts, Junior SAP Support Consultants, Junior IT Support Executives, Junior IT Executives"},
    { "Study":"diploma", "categories": "", "programImg": 'img/ProgramImg/InfoTech.jpg', "programName": "Information Technology", "campus": "Kuala Lumpur, Penang, Perak, Johor, Pahang, Sabah", "totalFee": "RM17,800", "Career": "Junior Programmers, Junior Systems Analysts, Junior Network Support Officers, Junior IT Support Executives, Junior IT Executives, Web Developer"},
    { "Study":"diploma", "categories": "", "programImg": 'img/ProgramImg/SE.jpg', "programName": "Software Engineering", "campus": "Sabah", "totalFee": "RM17,800", "Career": "Junior Software Engineers, Junior Software Developers, Junior Software Testers, Junior Web Developers, Junior Database Administrators, Junior Systems Analysts"} ,
    { "Study":"degree", "categories": "Science", "programImg": 'img/ProgramImg/MMC.jpg', "programName": "Management Mathematics with Computing", "campus": "Kuala Lumpur", "totalFee": "RM34,100", "Career": "Officers in financial institutions, Quantitative Analysts, Quality Managers, Research Officers, Research Officers, Financial Analysts, Management Consultants, Financial Planners and Advisors, Pricing Analysts, Market Risk Managers, Credit Risk Managers, Asset/Liability Managers, IT Managers, Programmers"},
    { "Study":"degree", "categories": "Computer Science", "programImg": 'img/ProgramImg/IST.jpg', "programName": "Interactive Software Technology", "campus": "Kuala Lumpur", "totalFee": "RM35,100", "Career": "Games Designers, Games Programmers, Games Software Engineers, Games Producers, Games Testers, Technical Lead, Web Designers, Multimedia Developers, Software Developers, Mobile Application Developers, Systems Analysts"},
    { "Study":"degree", "categories": "Computer Science", "programImg": 'img/ProgramImg/DS.jpg', "programName": "Data Science", "campus": "Kuala Lumpur, Penang", "totalFee": "RM34,300", "Career": "Data Scientists, Data Engineers, Data Analyst, Data Modelling Engineers, Software Developers, Mobile Application Developers, Computer Science Researchers, Machine Learning Engineers"},
    { "Study":"degree", "categories": "Information Science", "programImg": 'img/ProgramImg/EIS.jpg', "programName": "Interactive Software Technology", "campus": "Kuala Lumpur", "totalFee": "RM34,300", "Career": "ERP Consultants, Business and Systems Analysts, Business Process Consultants, Business Intelligence Specialists, Data Warehouse Developers, IT Consultants, IT Managers, Programmers, Web Designers, Database Administrators"},
    { "Study":"degree", "categories": "Information Technology", "programImg": 'img/ProgramImg/IS.jpg', "programName": "Information Security", "campus": "Kuala Lumpur", "totalFee": "RM33,800", "Career": "Information Security Analysts, Information Security Consultants, Information Security Managers, Information Security Engineers, Information Security Administrators, Information Security Auditors, Forensics Analysts, Forensics Investigators, Security Software Developers, Mobile Application Developers, Network Security Engineers"},
    { "Study":"degree", "categories": "Information Technology", "programImg": 'img/ProgramImg/IT.jpg', "programName": "Internet Technology", "campus": "Kuala Lumpur, Penang", "totalFee": "RM34,600", "Career": "Web Developers, Multimedia Developers, Mobile Application Developers, Systems Analysts, Network Engineers, IT Consultants, IT Managers, IoT Developers"},
    { "Study":"degree", "categories": "Information Technology", "programImg": 'img/ProgramImg/SSD.jpg', "programName": "Software Systems Development", "campus": "Kuala Lumpur, Penang, Perak, Johor, Pahang, Sabah", "totalFee": "RM34,600", "Career": "Programmers, Web Developers, Multimedia Developers, Mobile Application Developers, Systems Analysts, Software Engineers, Database Administrators, Network Engineers, IT Consultants, IT Managers, IoT Developers"},
    { "Study":"degree", "categories": "Software Engineering", "programImg": 'img/ProgramImg/SE.jpg', "programName": "Software Engineering", "campus": "Kuala Lumpur, Penang", "totalFee": "RM34,600" ,"Career": "Software Engineers, Software Testers, Software Quality Assurance Engineers, Software Developers, Software Architects, Systems Analysts, Web Developers, Mobile Application Developers, IT Consultants, IT and Project Managers, Programmers"}
]

const diplomaLink = document.getElementById('diplomaListItem');
        const bachelorLink = document.getElementById('bachelorListItem');
        const categoriesDisply = document.getElementById('categories');
        const select1 = document.getElementById("select1");
        const select2 = document.getElementById("select2");
        let study = "";

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

        // Event listener for categoriesDisplay
        document.getElementById('diplomaListItem').addEventListener('click', function (event) {
            if (categoriesDisply.style.display === 'table-row') {
                categoriesDisply.style.display = categoriesDisply.style.display === 'none' ? 'table-row' : 'none';
            }
            study = "diploma";
            console.log("study set to diploma:", study); // Log the value of study
            determineStudy(study);
        });

        // Event listener for categoriesDisplay
        document.getElementById('bachelorListItem').addEventListener('click', function (event) {
            if (categoriesDisply.style.display === 'none') {
                categoriesDisply.style.display = 'table-row';
            }

            study = "degree";
            console.log("study set to degree:", study); // Log the value of study
            determineStudy(study);
        });

        function determineStudy(study) {
            document.getElementById("img1").src = "img/ProgramImg/selectProgram.png";
            document.getElementById("categories1").innerHTML = "N/A";
            document.getElementById("programName1").innerHTML = "N/A";
            document.getElementById("Campus1").innerHTML = "N/A";
            document.getElementById("totalFee1").innerHTML = "N/A";
            document.getElementById("career1").innerHTML = "N/A";
            document.getElementById("img2").src = "img/ProgramImg/selectProgram.png";
            document.getElementById("categories2").innerHTML = "N/A";
            document.getElementById("programName2").innerHTML = "N/A";
            document.getElementById("Campus2").innerHTML = "N/A";
            document.getElementById("totalFee2").innerHTML = "N/A";
            document.getElementById("career2").innerHTML = "N/A";
            console.log("determineStudy called with study value:", study); // Log the value of study when the function is called
            let htmlOptions = ""; // Create an empty string to store the HTML options
            for (var i = 0; i < courseDB.length; i++) {
                var studyDB = courseDB[i].Study;
                if (study === studyDB) {
                    htmlOptions += `<option value="${i}">${courseDB[i].programName}</option>`;
                }
            }

            select1.innerHTML = htmlOptions;
            console.log("select1.innerHTML set to:", htmlOptions); // Log the value of select1.innerHTML
            select2.innerHTML = htmlOptions;
            console.log("select2.innerHTML set to:", htmlOptions); // Log the value of select2.innerHTML
            // Set the innerHTML once after building all options
        }

        function item1(a) {
            var course = courseDB[parseInt(a)]; // Parse a to an integer
            document.getElementById("img1").src = course.programImg;
            document.getElementById("categories1").innerHTML = course.categories;
            document.getElementById("programName1").innerHTML = course.programName;
            document.getElementById("Campus1").innerHTML = course.campus;
            document.getElementById("totalFee1").innerHTML = course.totalFee;
            document.getElementById("career1").innerHTML = course.Career;
        }

        function item2(a) {
            var course = courseDB[parseInt(a)]; // Parse a to an integer
            document.getElementById("img2").src = course.programImg;
            document.getElementById("categories2").innerHTML = course.categories;
            document.getElementById("programName2").innerHTML = course.programName;
            document.getElementById("Campus2").innerHTML = course.campus;
            document.getElementById("totalFee2").innerHTML = course.totalFee;
            document.getElementById("career2").innerHTML = course.Career;
        }

        // Call the initializePage function when the page is loaded
        window.addEventListener('load', determineStudy("diploma"));