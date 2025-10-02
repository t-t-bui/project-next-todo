"use client"
import { useEffect, useState } from "react";

export default function TodoList() {
	const [tasks, setTasks] = useState<string[]>([]);
	const [input, setInput] = useState("");

	useEffect(() => {
		const stored = localStorage.getItem("tasks");
		if(stored) setTasks(JSON.parse(stored));
	}, []);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks])

	const addTask = async () => {
		if (input.trim() !== "") {
			setTasks([...tasks, input]);
			setInput("");
		}
	}

	const removeTask = (index: number) => {
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
		<div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg">
			<h1 className="text-2xl font-bold text-center text-gray-600 mb-4">My To-Do List</h1>

			<div className="flex gap-2 mb-4">
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Add a new task..."
					className="flex-1 px-3 py-2 border text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
				<button onClick={addTask} className="px-4 py-2 bg-blue-500 text-gray-600 rounded-lg hover:bg-blue-600">
					Add
				</button>
			</div>
			<ul className="space-y-2">
				{tasks.map((task, i) => (
					<li key={i}
						className="flex justify-between text-gray-400 items-center px-3 py-2 bg-gray-100 rounded-lg">
						<span>{task}</span>
						<button onClick={() => removeTask(i)} className="text-red-500 hover:text-red-700">
							X
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}