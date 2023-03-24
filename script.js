
function calculate() {

    //alert("darsh")
    const english = document.getElementById("English").value
    const maths = document.getElementById("Maths").value
    const physics = document.getElementById("Physics").value
    const chemistry = document.getElementById("Chemistry").value
    const computer = document.getElementById("Computer").value
    //console.log(english)
    if (isNaN(english) || isNaN(maths) || isNaN(physics) || isNaN(chemistry) || isNaN(computer) ||
        english < 0 || english > 100 || maths < 0 || maths > 100 || physics < 0 || physics > 100 || chemistry < 0 || chemistry > 100 || computer < 0 || computer > 100) {
        alert("please enter marks in range of 100")
        return;
    }

}
let totalScore = english + maths + physics + chemistry + computer;
let averageScore= totalscore/5
let totalPossiblePoint=500;
let grade= (totalScore/totalPossiblePoint)*100