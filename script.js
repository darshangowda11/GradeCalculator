
const engInput = document.getElementById('eng');
const matInput = document.getElementById('mat');
const phyInput = document.getElementById('phy');
const chmInput = document.getElementById('chm');
const comInput = document.getElementById('com');
const calcButton = document.querySelector('.btn');


const totalOutput = document.getElementById('total');
const aveOutput = document.getElementById('ave');
const gradeOutput = document.getElementById('grade');


function calculateGrade() {
  const engValue = parseFloat(engInput.value);
  const matValue = parseFloat(matInput.value);
  const phyValue = parseFloat(phyInput.value);
  const chmValue = parseFloat(chmInput.value);
  const comValue = parseFloat(comInput.value);

 
  const total = engValue + matValue + phyValue + chmValue + comValue;
  const ave = total / 5;

  let grade;
  if (ave >= 90) {
    grade = 'A+';
  } else if (ave >= 80) {
    grade = 'A';
  } else if (ave >= 70) {
    grade = 'B';
  } else if (ave >= 60) {
    grade = 'C';
  } else if (ave >= 50) {
    grade = 'D';
  } else {
    grade = 'Failed';
  }


  totalOutput.textContent = total.toFixed(2);
  aveOutput.textContent = ave.toFixed(2);
  gradeOutput.textContent = grade;
}


calcButton.addEventListener('click', calculateGrade);
