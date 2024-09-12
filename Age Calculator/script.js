let userInput= document.getElementById("date")
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
function calculateAge() {
  //get the birthdate value
  let birthDate = new Date(userInput.value);
  //get the current date
  let today = new Date();
  //calculateTheAge
  let y1 = birthDate.getFullYear();
  let y2 = today.getFullYear();
  let yearDiff = y2 - y1;
  let m1 = birthDate.getMonth();
  let m2 = today.getMonth();
  let monthDiff;
  let d1 = birthDate.getDate();
  let d2 = today.getDate();
  let dayDiff;
  //adjust age if birthdate has not occured yet this year
  if (m2 >= m1) {
    monthDiff = m2-m1;
  }
  else{
    yearDiff--;
    monthDiff = 12 + m2 - m1;
  }
  if(d2 >= d1) {
    dayDiff = d2-d1;
  }
  else{
    monthDiff--;
    dayDiff = getDaysInMonth(y1,m1) + d2 - d1;
  }
  if(monthDiff<0){
    monthDiff = 11;
    yearDiff--;
  }
  //display calculated age
  result.innerHTML = `Your are <span>${yearDiff}</span> years, <span>${monthDiff}</span> months and <span>${dayDiff}</span> days old`;
}
function getDaysInMonth(year, month) {
  return new Date(year,month,0).getDate();
}