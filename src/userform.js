import React, {
    Component
} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const API_URL1 = 'http://localhost:3001/customer_data';
const API_URL2 = 'http://localhost:3001/hall_data';
//'http://localhost:3001/register';

class demo extends Component {
  constructor() {
      super();
      this.state = {
        posts: [],
        posts2:[]
      }
  }
  componentDidMount = () => this.getPost();
  getPost = async() => {
      try {
          const { data } = await axios.get(API_URL1);
          console.log(data,"h");
          this.setState({
              posts: data
          });
      } catch (err) {
          console.log(err);
      }
      try {
        const { data } = await axios.get(API_URL2);
        console.log(data,"h");
        this.setState({
            posts2: data
        });
         let posts2 = [...this.state.posts2];
         posts2 = data.filter((e)=>e.status !== "booked");
         this.setState({posts2});
    } catch (err) {
        console.log(err);
    }
  }  
  
  render() {
      return ( 
        <>
        <Table >
    <thead >  
    <th > Hall </th>     
    <th > Customer-Name </th> 
    <th > Start Time </th> 
    <th > End Time </th> 
    <th > Date  </th> 
    <th > Booking Status </th> 
    </thead > 
    <tbody> {
        this.state.posts.map(({
            cname,
            startTime,
            endTime,
            date,
            status,
            hall
        }) => {
            return (<tr> 
                 <td style={{fontWeight:"bold", color:"#104c91"}}> {
                   hall
                   }</td> 
                <td style={{fontWeight:"bold", color:"#104c91"}}> {
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
                    status
                } </td> 
                   </tr>
            )
        })
        } 
        </tbody> 
    </ Table > 
    <Table>
        <thead>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
        </thead>
        <tbody>
        {
          this.state.posts2.map(({
            movie,  
            status,
          }) => {
              return (<tr> <td style={{fontWeight:"bold", color:"#104c91"}}> {
                  movie} </td>
                  <td> -</td> <td> </td>
                  <td> </td> <td> </td> <td> </td>
                  <td></td> <td>-</td> <td></td>
                  <td> </td><td> </td><td> </td>
                  <td>-</td><td></td><td> </td>
                  <td>-</td><td></td>
                  <td style={{fontWeight:"bold", color:"#104c91"}}> {
                     status
                     }</td> 
                     </tr>
              )
          })
          } 
        </tbody>
    </Table>
    </>
      )
      
}
};

export default demo;