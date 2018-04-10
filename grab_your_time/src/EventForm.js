import React from 'react';
import { Form,FormControl,FormGroup,Col,ControlLabel } from 'react-bootstrap'
export default class EventForm extends React.Component{
    render(){
        return(
        <Form horizontal>
            <FormGroup controlId="formControlsSelect">
                <Col componentClass={ControlLabel} sm={2}>
                    事件類別
                </Col>
                <Col sm={10}> <FormControl componentClass="select"  placeholder="select">
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
        )
    }
}