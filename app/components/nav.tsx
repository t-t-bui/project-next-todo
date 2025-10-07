"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';


export default function Nav() {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("theme") === "dark") {
			setDarkMode(true);
			document.documentElement.classList.add("dark");
		}
	}, []);

	// Toggle theme
	const toggleTheme = () => {
		if (darkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			setDarkMode(false);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			setDarkMode(true);
		}
	}

	return (
		<nav className="bg-white ml-25 mr-25 dark:bg-gray-800 shadow-md sticky top-0 z-50 rounded">
			<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
					<h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
						TodoApp
					</h1>

					<ul className="hidden md:flex ml-4 space-x-6 text-gray-600 dark:text-gray-300">
						<li className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
							<Link href="/">Home</Link>
						</li>
						<li className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
							<Link href="/about">About</Link>
						</li>
						<li className="hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>

					<button onClick={toggleTheme}
						className="ml-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-md text-sm hover:opacity-80 transition">
						{darkMode ? "Light" : "Dark"}
					</button>
				</div>
			</div>
		</nav>
	);
}

