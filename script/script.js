const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minute");
const secondeEl = document.getElementById("seconde");
const ampmEl = document.getElementById("ampm");
const backMin = document.getElementById('minutediv');

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    // if (h > 12) {
    //     h = h - 12;
    //     ampm = "pm"
    // }
    ampm = h > 12 ? "PM" : "AM";
    h = h > 12 ? h = h - 12 : h;
    h = h < 10 ? "0" + h : h;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondeEl.innerText = s;
    ampmEl.innerText = ampm;
    setTimeout(
        () => {
            updateClock()
        }
        , 1000)

}

function colorChanger() {
    let s = new Date().getSeconds();
    var arra = []
    arra.push(61 - s);
    var sec = arra[0]
    // console.log(sec)

    backMin.style.animationDuration = 61 - sec + 's';

    setTimeout(
        () => {
            colorChanger()
        }
        , 10)


}





colorChanger()
updateClock()