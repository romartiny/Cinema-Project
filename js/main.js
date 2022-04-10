function refreshTime() {
    let today = new Date();

    switch(new Date().getMonth()) {
        case 1:
            cmonth = 'January';
            break;
        case 2:
            cmonth = 'February';
            break;
        case 3:
            cmonth = "March";
            break;
        case 4:
            cmonth = 'April';
            break;
        case 5:
            cmonth = 'May';
            break;
        case 6:
            cmonth = 'June';
            break;
        case 7:
            cmonth = 'July';
            break;
        case 8:
            cmonth = 'August';
            break;
        case 9:
            cmonth = 'September';
            break;
        case 10:
            cmonth = 'October';
            break;
        case 11:
            cmonth = 'November';
            break;
        case 12:
            cmonth = 'December';
            break;
        default:
            cmonth = "You have 13 month year?";
    }

    let minutes = today.getMinutes();
    if (minutes < 10) {
        cmin = '0' + '' + minutes;
    } else {
        cmin = minutes;
    }

    document.getElementById('time').innerHTML = today.getHours() + ":" +  cmin;
    document.getElementById('date').innerHTML = today.getDate() + ' ' + cmonth;

}

setInterval(refreshTime, 1000);