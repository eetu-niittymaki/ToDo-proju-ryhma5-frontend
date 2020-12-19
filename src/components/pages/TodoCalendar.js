import React, { useState } from "react";
import Calendar from "react-calendar";

import "../../App.sass";

const TodoCalendar = (props) => {
  const [date, setDate] = useState(new Date());

  const todoDates = [];
  let convDate = "";

  for (let i = 0; i < props.todos.length; i++) {
    convDate = props.todos[i].due_date.split("-");
    convDate = convDate[1] + "/" + convDate[2] + "/" + convDate[0];
    todoDates.push(convDate);
  }

  const onChange = (date) => setDate(date);

  const tileContentHandler = ({ activeStartDate, date, view }) => {
    const tasks = [];
    for (let i = 0; i < todoDates.length; i++) {
      if (date.toLocaleDateString() === todoDates[i]) {
        tasks.push(props.todos[i].task);
      }
    }
    return <h5>{tasks}</h5>;
  };

  return (
    <div className="cal">
      <Calendar
        className="calendar"
        onChange={onChange}
        value={date}
        tileClassName="calTile"
        tileContent={tileContentHandler}
      />
      {console.log(date.toLocaleDateString())}
    </div>
  );
};

export default TodoCalendar;