const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const ui1 = document.querySelector('.timer');
const ui2 = document.querySelector('.countdown-over');

const finalDate = new Date("01 January 2024 12:00 AM");


let clock = () => {

    const currentDate = new Date(Date.now());
    let diffInMiliSec = finalDate - currentDate;

    if(!ui1.classList.contains('active'))
        ui1.classList.add('active');
    if(ui2.classList.contains('active'))
        ui2.classList.remove('active');

    if(diffInMiliSec < 0) {
        if(ui1.classList.contains('active'))
            ui1.classList.remove('active');
        if(!ui2.classList.contains('active'))
            ui2.classList.add('active');
        return;
    }

    let diffInSec = diffInMiliSec/1000;

    let tempDays = diffInSec/(60*60*24);
    let daysRemaining = Math.floor(tempDays);

    let tempHours = (tempDays - daysRemaining)*24;
    let hoursRemaining = Math.floor(tempHours);

    let tempMinutes = (tempHours - hoursRemaining)*60;
    let minutesRemaining = Math.floor(tempMinutes);

    let tempSeconds = (tempMinutes - minutesRemaining)*60;
    let secondsRemaining = Math.floor(tempSeconds);

    days.value = daysRemaining;
    hours.value = hoursRemaining;
    minutes.value = minutesRemaining;
    seconds.value = secondsRemaining;

}

let eid = setInterval(()=>{
    console.log('running clock')
    clock();
},1000);