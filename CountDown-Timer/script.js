const newYears ="1 Jan 2026";
const monthC = document.getElementById('months')
const dayC = document.getElementById('days')
const hourC = document.getElementById('hours')
const minC = document.getElementById('minutes')
const secC = document.getElementById('seconds')
function countDown(){
    const newYearDate = new Date(newYears);
    const currenDate = new Date()
    const seconds = (newYearDate-currenDate)/1000;
    const months = Math.floor(seconds/(30 * 24 * 3600))
    const days = Math.floor(seconds/3600/24  );
    const hours = Math.floor(seconds/3600 )%24 ;
    const mins = Math.floor(seconds/60)% 60;
    const secs = Math.floor(seconds)%60;
    monthC.innerText = months;
    dayC.innerText= days;
    hourC.innerText= hours;
    minC.innerText=mins;
    secC.innerText = secs

    
    
}
setInterval(countDown,1000)