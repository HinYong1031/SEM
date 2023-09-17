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

  
  console.log('Study level selected: ' + level.value);
  console.log('Program selected: ' + selectedProgram);
}