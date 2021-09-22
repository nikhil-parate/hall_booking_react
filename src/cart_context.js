import { Component } from "react";
import { createContext } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const API_URL1 = 'http://localhost:3001/register';
const API_URL2 = 'http://localhost:3001/update';
export const ContextStr = createContext();
class cart extends Component {
  constructor(){
    super();
    this.state= {
      cname: "",
      sttime: "",
      entime: "",
      dat: "",
      hallname: "",
      Hours: 0,
      price: "",
      sum : 0,
      total : 0,
      tax: 20,
      smile : 2,
      mid:0,
      cart : [
        { 
          id : 0,
          movie: "Hall 1",
          status: "not booked",
          price: 2500,
          val : "https://c.pxhere.com/photos/70/5f/hall_conference_effect_picture_interior_design_visualization-874791.jpg!d",
        },
        {
          id : 1, 
         movie: "Hall 2",
         status: "not booked",
         price:  2100,
         val : "https://i.pinimg.com/564x/cb/48/af/cb48af864c0e3792ef7e0d8b4ef52f64.jpg",
        },
        {
          id : 2, 
         movie: "Hall 3",
         status: "not booked",
         price: 2800,
         val : "https://m.weddingz.in/wedz-img/images/8ce8a055de710e313bd72e299a650398/kanha-dham-radha-ri-dhani-indore-bhopal-road-bhopal.jpg?imwidth=300",
        },
        {
          id : 3, 
         movie: "Hall 4",
         status: "not booked",
         price: 3000,
         val : "https://m.weddingz.in/wedz-img/images/17bbeedc75584d7bd70c1dda71a47974/fortune-garden-and-resort-bairagarh-bhopal.jpg?imwidth=300",
        },
        {
          id : 4, 
         movie: "Hall 5",
         status: "not booked",
         price: 2500,
         val : "https://m.weddingz.in/wedz-img/images/35f77ee90db861c49c653b883c9d1a63/moksh-club-bairagarh-bhopal.jpg?imwidth=300", 
        },
        {
          id : 5, 
         movie: "Hall 6",
         status: "not booked",
         price: 4000,
         val : "https://m.weddingz.in/wedz-img/images/6b6f782056537a8864c56ce7745eb557/noor-us-sabah-palace-kohefiza-bhopal.jpg?imwidth=300",
        },
        {
          id : 6, 
         movie: "Hall 7",
         status: "not booked",
         price: 2500,
         val : "https://m.weddingz.in/wedz-img/images/419abf95eeddc146eacc81ce4a9b45f4/hotel-rajhans-regent-habib-ganj-bhopal.jpg?imwidth=300",
        },
        {
          id : 7, 
         movie: "Hall 8",
         status: "not booked",
         price: 2100  ,
         val : "https://m.weddingz.in/wedz-img/images/3ec876a674469bd8b9cc2563f13488a3/sun-city-celebration-lalghati-bhopal.jpg?imwidth=300",
        }
      ]
    }
  }
  set =(data,name,id ) => {
    console.log(data);
   // let price = this.state.price;
    this.setState({price:data});
    this.setState({hallname:name});
    this.setState({mid:id});
    console.log(this.state.price,"context price");
  }
  setTotal= (hour,name,strttime,endtime,datee,stat) => {
  let res = hour * this.state.price ; 
  this.setState({total:res});
  res = res + this.state.tax + this.state.smile;
  this.setState({sum:res}); 
  this.setState({Hours:hour});
  this.setState({cname:name});
  this.setState({sttime:strttime});
  this.setState({entime:endtime});
  this.setState({dat:datee});
  let cart = [...this.state.cart];
  cart[this.state.mid].status = stat;
  this.setState({cart});
  console.log(stat);
  try {
      axios(API_URL1, { 
          method: 'POST',
          url: API_URL1,
          data : {
            cname: name,
            startTime: strttime,
            endTime: endtime,
            hours: hour,
            date: datee,
            status: stat,
            hall: this.state.hallname
        }
        })
        .then((response)=>{
          if(!response.data.error) {
            this.setState({success: "true"});
            console.log(response.data.error, this.state.success)
             toast.success('Successfully Booked.', {position: toast.POSITION.TOP_CENTER});
          }
          else{
            console.log(response.data.error, {position: toast.POSITION.TOP_CENTER},"helo here");
        }
        })   
  } catch (err) {
      toast.error(err);
      console.log(err,"hello");
  }
  try {
    axios(API_URL2, { 
        method: 'PUT',
        url: API_URL2,
        data : {
          movie: this.state.hallname
      }
      })
      .then((response)=>{
        if(!response.data.error) {
          this.setState({success: "true"});
          console.log(response.data.error, this.state.success)
        }
        else{
          console.log(response.data.error, {position: toast.POSITION.TOP_CENTER},"helo here");
      }
      })   
} catch (err) {
    toast.error(err);
    console.log(err,"hello");
}
  }
  setdel = (Id) => {
   console.log(Id,"cart");
   let cart = [...this.state.cart];
   cart = cart.filter(({id}) => id !== Id);
   this.setState({cart});
  }
  render() {
    return(
      <>
          <ContextStr.Provider value={{...this.state, set:this.set, setTotal:this.setTotal, setdel:this.setdel}}>
               {this.props.children}
          </ContextStr.Provider>
      </>
    )
  }
}

export default cart;