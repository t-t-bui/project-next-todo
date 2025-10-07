export default function About({
	params, 
	searchParams,
	}: {
		params: Promise<{ slug: string }>
		searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
	return (
		<div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
			<h1>About</h1>
		</div>
	);
}