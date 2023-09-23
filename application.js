// Retrieve the selected program from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const selectedProgram = urlParams.get('program');
const studyLevel = urlParams.get('studyLevel');

if (selectedProgram) {

    // If a program was selected, set the value of the dropdown to match
    const selection = document.getElementById('programme');
    selection.value = selectedProgram;


    const level = document.getElementById('level');
    if (studyLevel == "Bachelor") {
        level.value = "Degree";
    }
    if (studyLevel == "Diploma") {
        level.value = "Diploma";
    }

    console.log('Study level selected: ' + level.value);
    console.log('Program selected: ' + selectedProgram);
}

function handleData() {
    var form_data = new FormData(document.querySelector("form"));
    var isValid = true; // Assume the form is valid by default

    if (!form_data.has("gender")) {
        document.getElementById("gender_error").style.display = "block";
        alert("Please select an option for Gender.");
        isValid = false; // Set isValid to false if there is an error
    } else {
        document.getElementById("gender_error").style.display = "none";
    }

    if (!form_data.has("nation")) {
        document.getElementById("nation_error").style.display = "block";
        alert("Please select an option for Nationality.");
        isValid = false; // Set isValid to false if there is an error
    } else {
        document.getElementById("nation_error").style.display = "none";
    }

    if(isValid) {
        // If the form is valid, confirm the submission
        var confirmation = confirm("Are you sure you want to submit?");
        // alert
        if (confirmation) {
            alert("Form submitted successfully.");
        }
        else {
            alert("Form not submitted.");
        }
    }

    return isValid; // Return the isValid flag
}
