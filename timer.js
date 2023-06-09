// UTILS
const toDualDigits = value => String(value).length === 1 ? '0' + value : String(value);

// DOM
const days = $('#days');
const hours = $('#hours');
const minutes = $('#minutes');
const seconds = $('#seconds');

// DEADLINE
// JULY - 5th month :)
const deadline = new Date(2023, 6, 24);
const deadlineFullSeconds = Math.floor(deadline.getTime() / 1000);

// TIMER
const timerIntervalId = setInterval(() => {

    const now = new Date();
    const nowFullSeconds = Math.floor(now.getTime() / 1000);

    const rest = deadlineFullSeconds - nowFullSeconds;

    const daysRest = Math.floor(rest / 60 / 60 / 24);
    const hoursRest = Math.floor(rest / 60 / 60) - daysRest * 24;
    const minutesRest = Math.floor(rest / 60) - daysRest * 24 * 60 - hoursRest * 60;
    const secondsRest = rest - daysRest * 24 * 60 * 60 - hoursRest * 60 * 60 - minutesRest * 60;

    days.text(toDualDigits(daysRest));
    hours.text(toDualDigits(hoursRest));
    minutes.text(toDualDigits(minutesRest));
    seconds.text(toDualDigits(secondsRest));

}, 1000);


