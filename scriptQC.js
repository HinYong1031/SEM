// Decide which question to appear based on options chosen
const currentSelect1 = document.getElementById(`answer-1`);
currentSelect1.addEventListener('change', () => {
    if (currentSelect1.value === 'Diploma') {
        document.getElementById(`question-2`).style.display = "block";
        //TODO
    } else if (currentSelect1.value === 'Bachelor') {
        document.getElementById(`question-4`).style.display = "block";
        //TODO
    }
});

const currentSelect2 = document.getElementById(`answer-2`);
currentSelect2.addEventListener('change', () => {
    if (currentSelect2.value === 'DiplomaCS' || 'DiplomaIS' || 'DiplomaIT' || 'DiplomaSE') {
        document.getElementById(`question-3`).style.display = "block";
        //TODO
    }
});

const currentSelect3 = document.getElementById(`answer-3`);
currentSelect3.addEventListener('change', () => {
    if (currentSelect3.value === 'None') {
        document.getElementById(`submitBtn`).style.display = "block";
    } else if (currentSelect3.value === 'SPM') {
        document.getElementById(`question-4`).style.display = "block";
        //TODO
    } else if (currentSelect3.value = "O Level") {
        document.getElementById(`question-5`).style.display = "block";
        //TODO
    } else if (currentSelect3.value = "UEC") {
        document.getElementById(`question-6`).style.display = "block";
        //TODO
    }
});

const currentSelect4 = document.getElementById(`answer-4`);
currentSelect4.addEventListener('change', () => {
    if (currentSelect4.value === 'Yes' || 'No') {
        document.getElementById(`submitBtn`).style.display = "block";
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

    // Expected answer
    const expectedAnswer3 = "Your expected answer for Question 3";

    if (answer2 === "DiplomaCS") {
        if (answer3 === "SPM" || "O Level" || "UEC") {
            if (answer4 === "Yes" || answer5 === "Yes" || answer6 === "Yes") {
                success()
            }
            else { 
                failed() 
            }
        } else {
            failed()
        }
    } else if (answer2 === "DiplomaIS:" || "DiplomaIT" || "DiplomaSE") {
        //TODO
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

