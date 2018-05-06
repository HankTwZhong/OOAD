import React from 'react';
import { Checkbox,Button, Modal,Form,FormControl,FormGroup,Col,ControlLabel, DropdownButton, MenuItem} from 'react-bootstrap'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import DatePicker from 'react-datepicker';
import 'rc-time-picker/assets/index.css';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import axios from 'axios'

const now = moment()
const format = 'HH:mm';

export default class AddEvent extends React.Component{
    constructor(props, context) {
      super(props, context);
        // this.typeList = props.typeList
        this.eventList = props.myEventsList
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.state = {
          show: false,
          id: this.eventList.length,
          eventContent: undefined,
          startDate: moment(),
          endDate: moment(),
          startTime:moment(),
          endTime:moment(),
          title: '選擇類別',
          desc: undefined,
          checked:false,
          time:undefined
        }
        this.startDateChange = this.startDateChange.bind(this)
        this.endDateChange = this.endDateChange.bind(this)
        this.submitEvent = this.submitEvent.bind(this)
        this.selectedType = this.selectedType.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.startTimeOnChange = this.startTimeOnChange.bind(this)
        this.endTimeOnChange = this.endTimeOnChange.bind(this)
        this.dropDownMenu = this.dropDownMenu.bind(this)
        this.checkBox = this.checkBox.bind(this)
        this.selectedTime = this.selectedTime.bind(this)
      }
      startDateChange(date) {
        this.setState({
          startDate: date
        });
      }
      endDateChange(date) {
        this.setState({
          endDate: date
        })
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
      startTimeOnChange(value) {
        this.setState({
            startTime:value
        })
      }
      endTimeOnChange(value){
          this.setState({
              endTime:value
          })
      }
      submitEvent() {
        this.handleClose()
        this.eventList.push({
          id: this.eventList.length+1,
          title: this.state.title,
          start: new Date(this.state.startDate.get('year'),this.state.startDate.get('month'), this.state.startDate.get('date'), this.state.startTime.get('hour'), this.state.startTime.get('minute'), 0),
          end: new Date(this.state.endDate.get('year'),this.state.endDate.get('month'), this.state.endDate.get('date'), this.state.endTime.get('hour'), this.state.endTime.get('minute'), 0),
          desc: this.state.desc,
        })
        this.props.setEventList(this.eventList)
        axios.post('localhost:1321/event',{
            type: this.state.title,
            startDate: new Date(this.state.startDate.get('year'),this.state.startDate.get('month'), this.state.startDate.get('date'), this.state.startTime.get('hour'), this.state.startTime.get('minute'), 0),
            endDate: new Date(this.state.endDate.get('year'),this.state.endDate.get('month'), this.state.endDate.get('date'), this.state.endTime.get('hour'), this.state.endTime.get('minute'), 0),
            description: this.state.desc,
        })
    
      }
      selectedType(selected) {
        this.setState({ title: selected })
      }
      selectedTime(selected){
        console.log(selected)
        this.setState({
          time:selected
        })
      }
      handleChange(text) {
        this.setState({
          desc: text.target.value
        })
      }
      dropDownMenu(){
        return <button>qwe</button>
      }
      checkBox(checked){
        this.setState({
          checked:checked
        })
      }
      render() {
        let optionItems = this.props.typeList.map((type,i) =>
          <MenuItem key={type.typeName} eventKey={type.typeName}>{type.typeName}</MenuItem>
      );
        return (
          <div>
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
                    <Col sm={3}>
                      <DropdownButton title={this.state.title} onSelect={this.selectedType} id="selectType">
                         {optionItems}
                      </DropdownButton>
                    </Col>
                    <Col sm={3}>
                    <Checkbox inline checked={this.state.checked} onClick={e => this.checkBox(e.target.checked)}>
                    循環事件  
                    </Checkbox>
                    </Col>
                    <Col sm={2}>                    
                      <DropdownButton title='循環事件' onSelect={this.selectedTime} id="selectedTime">
                          <MenuItem disabled={!this.state.checked} eventKey='day'>每天</MenuItem>
                          <MenuItem disabled={!this.state.checked} eventKey='week'>一週</MenuItem>                          
                      </DropdownButton>
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                      起始時間（日）
                </Col>
                    <Col sm={4}>
                      <DatePicker
                        selected={this.state.startDate}
                        onChange={this.startDateChange}
                      />
                    </Col>
                    <Col componentClass={ControlLabel} sm={2}>
                      結束時間(日)
                </Col>
                    <Col sm={4}>
                      <DatePicker
                        disabled={!this.state.checked}
                        selected={this.state.endDate}
                        onChange={this.endDateChange}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col componentClass={ControlLabel} sm={2}>
                      起始時間
                    </Col>
                    <Col sm={4}>
                      <TimePicker
                        showSecond={false}
                        defaultValue={now}
                        className="timePicker"
                        onChange={this.startTimeOnChange}
                        format={format}
                        inputReadOnly
                      />
                    </Col>
                    <Col componentClass={ControlLabel} sm={2}>
                      結束時間
                    </Col>
                    <Col sm={4}>
                      <TimePicker
                        showSecond={false}
                        defaultValue={now}
                        className="timePicker"
                        onChange={this.endTimeOnChange}
                        format={format}
                        inputReadOnly
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup controlId="formControlsTextarea">
                    <Col componentClass={ControlLabel} sm={2}>
                      事件內容
                </Col>
                    <Col sm={10}>
                      <FormControl componentClass="textarea" placeholder="input things" onChange={this.handleChange} />
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