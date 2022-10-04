import { timeAndDate } from './variables.js';
import { DateTime } from './luxon.js';

const dateAndTimeNow = () => {
  setInterval(() => {
    const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
    timeAndDate.innerHTML = date;
  }, 0);
};

export default dateAndTimeNow;