import React from 'react';
import {Button,ButtonToolbar} from 'react-bootstrap';
import AddEvent from './Event/AddEvent'
import {Link} from 'react-router-dom'

export default class TopButtom extends React.Component{
    constructor(props){
      super(props);
      this.child = React.createRef()
    }
    onClick = () => {
      this.child.current.handleShow()
    }
    render(){
      return(
        <div>
          <ButtonToolbar>
            <Button className="pull-right" bsStyle="primary" onClick={this.onClick}>
              Add Event
            </Button>
            <Button  className="pull-right" bsStyle="primary">
              <Link to="/searchEvent" style={{ color: '#FFF' }}>SearchEvent</Link>
            </Button>
            <Button  className="pull-right" bsStyle="primary">
              <Link to="/manageType" style={{ color: '#FFF' }}>ManageType</Link>
            </Button>
            <Button  className="pull-left" bsStyle="primary">
              <Link to="/" style={{ color: '#FFF' }}>Calendar</Link>
            </Button>
          </ButtonToolbar>
          <AddEvent ref = {this.child} 
            setEventList = {this.props.setEventList}
            myEventsList={this.props.myEventsList} typeList={this.props.typeList}/>
        </div>
      )
    }
  }