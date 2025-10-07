'use client';

export default function Contact({
	params, 
	searchParams,
	}: {
		params: Promise<{ slug: string }>
		searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
	return (
		<div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
			<h1 className="text-3xl font-bold text-white">Contact</h1>
			<p className="mt-4 text-white">
				You can reach me at <a href="mailto:tbui931958@gmail.com"className="text-blue-500 underline">tbui931958@gmail.com</a>
			</p>
		</div>
	);
}