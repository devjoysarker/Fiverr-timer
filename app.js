

const count   = document.getElementById('count');
const counter = document.querySelector('.counter');

let stop;

count.addEventListener('submit', function(e) {
e.preventDefault()

let stop = setInterval(() =>{
    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;


    // let date = this.querySelector('input[type="date"]').value;
    // let time = this.querySelector('input[type="time"]').value;


    let statr_time = new Date();
    let end_time   = new Date(date +' '+ time);

    let time_differ = Math.floor(Math.abs(end_time.getTime() - statr_time.getTime()));

    let total_sec = Math.floor(time_differ / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hor = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hor / 24);

    let hours = total_hor - (total_day * 24);
    let min   = total_min - (total_day *24 *60) - (hours *60);
    let sec   = total_sec - (total_day *24 *60 *60) - (hours *60 *60) - (min * 60);

    counter.innerHTML = ` ${ total_day }Day: ${ hours }Hours: ${ min > 9 ? min : '0' + min }Min: ${ sec > 9 ? sec : '0'+ sec }`;

    if (total_day == 0 && hours == 0 && min == 0 && sec == 0) {
        clearInterval(stop);
    }

}, 1000);




});