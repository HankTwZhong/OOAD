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
// class AddEvent extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.handleShow = this.handleShow.bind(this);
//     this.handleClose = this.handleClose.bind(this);
//     this.state = {
//       show: false,
//       id: myEventsList[myEventsList.length - 1],
//       eventContent: undefined,
//       startDate: moment(),
//       endDate: moment(),
//       title: 'OOAD',
//       desc: undefined
//     };
//     this.startDateChange = this.startDateChange.bind(this)
//     this.endDateChange = this.endDateChange.bind(this)
//     this.submitEvent = this.submitEvent.bind(this)
//     this.selectedType = this.selectedType.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//   }
//   startDateChange(date) {
//     this.setState({
//       startDate: date
//     });
//   }
//   endDateChange(date) {
//     this.setState({
//       endDate: date
//     })
//   }

//   handleClose() {
//     this.setState({ show: false });
//   }

//   handleShow() {
//     this.setState({ show: true });
//   }
//   submitEvent() {
//     this.handleClose()
//     myEventsList.push({
//       id: myEventsList[myEventsList.length - 1],
//       title: this.state.title,
//       start: this.state.startDate.toDate(),
//       end: this.state.endDate.toDate(),
//       desc: this.state.desc,
//     })
//     console.log(myEventsList)

//   }
//   selectedType(selected) {
//     this.setState({ title: selected })
//     return selected
//   }

//   handleChange(text) {
//     console.log(text)
//     this.setState({
//       desc: text.target.value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <Button className="pull-right" bsStyle="primary" bsSize="xsmall" onClick={this.handleShow}>
//           Add Event
//         </Button>
//         <Modal show={this.state.show} onHide={this.handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Add Event</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form horizontal>
//               <FormGroup controlId="formControlsSelect">
//                 <Col componentClass={ControlLabel} sm={2}>
//                   事件類別
//                 </Col>
//                 <Col sm={10}>
//                   <DropdownButton title={this.state.title} onSelect={this.selectedType} id="selectType">
//                     <MenuItem eventKey='OOAD'>OOAD</MenuItem>
//                     <MenuItem eventKey='STV'>STV</MenuItem>
//                     <MenuItem eventKey='SA'>SA</MenuItem>
//                   </DropdownButton>
//                 </Col>
//               </FormGroup>
//               <FormGroup controlId="formHorizontalEmail">
//                 <Col componentClass={ControlLabel} sm={2}>
//                   起始時間
//             </Col>
//                 <Col sm={4}>
//                   <DatePicker
//                     selected={this.state.startDate}
//                     onChange={this.startDateChange}
//                   />
//                 </Col>
//                 <Col componentClass={ControlLabel} sm={2}>
//                   結束時間
//             </Col>
//                 <Col sm={4}>
//                   <DatePicker
//                     selected={this.state.endDate}
//                     onChange={this.endDateChange}
//                   />
//                 </Col>
//               </FormGroup>
//               <FormGroup>
//                 <Col componentClass={ControlLabel} sm={2}>
//                   起始時間
//                 </Col>
//                 <Col sm={4}>
//                   <TimePicker
//                     showSecond={false}
//                     defaultValue={now}
//                     className="timePicker"
//                     onChange={timeOnChange}
//                     format={format}
//                     inputReadOnly
//                   />
//                 </Col>
//               </FormGroup>
//               <FormGroup controlId="formControlsTextarea">
//                 <Col componentClass={ControlLabel} sm={2}>
//                   事件內容
//             </Col>
//                 <Col sm={10}>
//                   <FormControl componentClass="textarea" placeholder="input things" onChange={this.handleChange} />
//                 </Col>
//               </FormGroup>
//             </Form>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button onClick={this.submitEvent}>Add</Button>
//             <Button onClick={this.handleClose}>Close</Button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
// }

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
