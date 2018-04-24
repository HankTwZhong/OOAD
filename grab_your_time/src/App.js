import React, { Component } from 'react';
import './App.css';
import {Link,Route, Switch,Redirect} from 'react-router-dom'
import {Button,ButtonToolbar} from 'react-bootstrap';
import AddEvent from './Event/AddEvent'
import MyCalendar from './MyCalendar'
import myEventsList from './Event/myEventsList'
import SearchEvent from './Event/SearchEvent'

const MyCalendarWithProps = (props) => {
  return (
    <MyCalendar 
    myEventsList={myEventsList} 
    />
  );
}
const searchEvent = (props) =>{
  return (
    <SearchEvent myEventsList={myEventsList}/>
  )
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Grab Your Time
          <TopButtom />
          </h1>
        </header>
            <Switch>
              <Route exact path="/" component={MyCalendarWithProps} />
              <Route exact path="/searchEvent" component={searchEvent}/>
              <Redirect to='/' />
            </Switch>
      </div>
    );
  }
}
class TopButtom extends React.Component{
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
          <Button  className="pull-left" bsStyle="primary">
            <Link to="/" style={{ color: '#FFF' }}>Calendar</Link>
          </Button>
        </ButtonToolbar>
        <AddEvent ref = {this.child} 
          myEventsList={myEventsList}/>
      </div>
    )
  }
}
export default App;
