// Decide which question to appear based on options chosen
const currentSelect1 = document.getElementById(`answer-1`);
const currentSelect2 = document.getElementById(`answer-2`);
const currentSelect3 = document.getElementById(`answer-3`);
const currentSelect4 = document.getElementById(`answer-4`);
const currentSelect5 = document.getElementById(`answer-5`);
const currentSelect6 = document.getElementById(`answer-6`);
const currentSelect7 = document.getElementById(`answer-7`);
const currentSelect8 = document.getElementById(`answer-8`);

const submitButton = document.getElementById(`submitBtn`);

// Select Diploma or Degree
currentSelect1.addEventListener('change', () => {
    if (currentSelect1.value === 'Diploma') {
        document.getElementById(`question-2`).style.display = "block";
        submitButton.style.display = "none";
        for (let a = 3; a <= 20; a++) {
            document.getElementById(`question-${a}`).style.display = "none";
            document.getElementById(`answer-${a}`).selectedIndex = 0;
        }
    } else if (currentSelect1.value === 'Bachelor') {
        document.getElementById(`question-9`).style.display = "block";
        submitButton.style.display = "none";
        for (let b = 2; b <= 20; b++) {
            if (b === 9) continue;
            document.getElementById(`question-${b}`).style.display = "none";
            document.getElementById(`answer-${b}`).selectedIndex = 0;
        }
    }
});

// Select Diploma program
currentSelect2.addEventListener('change', () => {
    if (currentSelect2.value === 'DiplomaCS' || 'DiplomaIS' || 'DiplomaIT' || 'DiplomaSE') {
        document.getElementById(`question-3`).style.display = "block";
        submitButton.style.display = "none";
        currentSelect3.selectedIndex = 0;
        for (let c = 4; c <= 20; c++) {
            document.getElementById(`question-${c}`).style.display = "none";
        }
    }
});

// Select highest level of study (Diploma)
currentSelect3.addEventListener('change', () => {
    if (currentSelect3.value === 'None') {
        document.getElementById(`submitBtn`).style.display = "block";
    } else if (currentSelect2.value === "DiplomaCS" && currentSelect3.value === 'SPM') {
        document.getElementById(`question-4`).style.display = "block";
        //TODO
    } else if (currentSelect2.value === "DiplomaCS" && currentSelect3.value === "O Level") {
        document.getElementById(`question-5`).style.display = "block";
        //TODO
    } else if ((currentSelect2.value === "DiplomaIS" || "DiplomaIT" || "DiplomaSE") && currentSelect3.value === 'SPM') {
        document.getElementById(`question-6`).style.display = "block";
        //TODO
    } else if ((currentSelect2.value === "DiplomaIS" || "DiplomaIT" || "DiplomaSE") && currentSelect3.value === 'O Level') {
        document.getElementById(`question-7`).style.display = "block";
        //TODO
    } else if ((currentSelect2.value === "DiplomaCS" || "DiplomaIS" || "DiplomaIT" || "DiplomaSE") && currentSelect3.value === "UEC") {
        document.getElementById(`question-8`).style.display = "block";
        //TODO
    }
});


currentSelect4.addEventListener('change', () => {
    if (currentSelect4.value === 'Yes' || 'No') {
        submitButton.style.display = "block";
    }
});
currentSelect5.addEventListener('change', () => {
    if (currentSelect5.value === 'Yes' || 'No') {
        submitButton.style.display = "block";
    }
});
currentSelect6.addEventListener('change', () => {
    if (currentSelect6.value === 'Yes' || 'No') {
        submitButton.style.display = "block";
    }
});
currentSelect7.addEventListener('change', () => {
    if (currentSelect7.value === 'Yes' || 'No') {
        submitButton.style.display = "block";
    }
});
currentSelect8.addEventListener('change', () => {
    if (currentSelect8.value === 'Yes' || 'No') {
        submitButton.style.display = "block";
    }
});

/*=====================================================================================================================*/

// Submission
function submitForm() {
    document.getElementById(`submitBtn`).style.display = "none";
    document.getElementById(`resetBtn`).style.display = "block";

    const answer2 = document.getElementById("answer-2").value;
    const answer3 = document.getElementById("answer-3").value;
    const answer4 = document.getElementById("answer-4").value;
    const answer5 = document.getElementById("answer-5").value;
    const answer6 = document.getElementById("answer-6").value;
    const answer7 = document.getElementById("answer-7").value;
    const answer8 = document.getElementById("answer-8").value;

    // Expected answer
    const expectedAnswer3 = "Your expected answer for Question 3";

    if (answer2 === "DiplomaCS") {
        if (answer3 === "SPM" || "O Level" || "UEC") {
            if (answer4 === "Yes" || answer5 === "Yes" || answer8 === "Yes") {
                success()
            }
            else { 
                failed() 
            }
        } else {
            failed()
        }
    } else if (answer2 === "DiplomaIS" || "DiplomaIT" || "DiplomaSE") {
        if (answer3 === "SPM" || "O Level" || "UEC") {
            if (answer6 === "Yes" || answer7 === "Yes" || answer8 === "Yes") {
                success()
            } else {
                failed()
            }
        } else {
            failed()
        }
    }

    document.getElementById("result").style.display = "block";
}

// Qualified
function success() {
    document.getElementById("qualification-result").textContent = "Congratulations! You are Qualified.";
    document.getElementById("qualification-result").style.color = "green";
}

// Unqualified
function failed() {
    document.getElementById("qualification-result").textContent = "Sorry, you are not Qualified.";
    document.getElementById("qualification-result").style.color = "red";
}

function resetForm() {
    document.getElementById("qualification-form").reset();
    document.getElementById("result").style.display = "none";
    document.getElementById(`resetBtn`).style.display = "none";

    // Hide all questions except question 1
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`question-${i}`).style.display = "none";
    }
    document.getElementById("question-1").style.display = "block";
}

