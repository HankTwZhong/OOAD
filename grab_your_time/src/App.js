import React, { Component } from 'react';
import './App.css';
import {Route, Switch,Redirect} from 'react-router-dom'
import MyCalendar from './MyCalendar'
import myEventsList from './Event/myEventsList'
import SearchEvent from './Event/SearchEvent'
import TypeManage from './Type/TypeManage'
import TopButtom from './TopButton'


class App extends Component {
  constructor(){
    super()
    this.state={
      eventList:myEventsList,
      typeList:[{
        typeName:'POSD'
      },
      {
        typeName:'SE'
      }]
    }
    this.setTypeList=this.setTypeList.bind(this)
    this.setEventList = this.setEventList.bind(this)
  }
  setEventList(eventList){
    this.setState({eventList:eventList})
  }
  setTypeList(typeList){
    this.setState({
      typeList: typeList
    })
  }
  render() {
    const MyTypeList = ()=>{
      return (
        <TypeManage setTypeList={this.setTypeList} typeList={this.state.typeList}/>
      )
    }
    const MyCalendarWithProps = (props) => {
    return (
      <MyCalendar 
      myEventsList={this.state.eventList} 
      />
    );
    }
    const searchEvent = (props) =>{
    return (
      <SearchEvent myEventsList={this.eventList}/>
    )
    }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Grab Your Time
          <TopButtom  setEventList={this.setEventList} typeList={this.state.typeList} myEventsList={this.state.eventList}/>
          </h1>
        </header>
            <Switch>
              <Route exact path="/" component={MyCalendarWithProps} />
              <Route exact path="/searchEvent" component={searchEvent}/>
              <Route exact path="/manageType" component={MyTypeList}/>              
              <Redirect to='/' />
            </Switch>
      </div>
    );
  }
}

export default App;
