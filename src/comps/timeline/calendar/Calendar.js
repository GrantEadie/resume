import "./calendar.css";

const years = [2022, 2021, 2020, 2019, 2018, 2017];

const Calendar = () => {
  return (
    <div id="calendar">
      {years.map((year, i) => (
        <div className="calendar-item" key={i}>
          <div className="calendar-year">
            <div className="calendar-year-text">{year}</div>
            <div className="calendar-large-dot"></div>
          </div>
          <div className="calendar-small-dot"></div>
          <div className="calendar-small-dot"></div>
          <div className="calendar-small-dot"></div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
