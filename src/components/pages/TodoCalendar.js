import React from "react";
import Calendar from "react-calendar";
import "../../App.sass";

class TodoCalendar extends React.Component {
  state = {
    value: new Date(),
  };
  onChange = (value) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <div className="cal">
        <header>
          <h1>react-calendar sample page</h1>
        </header>
        <Calendar
          className="calendar"
          onchange={this.onChange}
          value={value}
          tileClassName="calTile"
        />
      </div>
    );
  }
}

export default TodoCalendar;
