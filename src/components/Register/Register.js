import React,{Component} from 'react';
import fire from '../../config/fire.js';
class Register extends Component{
	constructor(props){
		super(props);
		this.signup = this.signup.bind(this);
		this.state = {
			name:'',
			email:'',
			password:'',
			address:'',
			user:null,
			phone:"",
		}
		// this.db = fire.database().ref().child('labs');
		this.db = fire.firestore();

	}
	signup(e){
	    e.preventDefault();
	    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
	   	    if (u)
	   	    {
				   console.log(u);
				   // this.db.push().set({name:this.state.name,address:this.state.address});
				   this.db.collection('labs').doc(u.user.uid).set({
					name: this.state.name,
					email: this.state.email,
					address:this.state.address,
					phone:this.state.phone,
				  })
	   	    }
	   	    })
	    .catch((error) => {
	        if(!error){
	        	this.props.onRouteChange('home');
	        	
	        }
	        console.log(error);
	     })
  	}	
	onEmailChange = (event) => {
		this.setState({email:event.target.value});
	}
	onNameChange = (event) => {
		this.setState({name:event.target.value});
	}
	onPasswordChange = (event) => {
		this.setState({password:event.target.value});
	}
	onAddressChange = (event) => {
		this.setState({address:event.target.value});
	}
	onPhoneChange = (event) => {
		this.setState({phone:event.target.value});
	}
	render(){
		const {onRouteChange} = this.props;
		return (
		<article className="main br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
			<main className="pa4 black-80">
			  <div className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f1 fw6 ph0 mh0 ">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" >Lab Name</label>
			        <input onChange={this.onNameChange}className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="lab-name"  id="LabName"/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" >Address</label>
			        <input onChange={this.onAddressChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="address"  id="address"/>
			      </div>
				  <div className="mt3">
			        <label className="db fw6 lh-copy f6" >Phone Number</label>
			        <input onChange={this.onPhoneChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="PhoneNumber"  id="PhoneNumber"/>
			      </div>			      
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input onClick={this.signup} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
			    </div>
			    <div className="lh-copy mt3">
			      <a href="#0" onClick={()=>onRouteChange('signin')} className="f6 link dim black db">SignIn</a>
			    </div>
			  </div>
			</main>
		</article>
	);
	}
}

export default Register ;