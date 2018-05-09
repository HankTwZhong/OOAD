import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.momentLocalizer(moment)
class MyCalendar extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            myEventsList :props.myEventsList
        }
        this.deleteEvent = this.deleteEvent.bind(this);
    }
    deleteEvent(event){
      axios.delete('http://localhost:1321/event',{data:{title:event.title, _id:event._id}}).then((result)=>{
      axios.get('http://localhost:1321/event').then((result)=>{
        this.props.setEventList(result.data)
      })
     
      })
    }
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
    render() {
      return (
        <BigCalendar
          popup events={this.state.myEventsList}
          defaultDate={new Date()}
          defaultView="month"
          views={['month', 'agenda']}
          onSelectEvent={event => this.deleteEvent(event)}
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
  export default MyCalendar;