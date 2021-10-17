let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");
let calc = document.getElementById("calculate");
let reset = document.getElementById("reset");
let age = document.getElementById("result");
let ageMonths = document.getElementById("resultMonth");
let ageWeeks = document.getElementById("resultWeek");
let ageDays = document.getElementById("resultDay");
let ageHour = document.getElementById("resultHour");
let ageSec = document.getElementById("resultSec");
let current = new Date();

calc.addEventListener('click', function() {
  if( date.value == null || date.value == 0 || date.value.length == 0 || date.value > 31 || date.value <= 0 || month.value == null || month.value == 0 || month.value.length == 0 || month.value > 12 || month.value <= 0 || year.value == null || year.value == 0 || year.value.length == 0 || year.value > current.getFullYear() || year.value <= 0) {

    alert("FIRST ENTER YOUR DATE OF BIRTH");
  }

  else {
    let d = (current.getDate()) - (date.value);
    if (d < 0) {
      totalDate = 30 - (-d);
    }
    else {
      totalDate = d;
    }

    let m;
    if ((current.getMonth() == month.value && current.getDate() >= date.value) || (current.getMonth() > month.value && current.getDate() >= date.value) || (current.getDate() >= date.value) ) {
      m = (current.getMonth() + 1) - (month.value);
    }
    else {
      m = (current.getMonth()) - (month.value);
    }
    if (m < 0) {
      totalMonth = (12 - (-m));
    }
    else {
      totalMonth = m;
    }

    let y = (current.getFullYear()) - (year.value);
    if ((month.value == current.getMonth() && totalDate >= current.getDate() && totalMonth == current.getMonth()) || totalMonth <= current.getMonth() && month.value <= current.getMonth() || month.value == (current.getMonth() + 1) && date.value <= current.getDate()) {
      totalYear = y;
    }
    else {
      totalYear = (y - 1);
    }

    ageDays.innerHTML = ((totalYear * 365) + (totalMonth * 31) + (totalDate) + " days");
    ageHour.innerHTML = ((((totalYear * 365) + (totalMonth * 31) + (totalDate)) * 24) + " hours");
    ageSec.innerHTML = (((((totalYear * 365) + (totalMonth * 31) + (totalDate)) * 24) * 60) + " seconds");

    let a = totalDate / 7;
    let w = (Math.trunc(a));
    if ((totalDate - (w * 7)) < 0) {
      totalDate = 0;
    }
    else {
      totalDate = totalDate - (w * 7);
    }

    age.innerHTML = ((totalYear) + " years " + (totalMonth) + " months " + (w) + " weeks " + (totalDate) + " days");
    ageMonths.innerHTML = (((totalYear * 31) + (totalMonth)) + " months " + (w) + " weeks " + (totalDate) + " days");
    ageWeeks.innerHTML = (((((totalYear * 31) + (totalMonth)) * 7) + (Math.floor(w))) + " weeks " + (totalDate) + " days");

  }
});

reset.addEventListener('click', function(){
  document.getElementById("myForm").reset();
  window.location.reload();
});


