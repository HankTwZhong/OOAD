import React, { Component } from 'react';
import './App.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
// import { , Modal, Form, FormControl, FormGroup, Col, ControlLabel} from 'react-bootstrap';
import AddEvent from './AddEvent'
import myEventsList from './myEventsList'

BigCalendar.momentLocalizer(moment)

class MyCalendar extends React.Component {
  Event({ event }) {
    return (
      <span>
        <strong>{event.title}</strong>
        {event.desc && ':  ' + event.desc}
      </span>
    )
  }
  EventAgenda({ event }) {
    return (
      <span>
        <em style={{ color: 'magenta' }}>{event.title}</em>
        <p>{event.desc}</p>
      </span>
    )
  }
  customDayPropGetter = date => {
    if (date.getDate() === 7 || date.getDate() === 15)
      return {
        className: 'special-day',
        style: {
          border: 'solid 3px ' + (date.getDate() === 7 ? '#faa' : '#afa'),
        },
      }
    else return {}
  }

  customSlotPropGetter = date => {
    if (date.getDate() === 7 || date.getDate() === 15)
      return {
        className: 'special-day',
      }
    else return {}
  }
  render() {
    return (
      <BigCalendar
        events={myEventsList}
        defaultDate={new Date()}
        defaultView="agenda"
        // dayPropGetter={this.customDayPropGetter}
        // slotPropGetter={this.customSlotPropGetter}
        components={{
          event: this.Event,
          agenda: {
            event: this.EventAgenda,
          },
        }}

      />
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Grab Your Time</h1>
          <AddEvent 
          myEventsList={myEventsList}/>
        </header>
        <MyCalendar />
      </div>
    );
  }
}

export default App;
