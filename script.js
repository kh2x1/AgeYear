let num = document.getElementById("num"); // input field

let res = document.getElementById("res"); //btn

let del = document.getElementById("del"); //btn

let hDate = document.getElementById("hDate"); //h1

let mDate = document.getElementById("mDate"); //h1

let mode = document.getElementById("mode");

mode.addEventListener("click" , () => {
  document.body.classList.toggle("dark");
})

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

    this.hDate.classList.add("slide1");
    this.mDate.classList.add("slide2");

    this.hDate.classList.remove("remove1");
    this.mDate.classList.remove("remove2");
    
})


del.addEventListener("click" , () => {
    num.value = null;
    this.mDate.innerHTML = null;
    this.hDate.innerHTML = null;

    this.hDate.classList.add("remove1");
    this.mDate.classList.add("remove2");

    this.hDate.classList.remove("slide1");
    this.mDate.classList.remove("slide2");
})


