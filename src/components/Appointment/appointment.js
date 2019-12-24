import React,{Component} from 'react';
import Card from '../card/card.js';
import fire from '../../config/fire.js'
import AppointmentCard from '../card/appointmentCard.js';
class AppointmentPage extends Component{
	constructor(props){
		super(props);
		this.state ={
			appointments:[],
		}
		console.log('hey');
		// this.fire = fire;
		// this.db = this.fire.database().ref().child('labs').child(this.props.user.uid).child('tests');
		this.db = fire.firestore().collection('labs').doc(this.props.user.uid).collection('appointments');

	}

	acceptAppointment(id ,db){
		db.doc(id).update({'Accepted':'1'});
	}
	componentWillMount(){
		
		const prevappointment = [];
		this.db.onSnapshot(querySnapshot => {
		  querySnapshot.forEach(i =>{
            prevappointment.push({
                    date:i.data().Date,
					time:i.data().Time,
					accepted:i.data().Accepted,
					id:i.id
				})
		  })
		  console.log(prevappointment)
		  this.setState({
			  appointments:prevappointment.slice(prevappointment.length-4,prevappointment.length)
		  })
		} , err => {
		  console.log(`Encountered error: ${err}`);
		});
		
	}

	render(){
		return(
			<div>
				<h1>Lal PathLabs</h1>
					{

						this.state.appointments.map((appointment,index)=>{

							return(
								<React.Fragment key={appointment.id}>
								<AppointmentCard appointments = {this.state.appointments}
												 cardid = {index}
												 date = {appointment.date} 
												 time = {appointment.time} 
												 accepted = {appointment.accepted} 
												 id={appointment.id} 
												 acceptAppointment = {this.acceptAppointment}
												 db={this.db}
								/>
								</React.Fragment>
							);
						})
					}
			</div>
		);
	}
}

export default AppointmentPage ;