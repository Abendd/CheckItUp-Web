import React ,{Component}from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import 'tachyons';
import Particles from 'react-particles-js';
import SignIn from './components/SignIn/SignIn.js';
import Homepage from './components/Homepage/Homepage.js';
import Register from './components/Register/Register.js';
import fire from './config/fire.js'
import AppointmentPage from './components/Appointment/appointment';
const particlesOptions ={
  particles:{
    number:{
      value:200,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

class App extends Component{
  constructor(){
    super();
    this.state ={
      route:'signin',
      isSignedin:false,
      user:null
    }

  }

  onRouteChange =(route)=>{
    if(route==='home' || route==='appointment')
    {
      this.setState({isSignedin:true});
    } else{
      this.setState({isSignedin:false}); 
    }
    this.setState({route:route});
  }

  componentDidMount(){
    this.authListener();

  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      
      if(user){
      this.setState({user});
      this.setState({isSignedin:true,route:'home'});
    
      localStorage.setItem('user',user.uid);
      } else{
        this.setState({user:null});
        localStorage.removeItem('user');
      }
    });
  }

  render(){
    return(
      <div className="App">
        <Particles className='particles'
                params={particlesOptions} 
        />
        <Navigation isSignedIn={this.state.isSignedin} onRouteChange = {this.onRouteChange} route = {this.state.route}/>
        { this.state.user
          ?
            this.state.route==="appointment"?
            <AppointmentPage user={this.state.user}/>
            :<Homepage user={this.state.user}/>
          
          :this.state.route==="register"
            ?<Register onRouteChange ={this.onRouteChange}/>
            :<SignIn onRouteChange ={this.onRouteChange} />
      }
      </div>
      );
  }
}

export default App;
