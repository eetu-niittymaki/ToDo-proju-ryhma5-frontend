import React, { useState } from "react";
import Calendar from "react-calendar";
import "../../App.sass";

const TodoCalendar = (props) => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => setDate(date);

  /* const reverse = () => {
    let split = date2.split("");

    let rev = split.reverse();

    let join = rev.join("");
    console.log(join);
  }; */

  return (
    <div className="cal">
      <Calendar
        showDoubleView="true"
        className="calendar"
        onChange={onChange}
        value={date}
        tileClassName="calTile"
        //tileContent={}
      />
      {console.log(date.toLocaleDateString())}
    </div>
  );
};

export default TodoCalendar;
