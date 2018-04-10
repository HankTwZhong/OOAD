import React, { Component } from 'react';
import './App.css';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Button,Modal,Form,FormControl,FormGroup,Col,ControlLabel } from 'react-bootstrap';
import myEventsList from './myEventsList'
BigCalendar.momentLocalizer(moment)


class MyCalendar extends React.Component{

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
  render(){
    return(
      <BigCalendar
      events={myEventsList}
      defaultDate={new Date(2015, 3, 1)}
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
class AddEvent extends React.Component{constructor(props, context) {
  super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
        show: false,
        id : myEventsList[myEventsList.length-1],
        eventContent:undefined,
        start: undefined,
        end: undefined
      };
    }

    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }
    submitEvent(){
      myEventsList.push({
        id: myEventsList[myEventsList.length-1],
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
      })
  }

  render() {
    return (
      <div>
        <Button className="pull-right"bsStyle="primary" bsSize="xsmall" onClick={this.handleShow}>
          Add Event
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Event</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form horizontal>
            <FormGroup controlId="formControlsSelect">
            <Col componentClass={ControlLabel} sm={2}>
                事件類別
            </Col>
            <Col sm={10}> 
              <FormControl componentClass="select"  placeholder="select">
                  <option value="select">POSD</option>
                  <option value="other">SA</option>
                  <option value="other">STV</option>
              </FormControl>
            </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
                時間
            </Col>
            <Col sm={10}>
                <div class='input-group date' id='datetimepicker6'>
                    <input type='text' class="form-control" />
                    <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </Col>
            </FormGroup>
            <FormGroup controlId="formControlsTextarea">
            <Col componentClass={ControlLabel} sm={2}>
                事件內容
            </Col>
            <Col sm={10}>
                <FormControl componentClass="textarea" placeholder="textarea" />
            </Col>
            </FormGroup>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.submitEvent}>Add</Button>            
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
    }
  }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Grab Your Time</h1>
          <AddEvent/>
        </header>
          <MyCalendar/>
      </div>
    );
  }
}

export default App;
