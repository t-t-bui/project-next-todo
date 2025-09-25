export default function Nav() {
	return (
		<Disclosure as='nav'
					className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
		>
			<div className="mx-auto">
				<h1>Hello</h1>
			</div>

			<Disclosure className="sm:hidden">
				<div className="space-y-1 px-2 pt-2 pb-3">
					{navigation.map((item) => (
						<DisclosureButton
							key={item.name}
							as="a"
							href={item.href}
							aria-current={item.current ? 'page': undefined}
							className={className(item.current ? 'bg-gray-950/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium',)}
						>
							{item.name}
						</DisclosureButton>
						))}
				</div>
		</Disclosure>
	);
}

