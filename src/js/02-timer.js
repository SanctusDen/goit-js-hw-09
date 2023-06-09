import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    days: document.querySelector('[data-days'),
    hours: document.querySelector('[data-hours'),
    minutes: document.querySelector('[data-minutes'),
    seconds: document.querySelector('[data-seconds'),
    startBtn: document.querySelector('button[data-start'),
    input: document.querySelector('#datetime-picker'),
};

let timerId = null;
let resetDate = null;
let ms = 0;

refs.startBtn.addEventListener('click',onStartBtn);
refs.startBtn.setAttribute('disabled', true);

function onStartBtn() {
  refs.input.setAttribute('disabled', true);
  refs.startBtn.setAttribute('disabled', true);
  timerId = setInterval(() => {
    startTimer();
    if (ms <= 1000) {
      clearInterval(timerId);
    }
  },1000);
};

function startTimer() {
  ms -= 1000;
  resetDate = convertMs(ms);
  updateDate(resetDate);
};

function updateDate(resetDate) {
  refs.days.textContent = resetDate.days;
  refs.hours.textContent = resetDate.hours;
  refs.minutes.textContent = resetDate.minutes;
  refs.seconds.textContent = resetDate.seconds;
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      onCurrentDate(selectedDates[0]);
  }
};

const datePicker = flatpickr(refs.input, options);

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};

function onCurrentDate(selectedDates) {
  const currentDate = Date.now();
  ms = selectedDates.getTime() - currentDate;

  if (selectedDates < currentDate) {
    return Notiflix.Notify.failure("Please choose a date in the future");
  }
  refs.startBtn.removeAttribute('disabled');
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};