import {Link} from "react-router-dom";

function User  ({user: {username,name}}) {
  
	return (
		<div>
		<button >{username}</button>
		
		</div>
		)
} 

export default User;
 