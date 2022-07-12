import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [ ToDoList, setToDoList] = useState(["Do Homework", "Do Laundry", "Walk the Dog"]);

	const addItem = (onKeyDownEvent) => {
		if (
			onKeyDownEvent.keyCode === 13
		) {
			let newTask = onKeyDownEvent.target.value
			const newList = [...ToDoList, newTask]
			setToDoList(newList)
			newTask = ''
		}
		
	}
	const removeItem = (index) => {
		const removeTask = ToDoList.filter((item,i)=> i != index);
		setToDoList(removeTask);
	};
	const list = ToDoList.map((item,i) => {
		return (
			<div key={i}>
				<li>
					{item} 
					<button onClick={() => removeItem(i)}>X</button>
				</li>
			</div>
		)
	})

	return (
		<div className="list container-fluid card">
			<h1>ToDos</h1>
			<input type="text" onKeyDown={addItem} placeholder=" " id="fname" name="fname"/>
			<div>
				<ul>
					{list}
				</ul>
			</div>
			{list.length} task left
		</div>
		
	);
};

export default Home;
