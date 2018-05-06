import React from "react";
import { Button,FormControl,Form} from 'react-bootstrap'
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class TypeManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:props.typeList,
      inputText:''
    };
    this.addType=this.addType.bind(this)
    this.inputTypeChange = this.inputTypeChange.bind(this)
    this.deleteType = this.deleteType.bind(this)
  }
  editRow(value){
    console.log(value)
  }
  addType(){
    let newArray = this.state.data
    newArray.push({typeName:this.state.inputText})
    this.props.setTypeList(newArray)
  }
  inputTypeChange(inputText){
    this.setState({
      inputText:inputText.target.value      
    })
  }
  deleteType(typeName){
    let newArray = this.state.data
    newArray = newArray.filter((type)=>{
      return type.typeName !== typeName
    })
    this.props.setTypeList(newArray)
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <Form inline>
            <FormControl type="text" onChange={this.inputTypeChange} placeholder="輸入類別" />
          <Button bsStyle="success" onClick={()=>this.addType()} type="submit">新增類別</Button>
        </Form>
        <ReactTable
          data={data}
          columns={[
            {
              id:'typeName',
              Header: "類別名稱",
              accessor:'typeName'
            },
            {
              id: 'edit',
              accessor: 'typeName',
              Cell: ({value}) => (
              <div>
                <Button bsStyle="info" onClick={()=>this.editRow(value)}>編輯類別</Button>
                <Button bsStyle="danger" onClick={()=>this.deleteType(value)}>刪除類別</Button>
              </div>
            )
            }
          ]}
          filterable
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

