// cc32d9 | EOS Amsterdam, [03.12.2022 01: 32]
// 1. Press button A -> light on.Press A again -> light ofg

// cc32d9 | EOS Amsterdam, [03.12.2022 01: 32]
// 2. Double chick A -> light on or off

// cc32d9 | EOS Amsterdam, [03.12.2022 01: 33]
// 3. If the period between clicks is longer than 2 seconds, ignore

// cc32d9 | EOS Amsterdam, [03.12.2022 01: 36]
// 4. React on 5 clicks in a row, with period within 1s



let clickCounter = 0;
let lastClick = 0;
let time0 = 0;
let buttonLight = document.querySelector('.light');
let boxLight = document.querySelector('.out');

buttonLight.addEventListener('click', (event) => {
    time0 = event.timeStamp;
    if ((time0 - lastClick) < 1000) {
        lightOnnOf(++clickCounter);
        (clickCounter >= 5) ? alert('Congratulations 5 clicks in a rowfor 1 sec') : null;
    }
    else {
        clickCounter = 0;
        lastClick = time0;
        lightOnnOf(++clickCounter);
    }
    if (lastClick == 0) {
        lastClick = time0;
    }
    console.log(time0, lastClick);
    // function lightOnnOf(number) {
    //     return (number % 2) ? boxLight.style.backgroundColor = 'yellow' : boxLight.style.backgroundColor = '#ffffff';
    // }
    function lightOnnOf(number) {
        if (number % 2) {
            boxLight.style.backgroundColor = 'yellow';
            boxLight.innerHTML = number;
        }
        else {
            boxLight.style.backgroundColor = '#ffffff';
            boxLight.innerHTML = number;
        }
    }
    console.log(clickCounter);
})