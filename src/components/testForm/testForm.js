import React,{Component} from 'react';

class TestForm extends Component{
	constructor(props){
		super(props);
		this.writeTest= this.writeTest.bind(this);
		this.state ={
			name:"",
			price:""
		}
	}

	onNameChange = (event)=>{
		this.setState({name:event.target.value});
	}

	onPriceChange = (event)=>{
		this.setState({price:event.target.value});
	}

	writeTest(){
		
		this.props.addTest(this.state.name,this.state.price);
		this.setState({
			name:'',
			price:''
		})
	}
	render(){

		return(
			<div>
				<article className="main br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<main className="pa4 black-80">
					  <div className="measure center">
					    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
					      <legend className="f1 fw6 ph0 mh0 ">Add test</legend>
					      <div className="mt3">
					        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
					        <input value={this.state.name} onChange ={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
					      </div>
					      <div className="mv3">
					        <label className="db fw6 lh-copy f6" htmlFor="password">Price</label>
					        <input value={this.state.price} onChange ={this.onPriceChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="price"  id="price"/>
					      </div>
					    </fieldset>
					    <div className="">
					      <input onClick={this.writeTest} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Add Test"/>
					    </div>
				
					  </div>
					</main>
			</article>
			</div>
		);
	}
}

export default TestForm ;