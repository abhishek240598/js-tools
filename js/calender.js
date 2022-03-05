var date = new Date();

var renderCalendar = () =>{ 
    
 date.setDate(1);
    

var monthDays = document.querySelector(".days");
 
    // var stores last day of current month
var lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();

  // var stores last day of previous month
var prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();


var firstDayIndex = date.getDay();

var lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

var nextDays = 7-lastDayIndex-1;

var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
 // changing the contents of h1 tag dynamically
document.querySelector(".date h1 ").innerHTML = months[date.getMonth()];
// changing the contents of paragraph tag dynamically
document.querySelector(".date p ").innerHTML = new Date().toDateString();
    
let days = ""; //empty string

    //displaying days of previous month 
for( let x=firstDayIndex; x>0; x--){
    days += `<div class="prev-date">${prevLastDay-x+1}</div>`;
}

    // displaying current month days and highlighting current date
for( let i=1; i<=lastDay; i++){
    if( i === new Date().getDate() && date.getMonth() === new Date().getMonth())
    {
         days += `<div class="today">${i}</div>`;   
    } else{
    days += `<div>${i}</div>`;
    }
}

    //displaying starting of next month days after current month
for( let j=1; j<=nextDays; j++){
    days += `<div class="next-date">${j}</div>`;
     monthDays.innerHTML = days;
}
};


document.querySelector(".prev").addEventListener('click',() => {
    date.setMonth( date.getMonth() - 1);
    renderCalendar();
});

document.querySelector(".next").addEventListener('click',() => {
    date.setMonth( date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();