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
	componentWillMount(){
		const prevappointment = [];
		this.db.onSnapshot(querySnapshot => {
		  querySnapshot.forEach(i =>{
            prevappointment.push({
					name:i.data().name,
                    phone:i.data().phone,
                    date:i.data().date,
                    testName:i.data().testName
				})
		  })

		  this.setState({
			  appointments:prevappointment
		  })
		}, err => {
		  console.log(`Encountered error: ${err}`);
		});
	}

	render(){
		return(
			<div>
				<h1>Lal PathLabs</h1>
					{
						this.state.appointments.map((appointment)=>{
							return(
								<AppointmentCard name={appointment.name} date = {appointment.date} phone = {appointment.phone} testName = {appointment.testName}/>
							);
						})
					}
			</div>
		);
	}
}

export default AppointmentPage ;