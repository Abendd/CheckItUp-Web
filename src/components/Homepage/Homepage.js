import React,{Component} from 'react';
import Card from '../card/card.js';
import TestForm from '../testForm/testForm.js';
import fire from '../../config/fire.js'
class Homepage extends Component{
	constructor(props){
		super(props);
		this.addTest= this.addTest.bind(this);
		this.state ={
			tests:[

			],
		}

		this.fire = fire;
		this.db = this.fire.database().ref().child('labs').child(this.props.user.uid).child('tests');
	}

	componentWillMount(){
		const prevtests = this.state.tests;
		this.db.on('child_added',snap=>{
			prevtests.push({
				name:snap.val().name,
				price:snap.val().price
			})
			this.setState({
				tests:prevtests
			})
		});
	}
	addTest(name,price){
		this.db.push().set({name:name,price:price});
	}
	render(){
		return(
			<div>
				<h1>Lal PathLabs</h1>

					{
						this.state.tests.map((test)=>{
							return(
								<Card name={test.name} price={test.price} />
							);
						})
					}
					<TestForm addTest ={this.addTest}/>
			</div>
		);
	}
}

export default Homepage ;