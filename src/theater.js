import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import {ContextStr} from './cart_context';


class pricing extends Component {
  static contextType = ContextStr;
  constructor() {
    super();
    this.routeChange = this.routeChange.bind(this);
    this.state = {
         hname: "",
         total: 0,
     }
  }
  routeChange() {
    let path = `/ticket`;
    this.props.history.push(path);
  }
  change = (id)=> {
    this.setState({hname:id});
    this.routeChange();
  }
  render () {
    const {set} = this.context;
         return(
           <>
           <ContextStr.Consumer>
    {
      (context)=> {
        return(
          <>
           { /*console.log(context,"ht")
            /*{context.cart.map(({movie,price,val})=>console.log(movie,price,val))}  */}
             <br />
           <br />
           <div style={{textAlign:"center", background:"black", color:"white"}}>
             <br />
             <br />
             <h1 style={{fontSize:"350%"}}>Hall Booking</h1>
             <p> Book Hall of your choice.</p>
             <br />
             <br />
           </div>
           <br />
            <div style={{textAlign:"center"}}>
             <div class="row">
             {context.cart.map(({id,movie,price,val})=>

              <div  class="col" style={{border:"1px solid #D3D3D3"}}>
                <br />
                <img src= {val} height="200" width="300" alt="movie" />
                <br />
                <span style={{fontWeight:"bold", fontSize:"150%"}}>{movie}</span>
                <br />
              
                <span>Rs {price}</span>
                <br />
    
            <Button onClick={()=>{this.change(id);set(price,movie,id)}}>Book</Button>
           
                 
                 <br />
                 <br />
              </div>
             )}
             </div>
             </div>
          </>
        )
      }
    }
    </ContextStr.Consumer>
            
           </>
         )
  }
}
export default withRouter(pricing);