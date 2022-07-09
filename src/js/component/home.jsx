import React, {useState} from "react";
import Header from "./Header.jsx"
import List from "./List.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [ InputValue, setInputValue ] = useState('');

	const [ ToDoList, setToDoList] = useState([]);

	const addItem = () => {
		const newList = [...ToDoList]
		newList.push(InputValue)
		setToDoList(newList)
	}

	return (
		<div className="list container">
			<Header />
			<input type="text" onChange={e => setInputValue(e.target.value)} value={InputValue}/>
			<button onClick={addItem}></button>
			<List ToDoList = {ToDoList}/>
		</div>
	);
};

export default Home;
