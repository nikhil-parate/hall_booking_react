import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
class home extends Component {
    constructor(){
        super();
         this.routeChange1 = this.routeChange1.bind(this);
         this.routeChange2 = this.routeChange2.bind(this);
         this.routeChange3 = this.routeChange3.bind(this);
    }
     routeChange1() {
         console.log("you clicked login")
        let path = `/movies`;
        this.props.history.push(path);
    }
    routeChange2() {
        let path = `/register`;
        this.props.history.push(path);
      }
    routeChange3() {
        let path = `/admin`;
        this.props.history.push(path);
    }  
    changeRoute1 = (prod)=> {
        console.log("cr")
        this.routeChange1();
    }
    changeRoute2 = (prod)=>{
          this.routeChange2();
    }
    changeRoute3 = (prod)=>{
        this.routeChange3();
  }
    render() {
        return(
            
                <>
                    <img src = "https://image.slidesharecdn.com/considerbeforebookingweddinghall-190130053312/95/consider-before-booking-wedding-hall-1-638.jpg?cb=1548828567" alt="Hall booking" align="right" width="800"/>
                     <Button onClick={()=>this.changeRoute1()}>Book Here</Button>
                    <Button onClick={()=>this.changeRoute2()}>Halls</Button>
                    <Button onClick={()=>this.changeRoute3()}>Customer</Button>
                </>
            
        )
    }
}
export default withRouter(home);