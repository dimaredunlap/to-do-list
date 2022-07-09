import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const ToDo = (props) => {
	return (
		<ul>
			{/* {newList.map(newList => {
				return (
					<li key={newList.id}>
						{InputValue}
					</li>
				)
			} */}
			<li>eggs</li>
			<li>milk</li>
			<li>coffee</li>
		</ul>
	);
};

export default ToDo;
