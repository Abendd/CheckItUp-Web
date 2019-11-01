import React from 'react';
import fire from '../../config/fire.js'


const Navigation = ({onRouteChange,isSignedIn,route}) =>{
		if (isSignedIn){
			return (
				<nav style={{display:'flex',justifyContent:'flex-end'}}>
					{
						route==="home"
						?<p onClick={()=> onRouteChange('appointment')} className="f3 link dim black underline pa3 pointer">Appointments</p>
						:<p onClick={()=> onRouteChange('home')} className="f3 link dim black underline pa3 pointer">Tests</p>
					}
					<p onClick={()=>{
						fire.auth().signOut();
						onRouteChange('signin');
						}
					} 
					className="f3 link dim black underline pa3 pointer">Sign Out</p>
				</nav>
			);
	} else{
		return(
			<nav style={{display:'flex',justifyContent:'flex-end'}}>
				<p onClick={()=> onRouteChange('signin')} className="f3 link dim black underline pa3 pointer">Sign in</p>
				<p onClick={()=> onRouteChange('register')} className="f3 link dim black underline pa3 pointer">Register</p>
			</nav>
		);
	}
}

export default Navigation;