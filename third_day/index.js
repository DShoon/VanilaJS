const dateContainer = document.querySelector(".js-date");
const dateTitle = dateContainer.querySelector("h2");

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const xmasTime = xmasDay.getTime();

  const date = new Date();
  const time = date.getTime();

  const result = xmasTime - time;

  function decomposeTime(ms) {
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor(daysms / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor(hoursms / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor(minutesms / 1000);
  }

  decomposeTime(result);
  dateTitle.innerText = `${days < 10 ? `0${days}` : days}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${sec < 10 ? `0${sec}` : sec}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
