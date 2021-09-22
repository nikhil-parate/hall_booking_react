import './seat.css';
import React, {Component} from 'react'
import {ContextStr} from './cart_context';
import SeatPicker from 'react-seat-picker'
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class seat extends Component {
  static contextType = ContextStr;
  constructor(){
    super();
  this.myRef1 = React.createRef();
  this.myRef2 = React.createRef();  
  this.myRef3 = React.createRef();
  this.myRef4 = React.createRef();
  this.myRef5 = React.createRef();
  this.state = {
    loading: false,
    hours:0,
    hlname: "",
    price: 0,
    total: 0,
    str: "",
    cname: "",
    sttime:"",
    status: "",
    entime: "",
    date:"",
    errors:{
        hours : ""
    },
    touched:{
          hours:false,
    }
  }
  this.routeChange = this.routeChange.bind(this);
}
handle = async ({ target: { name, value } }) => {
  const errors = this.state.errors;
  switch (name) {
      case "hours": {
        if (!value) {
          errors[name] = "hours is empty";
        } else if(isNaN(name)){
          errors[name] = "hours must be number";
        } else {
          errors[name] = "";  
        }
        break;
      }
      case "cname": {
        if (!value) {
          errors[name] = "Customer name is empty";
        } else if(isNaN(name)){
          errors[name] = "Customer name must be text";
        } else {
          errors[name] = "";  
        }
        break;
      }
      case "sttime": {
        if (!value) {
          errors[name] = "Starting time is empty";
        } else if(!isNaN(name)){
          errors[name] = "Starting time must be text";
        } else {
          errors[name] = "";  
        }
        break;
      }
      case "entime": {
        if (!value) {
          errors[name] = "Ending time is empty";
        } else if(!isNaN(name)){
          errors[name] = "Ending time must be text";
        } else {
          errors[name] = "";  
        }
        break;
      }
      case "date": {
        if (!value) {
          errors[name] = "date is empty";
        } else if(isNaN(name)){
          errors[name] = "date must be string";
        } else {
          errors[name] = "";  
        }
        break;
      }
      default: {
          console.log("Hi");
      }
    }
    this.setState({ [name]: value, errors });
    let status = this.state.status;
    status = "booked";
    this.setState({status});
}

handleBlur = ({ target: { name } }) => {
  const touched = { ...this.state.touched };
  touched[name] = true;
  this.setState({ touched });
};
 
  routeChange() {
    let path = `/payment`;
    this.props.history.push(path);
  }
  changeRoute = (event)=> {
    toast.info("Please confirm details, then click on pay to book");
    this.routeChange();
  }
  render() {
    const {setTotal} = this.context;
    const rows = [
      [{id: 1, number: 1}, {id: 2, number: 2}, null, {id: 3, number: '3', orientation: 'east'}, {id: 4, number: '4', orientation: 'west'}, null, {id: 5, number: 5}, {id: 6, number: 6}, null, null, null, null, null, {id: 7, number: 7}, {id: 8, number: 8}, null,{id: 9, number: 9},{id: 10, number: 10}, null, {id: 11, number: 11}, {id: 12, number: 12}],
      [{id: 13, number: 1}, {id: 14, number: 2}, null, {id: 15, number: '3', orientation: 'east'}, {id: 16, number: '4', orientation: 'west'}, null, {id: 17, number: 5}, {id: 18, number: 6},null, null, null, null, null,{id: 19, number: 7}, {id: 20, number: 8}, null,{id: 21, number: 9},{id: 22, number: 10}, null, {id: 23, number: 11}, {id: 24, number: 12}],
      [{id: 25, number: 1}, {id: 26, number: 2}, null, {id: 27, number: 3, orientation: 'east'}, {id: 28, number: '4', orientation: 'west'}, null, {id: 29, number: 5}, {id: 30, number: 6},null, null, null, null, null,{id: 31, number: 7}, {id: 32, number: 8}, null,{id: 33, number: 9},{id: 34, number: 10}, null, {id: 35, number: 11}, {id: 36, number: 12}],
      [{id: 37, number: 1}, {id: 38, number: 2}, null, {id: 39, number: 3, orientation: 'east'}, {id: 40, number: '4', orientation: 'west'}, null, {id: 41, number: 5}, {id: 42, number: 6},null, null, null, null, null,{id: 43, number: 7}, {id: 44, number: 8}, null,{id: 45, number: 9},{id: 46, number: 10}, null, {id: 47, number: 11}, {id: 48, number: 12}],
      [{id: 49, number: 1}, {id: 50, number: 2, orientation: 'east'}, null, {id: 51, number: '3'}, {id: 52, number: '4', orientation: 'west'}, null,{id: 53, number: 5}, {id: 54, number: 6},null, null, null, null, null,{id: 55, number: 7}, {id: 56, number: 8}, null,{id: 57, number: 9},{id: 58, number: 10}, null, {id: 59, number: 11}, {id: 60, number: 12}]

    ]
    const {loading} = this.state;
    return (
        <> 
          <ContextStr.Consumer>
              {  (context)=> {
        return(
          <>
          {console.log(context.cart)}
          <br />
          <br />
             <label style={{paddingRight: "20px"}}> Customer name <input ref = {this.myRef1} 
            type = "text" required style={{marginLeft:"44px"}}
            value = {this.state.hours.value}
            name = "cname"
            onChange = {
                this.handle
            }
            onBlur={this.handleBlur}
            /> </ label > 
             <label style={{paddingRight: "20px"}}> Starting time <input ref = {this.myRef2} 
            type = "text" required style={{marginLeft:"44px"}}
            value = {this.state.hours.value}
            name = "sttime"
            onChange = {
                this.handle
            }
            onBlur={this.handleBlur}
            /> </ label > 
             <label style={{paddingRight: "20px"}}> Ending time <input ref = {this.myRef3} 
            type = "text" required style={{marginLeft:"44px"}}
            value = {this.state.hours.value}
            name = "entime"
            onChange = {
                this.handle
            }
            onBlur={this.handleBlur}
            /> </ label > 
             <label style={{paddingRight: "20px"}}> Hours <input ref = {this.myRef4} 
            type = "number" required style={{marginLeft:"44px"}}
            value = {this.state.hours.value}
            name = "hours"
            onChange = {
                this.handle
            }
            onBlur={this.handleBlur}
            /> </ label > 
             <label style={{paddingRight: "20px"}}> Date <input ref = {this.myRef5} 
            type = "text" required style={{marginLeft:"44px"}}
            value = {this.state.hours.value}
            name = "date"
            onChange = {
                this.handle
            }
            onBlur={this.handleBlur}
            /> </ label > 
          <div class="container" style={{ backgroundColor: "#242333", width:"50%", padding:"0px 50px 100px 50px"}}>
        <h1 class="entry" style={{alignItems:"left"}}>Entry</h1>
        <h1 class="exit" style={{alignItems:"right"}}>Exit</h1>
        <div style={{marginTop: '50px'}}>
          <SeatPicker
            rows={rows}
            maxReservableSeats={5}
            alpha
            visible
            selectedByDefault
            loading={loading}
            tooltipProps={{multiline: true}}
          />
        </div>
      </div>
      <p></p>
      <Button onClick = {()=> {this.changeRoute();setTotal(this.state.hours,this.state.cname,this.state.sttime,this.state.entime,this.state.date,this.state.status)}} style={{marginLeft:"1070px"}}>checkout</Button>
      </>
        )
      }}
          </ContextStr.Consumer>
     
      </>
    )
    }
}
export default withRouter(seat);