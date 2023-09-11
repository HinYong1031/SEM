// Decide which question to appear based on options chosen
const currentSelect1 = document.getElementById(`answer-1`);
// Diploma
const currentSelect2 = document.getElementById(`answer-2`);
const currentSelect3 = document.getElementById(`answer-3`);
const currentSelect4 = document.getElementById(`answer-4`);
const currentSelect5 = document.getElementById(`answer-5`);
const currentSelect6 = document.getElementById(`answer-6`);
const currentSelect7 = document.getElementById(`answer-7`);
const currentSelect8 = document.getElementById(`answer-8`);
// Bachelor
const currentSelect9 = document.getElementById(`answer-9`);
const currentSelect10 = document.getElementById(`answer-10`);
const currentSelect11 = document.getElementById(`answer-11`);
const currentSelect12 = document.getElementById(`answer-12`);
const currentSelect13 = document.getElementById(`answer-13`);
const currentSelect14 = document.getElementById(`answer-14`);
const currentSelect15 = document.getElementById(`answer-15`);
const currentSelect16 = document.getElementById(`answer-16`);
const currentSelect17 = document.getElementById(`answer-17`);
const currentSelect18 = document.getElementById(`answer-18`);
const currentSelect19 = document.getElementById(`answer-19`);
const currentSelect20 = document.getElementById(`answer-20`);
const currentSelect21 = document.getElementById(`answer-21`);
const currentSelect22 = document.getElementById(`answer-22`);
const currentSelect23 = document.getElementById(`answer-23`);
const currentSelect24 = document.getElementById(`answer-24`);
const currentSelect25 = document.getElementById(`answer-25`);
const currentSelect26 = document.getElementById(`answer-26`);
const currentSelect27 = document.getElementById(`answer-27`);
const currentSelect28 = document.getElementById(`answer-28`);

const submitButton = document.getElementById(`submitBtn`);

// Select Diploma or Degree
currentSelect1.addEventListener('change', () => {
    if (currentSelect1.value === 'Diploma') {
        document.getElementById(`question-2`).style.display = "block";
        submitButton.style.display = "none";
        for (let i = 3; i <= 28; i++) {
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    } else if (currentSelect1.value === 'Bachelor') {
        document.getElementById(`question-9`).style.display = "block";
        submitButton.style.display = "none";
        for (let i = 2; i <= 28; i++) {
            if (i === 9) continue;
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    }
});

// DIPLOEMA SECTION
// Select Diploma program
currentSelect2.addEventListener('change', () => {
    if (currentSelect2.value === 'DiplomaCS' || 
    currentSelect2.value === 'DiplomaIS' || 
    currentSelect2.value === 'DiplomaIT' || 
    currentSelect2.value === 'DiplomaSE') {
        document.getElementById(`question-3`).style.display = "block";
        submitButton.style.display = "none";
        currentSelect3.selectedIndex = 0;
        for (let i = 4; i <= 28; i++) {
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    }
});

// Select highest level of study (Diploma)
currentSelect3.addEventListener('change', () => {
    if (currentSelect3.value === 'None') {
        document.getElementById(`submitBtn`).style.display = "block";
        for (let i = 4; i <= 8; i++) {
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    } else if (currentSelect2.value === "DiplomaCS" && currentSelect3.value === 'SPM') {
        document.getElementById(`question-4`).style.display = "block";
        submitButton.style.display = "none";
        for (let e = 4; e <= 8; e++) {
            if (e === 4) continue;
            document.getElementById(`question-${e}`).style.display = "none";
            document.getElementById(`answer-${e}`).selectedIndex = 0;
        }
    } else if (currentSelect2.value === "DiplomaCS" && currentSelect3.value === "O Level") {
        document.getElementById(`question-5`).style.display = "block";
        submitButton.style.display = "none";
        for (let e = 4; e <= 8; e++) {
            if (e === 5) continue;
            document.getElementById(`question-${e}`).style.display = "none";
            document.getElementById(`answer-${e}`).selectedIndex = 0;
        }
    } else if ((currentSelect2.value === "DiplomaIS" || 
    currentSelect2.value === "DiplomaIT" || 
    currentSelect2.value === "DiplomaSE") && 
    currentSelect3.value === 'SPM') {
        document.getElementById(`question-6`).style.display = "block";
        submitButton.style.display = "none";
        for (let g = 4; g <= 8; g++) {
            if (g === 6) continue;
            document.getElementById(`question-${g}`).style.display = "none";
            document.getElementById(`answer-${g}`).selectedIndex = 0;
        }
    } else if ((currentSelect2.value === "DiplomaIS" || 
    currentSelect2.value === "DiplomaIT" || 
    currentSelect2.value === "DiplomaSE") && 
    currentSelect3.value === 'O Level') {
        document.getElementById(`question-7`).style.display = "block";
        submitButton.style.display = "none";
        for (let h = 4; h <= 8; h++) {
            if (h === 7) continue;
            document.getElementById(`question-${h}`).style.display = "none";
            document.getElementById(`answer-${h}`).selectedIndex = 0;
        }
    } else if ((currentSelect2.value === "DiplomaCS" || 
    currentSelect2.value ==="DiplomaIS" || 
    currentSelect2.value ==="DiplomaIT" || 
    currentSelect2.value ==="DiplomaSE") && currentSelect3.value === "UEC") {
        document.getElementById(`question-8`).style.display = "block";
        submitButton.style.display = "none";
        for (let l = 4; l <= 7; l++) {
            document.getElementById(`question-${l}`).style.display = "none";
            document.getElementById(`answer-${l}`).selectedIndex = 0;
        }
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

// BACHELOR SECTION
// Select Bachelor program
currentSelect9.addEventListener('change', () => {
    // 9 to 10
    if (currentSelect9.value === "BachelorS-MM") {
        document.getElementById(`question-10`).style.display = "block";
        submitButton.style.display = "none";
        currentSelect10.selectedIndex = 0;
        for (let i = 11; i <= 28; i++) {
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    } else if (
        // 9 to 14
        currentSelect9.value === "BachelorCS-IST" || 
        currentSelect9.value === "BachelorCS-DS" || 
        currentSelect9.value === "BachelorSE") {
            document.getElementById(`question-14`).style.display = "block";
            submitButton.style.display = "none";
            currentSelect14.selectedIndex = 0;
            for (let i = 10; i <= 28; i++) {
                if (i === 14) continue;
                document.getElementById(`question-${i}`).style.display = "none";
                document.getElementById(`answer-${i}`).selectedIndex = 0;
            }
        } else if (
        currentSelect9.value === "BachelorIS-EIS" || 
        currentSelect9.value === "BachelorIT-IS" || 
        currentSelect9.value === "BachelorIT-IT" ||
        currentSelect9.value === "BachelorIT-SSD") {
            document.getElementById(`question-24`).style.display = "block";
            submitButton.style.display = "none";
            currentSelect14.selectedIndex = 0;
            for (let i = 10; i <= 28; i++) {
                if (i === 24) continue;
                document.getElementById(`question-${i}`).style.display = "none";
                document.getElementById(`answer-${i}`).selectedIndex = 0;
            }
        }
})

// Select highest level of study (BachelorS-MM)
currentSelect10.addEventListener('change', () => {
    if (currentSelect10.value === "None" || 
        currentSelect10.value === "OtherIHL" || 
        currentSelect10.value === "TARUMT") {
        submitButton.style.display = "block";
        for (let a = 11; a <= 20; a++) {
            document.getElementById(`question-${a}`).style.display = "none";
            document.getElementById(`answer-${a}`).selectedIndex = 0;
        }
    } else if (currentSelect9.value === "BachelorS-MM" && currentSelect10.value === "STPM") {
        document.getElementById(`question-11`).style.display = "block";
        submitButton.style.display = "none";
        for (let a = 11; a <= 13; a++) {
            if (a === 11) continue;
            document.getElementById(`question-${a}`).style.display = "none";
            document.getElementById(`answer-${a}`).selectedIndex = 0;
        }
    } else if (currentSelect9.value === "BachelorS-MM" && currentSelect10.value === "A Level") {
        document.getElementById(`question-12`).style.display = "block";
        submitButton.style.display = "none";
        for (let a = 11; a <= 13; a++) {
            if (a === 12) continue;
            document.getElementById(`question-${a}`).style.display = "none";
            document.getElementById(`answer-${a}`).selectedIndex = 0;
        }
    } else if (currentSelect9.value === "BachelorS-MM" && currentSelect10.value === "O Level") {
        document.getElementById(`question-13`).style.display = "block";
        submitButton.style.display = "none";
        for (let a = 11; a <= 13; a++) {
            if (a === 13) continue;
            document.getElementById(`question-${a}`).style.display = "none";
            document.getElementById(`answer-${a}`).selectedIndex = 0;
        }
    }
})

currentSelect11.addEventListener('change', () => {
    if (currentSelect11.value === 'Yes' || currentSelect11.value === 'No') {
        submitButton.style.display = "block";
    }
});
currentSelect12.addEventListener('change', () => {
    if (currentSelect12.value === 'Yes' || currentSelect12.value === 'No') {
        submitButton.style.display = "block";
    }
});
currentSelect13.addEventListener('change', () => {
    if (currentSelect13.value === 'Yes' || currentSelect13.value === 'No') {
        submitButton.style.display = "block";
    }
});

// Select highest level of study (BachelorCS-IST, BachelorCS-DS, BachelorSE)
currentSelect14.addEventListener('change', () => {
    if (currentSelect14.value === "None" || currentSelect14.value ==="TARUMT") {
        submitButton.style.display = "block";
        for (let i = 15; i <= 23; i++) {
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    } else if ((currentSelect9.value === "BachelorCS-IST" ||
    currentSelect9.value === "BachelorCS-DS" ||
    currentSelect9.value === "BachelorSE") && 
    currentSelect14.value === "STPM") {
        document.getElementById(`question-15`).style.display = "block";
        submitButton.style.display = "none";
        for (let i = 15; i <= 23; i++) {
            if (i === 15) continue;
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    } else if ((currentSelect9.value === "BachelorCS-IST" ||
    currentSelect9.value === "BachelorCS-DS" ||
    currentSelect9.value === "BachelorSE") && 
    currentSelect14.value === "A Level") {
        document.getElementById(`question-18`).style.display = "block";
        submitButton.style.display = "none";
        for (let i = 15; i <= 23; i++) {
            if (i === 18) continue;
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    } else if ((currentSelect9.value === "BachelorCS-IST" ||
    currentSelect9.value === "BachelorCS-DS" ||
    currentSelect9.value === "BachelorSE") && 
    currentSelect14.value === "UEC") {
        document.getElementById(`question-21`).style.display = "block";
        submitButton.style.display = "none";
        for (let i = 15; i <= 23; i++) {
            if (i === 21) continue;
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    } else if ((currentSelect9.value === "BachelorCS-IST" ||
    currentSelect9.value === "BachelorCS-DS" ||
    currentSelect9.value === "BachelorSE") && 
    currentSelect14.value === "OtherIHL") {
        document.getElementById(`question-23`).style.display = "block";
        submitButton.style.display = "none";
        for (let i = 15; i <= 23; i++) {
            if (i === 23) continue;
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    }
})

// Display BachelorCS-IST/BachelorCS-DS/BachelorSE - STPM (Q1 - Q3)
currentSelect15.addEventListener('change', () => {
    if (currentSelect15.value === "Yes" || currentSelect15.value === "No") {
        document.getElementById(`question-16`).style.display = "block";
        document.getElementById(`answer-16`).selectedIndex = 0;
        document.getElementById(`question-17`).style.display = "none";
        document.getElementById(`answer-17`).selectedIndex = 0;
        submitButton.style.display = "none";
    }
})
currentSelect16.addEventListener('change', () => {
    if (currentSelect16.value === "Yes" || currentSelect16.value === "No") {
        document.getElementById(`question-17`).style.display = "block";
        document.getElementById(`answer-17`).selectedIndex = 0;
        submitButton.style.display = "none";
    }
})
currentSelect17.addEventListener('change', () => {
    if (currentSelect17.value === "Yes" || currentSelect17.value === "No") {
        submitButton.style.display = "block";
    }
})

// Display BachelorCS-IST/BachelorCS-DS/BachelorSE - A Level (Q1 - Q3)
currentSelect18.addEventListener('change', () => {
    if (currentSelect18.value === "Yes" || currentSelect18.value === "No") {
        document.getElementById(`question-19`).style.display = "block";
        document.getElementById(`answer-19`).selectedIndex = 0;
        document.getElementById(`question-20`).style.display = "none";
        document.getElementById(`answer-20`).selectedIndex = 0;
        submitButton.style.display = "none";
    }
})
currentSelect19.addEventListener('change', () => {
    if (currentSelect19.value === "Yes" || currentSelect19.value === "No") {
        document.getElementById(`question-20`).style.display = "block";
        document.getElementById(`answer-20`).selectedIndex = 0;
        submitButton.style.display = "none";
    }
})
currentSelect20.addEventListener('change', () => {
    if (currentSelect20.value === "Yes" || currentSelect20.value === "No") {
        submitButton.style.display = "block";
    }
})

// Display BachelorCS-IST/BachelorCS-DS/BachelorSE - UEC (Q1 - Q2)
currentSelect21.addEventListener('change', () => {
    if (currentSelect21.value == "Yes" || currentSelect21.value == "No") {
        document.getElementById(`question-22`).style.display = "block";
        document.getElementById(`answer-22`).selectedIndex = 0;
        submitButton.style.display = "none";
    }
})
currentSelect22.addEventListener('change', () => {
    if (currentSelect22.value === "Yes" || currentSelect22.value === "No") {
        submitButton.style.display = "block";
    }
})

// Display BachelorCS-IST/BachelorCS-DS/BachelorSE - OtherIHL
currentSelect23.addEventListener('change', () => {
    if (currentSelect23.value === "Yes" || currentSelect23.value === "No") {
        submitButton.style.display = "block";
    }
})

// Select highest level of study (BachelorIS-EIS, BachelorIS-IS, BachelorIT-IT, BachelorIT-SSD)
currentSelect24.addEventListener('change', () => {
    if (currentSelect24.value === "None" || currentSelect24.value === "TARUMT") {
        submitButton.style.display = "block";
        for (let i = 25; i <= 28; i++) {
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    } else if ((currentSelect9.value === "BachelorIS-EIS" || 
    currentSelect9.value === "BachelorIT-IS" ||
    currentSelect9.value === "BachelorIT-IT" ||
    currentSelect9.value === "BachelorIT-SSD") && 
    currentSelect24.value === "STPM") {
        document.getElementById(`question-25`).style.display = "block";
        submitButton.style.display = "none";
        for (let i = 25; i <= 28; i++) {
            if (i === 25) continue;
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    } else if ((currentSelect9.value === "BachelorIS-EIS" || 
    currentSelect9.value === "BachelorIT-IS" ||
    currentSelect9.value === "BachelorIT-IT" ||
    currentSelect9.value === "BachelorIT-SSD") && 
    currentSelect24.value === "A Level") {
        document.getElementById(`question-26`).style.display = "block";
        submitButton.style.display = "none";
        for (let i = 25; i <= 28; i++) {
            if (i === 26) continue;
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    } else if ((currentSelect9.value === "BachelorIS-EIS" || 
    currentSelect9.value === "BachelorIT-IS" ||
    currentSelect9.value === "BachelorIT-IT" ||
    currentSelect9.value === "BachelorIT-SSD") && 
    currentSelect24.value === "UEC") {
        document.getElementById(`question-27`).style.display = "block";
        submitButton.style.display = "none";
        for (let i = 25; i <= 28; i++) {
            if (i === 27) continue;
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    } else if ((currentSelect9.value === "BachelorIS-EIS" || 
    currentSelect9.value === "BachelorIT-IS" ||
    currentSelect9.value === "BachelorIT-IT" ||
    currentSelect9.value === "BachelorIT-SSD") && 
    currentSelect24.value === "OtherIHL") {
        document.getElementById(`question-28`).style.display = "block";
        submitButton.style.display = "none";
        for (let i = 25; i <= 28; i++) {
            if (i === 28) continue;
            document.getElementById(`question-${i}`).style.display = "none";
            document.getElementById(`answer-${i}`).selectedIndex = 0;
        }
    }
})

currentSelect25.addEventListener('change', () => {
    if (currentSelect25.value === 'Yes' || currentSelect25.value === 'No') {
        submitButton.style.display = "block";
    }
})
currentSelect26.addEventListener('change', () => {
    if (currentSelect26.value === 'Yes' || currentSelect26.value === 'No') {
        submitButton.style.display = "block";
    }
})
currentSelect27.addEventListener('change', () => {
    if (currentSelect27.value === 'Yes' || currentSelect27.value === 'No') {
        submitButton.style.display = "block";
    }
})
currentSelect28.addEventListener('change', () => {
    if (currentSelect28.value === 'Yes' || currentSelect28.value === 'No') {
        submitButton.style.display = "block";
    }
})

/*=====================================================================================================================*/

// Submission
function submitForm() {
    document.getElementById(`submitBtn`).style.display = "none";
    document.getElementById(`resetBtn`).style.display = "block";

    // Diploma
    const answer2 = document.getElementById("answer-2").value;
    const answer3 = document.getElementById("answer-3").value;
    const answer4 = document.getElementById("answer-4").value;
    const answer5 = document.getElementById("answer-5").value;
    const answer6 = document.getElementById("answer-6").value;
    const answer7 = document.getElementById("answer-7").value;
    const answer8 = document.getElementById("answer-8").value;
    // Bachelor
    const answer9 = document.getElementById("answer-9").value;
    const answer10 = document.getElementById("answer-10").value;
    const answer11 = document.getElementById("answer-11").value;
    const answer12 = document.getElementById("answer-12").value;
    const answer13 = document.getElementById("answer-13").value;
    const answer14 = document.getElementById("answer-14").value;
    const answer15 = document.getElementById("answer-15").value;
    const answer16 = document.getElementById("answer-16").value;
    const answer17 = document.getElementById("answer-17").value;
    const answer18 = document.getElementById("answer-18").value;
    const answer19 = document.getElementById("answer-19").value;
    const answer20 = document.getElementById("answer-20").value;
    const answer21 = document.getElementById("answer-21").value;
    const answer22 = document.getElementById("answer-22").value;
    const answer23 = document.getElementById("answer-23").value;
    const answer24 = document.getElementById("answer-24").value;
    const answer25 = document.getElementById("answer-25").value;
    const answer26 = document.getElementById("answer-26").value;
    const answer27 = document.getElementById("answer-27").value;
    const answer28 = document.getElementById("answer-28").value;

    // CHECKING
    // Diploma
    if (answer2 === "DiplomaCS") {
        if (answer3 === "SPM" || answer3 === "O Level" || answer3 === "UEC") {
            if (answer4 === "Yes" || answer5 === "Yes" || answer8 === "Yes") {
                success()
            }
            else { 
                failed() 
            }
        } else {
            failed()
        }
    } else if (answer2 === "DiplomaIS" || answer2 ===  "DiplomaIT" || answer2 ===  "DiplomaSE") {
        if (answer3 === "SPM" || answer3 === "O Level" || answer3 === "UEC") {
            if (answer6 === "Yes" || answer7 === "Yes" || answer8 === "Yes") {
                success()
            } else {
                failed()
            }
        } else {
            failed()
        }
    }
    // Bachelor
    else if (answer9 === "BachelorS-MM") {
        if (answer10 === "STPM" || answer10 === "A Level" || answer10 ==="UEC") {
            if (answer11 === "Yes" || answer12 === "Yes" || answer13 === "Yes") {
                success()
            } else {
                failed()
            }
        } else if (answer10 === "OtherIHL" || answer10 === "TARUMT") {
            success()
        } else {
            failed()
        }
    } else if (answer9 === "BachelorCS-IST" || answer9 === "BachelorCS-DS" || answer9 === "BachelorSE") {
        if (answer14 === "STPM") {
            if (answer15 === "Yes" || answer16 === "Yes" || answer17 === "Yes") {
                success()
            } else {
                failed()
            }
        } else if (answer14 === "A Level") {
            if (answer18 === "Yes" || answer19 === "Yes" || answer20 === "Yes") {
                success()
            } else {
                failed()
            }
        } else if (answer14 === "UEC") {
            if (answer21 === "Yes" || answer22 === "Yes") {
                success()
            } else {
                failed()
            }
        } else if (answer14 === "OtherIHL") {
            if (answer23 === "Yes") {
                success()
            } else {
                failed()
            }
        } else if (answer14 === "TARUMT") {
            success()
        } else {
            failed()
        }
    } else if (answer9 === "BachelorIS-EIS" || answer9 === "BachelorIT-IS" || 
    answer9 === "BachelorIT-IT" || answer9 === "BachelorIT-SSD") {
        if (answer24 === "STPM" || answer24 === "A Level" || answer24 === "UEC" || answer24 === "OtherIHL") {
            if (answer25 === "Yes" || answer26 === "Yes" || answer27 === "Yes" || answer28 === "Yes") {
                success()
            } else {
                failed()
            }
        } else if (answer24 === "TARUMT") {
            success()
        } else {
            failed()
        }
    }

    document.getElementById("questionLabel").style.display = "none";
    document.getElementById("result").style.display = "block";
    for (let a = 1; a <= 30; a++) {
        document.getElementById(`question-${a}`).style.display = "none";
    }
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

// Reset form
function resetForm() {
    document.getElementById("qualification-form").reset();
    document.getElementById("questionLabel").style.display = "block";
    document.getElementById("result").style.display = "none";
    document.getElementById(`resetBtn`).style.display = "none";

    // display first question
    document.getElementById("question-1").style.display = "block";
}