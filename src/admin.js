import React, {Component} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Table } from 'react-bootstrap';
import axios from 'axios';
toast.configure();
//import Theater from './theater';
const API_URL1 = 'http://localhost:3001/customer_data';

class demo extends Component {
    constructor() {
        super();
        this.state = {
          posts1: [],
        }
    }
    componentDidMount = () => this.getPost();
    getPost = async() => {
        try {
            const { data } = await axios.get(API_URL1);
            console.log(data,"h");
            this.setState({
                posts1: data
            });
        } catch (err) {
            console.log(err);
        }
    }  
    
    render() {
        return ( 
          <>
          <Table >
      <thead >
      <th > Customer-Name </th> 
      <th > Start Time </th> 
      <th > End Time </th> 
      <th > Date  </th> 
      <th > Hall </th> 
      </thead > 
      <tbody> {
          this.state.posts1.map(({
              cname,
              startTime,
              endTime,
              date,
              hall
          }) => {
              return (<tr> <td style={{fontWeight:"bold", color:"#104c91"}}> {
                  cname} </td>
                  <td style={{fontWeight:"bold", color:"#104c91"}}> {
                      startTime
                  } </td> 
                  <td style={{fontWeight:"bold", color:"#104c91"}}> {
                      endTime
                  } </td> 
                  <td style={{fontWeight:"bold", color:"#104c91"}}> {
                      date
                  } </td> 
                  <td style={{fontWeight:"bold", color:"#104c91"}}> {
                     hall
                     }</td> 
                     </tr>
              )
          })
          } 
          </tbody> 
      </ Table > 
      
      </>
        )
        
}
};
 
 export default demo;