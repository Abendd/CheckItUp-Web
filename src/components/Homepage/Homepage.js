import React,{Component} from 'react';
import Card from '../card/card.js';
import TestForm from '../testForm/testForm.js';
import fire from '../../config/fire.js'
class Homepage extends Component{
	constructor(props){
		super(props);
		this.addTest= this.addTest.bind(this);
		this.state ={
			tests:[],
		}
		
		// this.fire = fire;
		// this.db = this.fire.database().ref().child('labs').child(this.props.user.uid).child('tests');
		this.db = fire.firestore().collection('labs').doc(this.props.user.uid).collection('tests');

	}
	componentWillMount(){
		const prevtests = [];
		this.db.onSnapshot(querySnapshot => {
			if (this.state.tests.length===0){
		  	querySnapshot.forEach(i =>{
				prevtests.push({
					name:i.data().name,
					price:i.data().price
				})
		  })

		  this.setState({
			  tests:prevtests
		  })
		}
		}, err => {
		  console.log(`Encountered error: ${err}`);
		});
	}

	// getTests(){
	// 	let tests = [];
	// 	this.db.get()
	// 	.then(snapshot => {
	// 		snapshot.forEach(doc => {
	// 			tests.push({
	// 				name:doc.data().name,
	// 				price:doc.data().price
	// 			})
	// 		});
	// 	})
	// 	.catch(err => {
	// 		console.log('Error getting documents', err);
	// 	});
	// 	console.log(tests);
	// 	this.setState({tests});
	// }
	addTest(name,price){
		this.db.add({
			name: name,
			price:price
		  });
		  const current_tests = this.state.tests;
		  current_tests.push({
			  name:name,
			  price:price
		  });
		  this.setState({
			  tests:current_tests
		  });
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