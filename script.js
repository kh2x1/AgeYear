let num = document.getElementById("num"); // input field

let res = document.getElementById("res"); //btn

let del = document.getElementById("del"); //btn

let hDate = document.getElementById("hDate"); //h1

let mDate = document.getElementById("mDate"); //h1

const currentMDate = new Date();
let mYear = currentMDate.getFullYear();

const currentHDate = new Date();
const hijriYearFormatter = new Intl.DateTimeFormat('en-US', {
  calendar: 'islamic-umalqura',
  year: 'numeric'
});

let hYear = hijriYearFormatter.format(currentHDate).replace(' AH', ''); // Just the year number without "AH"




res.addEventListener("click" , () => {
    let age = num.value;
    let mDate = mYear - age;
    let hDate = (hYear) - age;
    
    this.mDate.innerHTML = `${mDate}م`;
    this.hDate.innerHTML = `${hDate}ھ`;
})


del.addEventListener("click" , () => {
    num.value = null;
    this.mDate.innerHTML = null;
    this.hDate.innerHTML = null;
})