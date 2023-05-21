import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    daysEl: document.querySelector('[data-days'),
    hoursEl: document.querySelector('[data-hours'),
    minutesEl: document.querySelector('[data-minutes'),
    secondsEl: document.querySelector('[data-seconds'),
    startBtn: document.querySelector('button[data-start'),
    input: document.querySelector('#datetime-picker'),
};

let timerId = null;
let resetDate = null;
let ms = 0;

class downTimer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.DaysSpan.document.querySelector(`.value`);

    }
    
    update() {
        setInterval(() => {
            const currentTime = Date.now();
            const delta = this.targetDate - currentTimeж
            const { days, hours, minutes, seconds } = this.convertMs(delta);
        }, 1000);
    };
};

refs.startBtn.addEventListener('click', onBtnStart);
refs.startBtn.setAttribute('disabled', true);

function onBtnStart() {
  timerId = setInterval(startTimer, 1000);
};

function flatpickr(selector, options) {
    
};

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
};

flatpickr(input, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};