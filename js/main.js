const getS = e => document.querySelector(e);
const moveToForm = () => getS("#scroll_here").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

const counter = function () {
    let timeNow = new Date(),
        dateAfter,
        exactTomDate,
        ssBox = getS(".seconds"),
        mmBox = getS(".minutes"),
        hhBox = getS(".hours");

    if (timeNow.getHours() <= 3) {
        dateAfter = new Date(timeNow.getTime()),
            exactTomDate = new Date(dateAfter.getFullYear(), dateAfter.getMonth(), dateAfter.getDate(), 3);
    }

    else {
        dateAfter = new Date(timeNow.getTime() + 86400000),
            exactTomDate = new Date(dateAfter.getFullYear(), dateAfter.getMonth(), dateAfter.getDate(), 3);
    }

    let timeDiff = exactTomDate.getTime() - timeNow.getTime(),
        hh = Math.floor(timeDiff / 3600000),
        mm = Math.floor((timeDiff - (hh * (60 * 60 * 1000))) / 60000),
        ss = Math.floor((timeDiff - ((hh * (60 * 60 * 1000)) + (mm * (60 * 1000)))) / 1000);

    let count = setInterval(function () {
        ss--;
        if (ss < 0) {
            mm--;
            ss = 59;
        }
        if (mm < 0) {
            hh--;
            mm = 59;
        }
        if (hh === 0 && mm === 0 && ss === 0) clearInterval(count);
        ss < 10 ? ssBox.innerHTML = "0" + ss : ssBox.innerHTML = ss;
        mm < 10 ? mmBox.innerHTML = "0" + mm : mmBox.innerHTML = mm;
        hh < 10 ? hhBox.innerHTML = "0" + hh : hhBox.innerHTML = hh;
    }, 1000)
}

counter();

getS("#form_id").oninput = (e) => {
    console.log(e.target);
    if (e.target.id === "customer_name") {
        if (!getS('#customer_name').value.length >= 3) {
            getS('#customer_name').style.outline = '3px solid red';
        }
        else if (getS('#customer_name').value.length >= 3) {
            getS('#customer_name').style.outline = '3px solid green';
        }
    }

    if (e.target.id === "customer_phone") {
        if (!/^\d+$/gmi.test(getS('#customer_phone').value)) {
            getS('#customer_phone').style.outline = '3px solid red';
        }
        else if (/^\d+$/gmi.test(getS('#customer_phone').value)) {
            getS('#customer_phone').style.outline = '3px solid green'
        }
    }

    if (/^\d+$/gmi.test(getS('#customer_phone').value) && getS('#customer_name').value.length >= 3) {
        getS('#submit_btn').disabled = false;
    }
    else {
        getS('#submit_btn').disabled = true;
    }
}

function toUp() {
    console.log('up');
}