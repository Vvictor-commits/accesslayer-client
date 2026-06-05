import { Link } from 'react-router';

const navLinks = [
	{ label: 'Marketplace', href: '/marketplace' },
	{ label: 'About', href: '/about' },
	{
		label: 'GitHub',
		href: 'https://github.com/accesslayerorg',
		external: true,
	},
];

export default function Header() {
	return (
		<header className="fixed inset-x-0 top-5 z-50">
			<div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2.5">
					<img
						src="/icons/logo.svg"
						alt="Access Layer"
						className="size-5 opacity-90"
					/>
					<span className="font-mono text-[13px] uppercase tracking-[0.08em] text-white/70">
						Access Layer
					</span>
				</Link>

				{/* Nav */}
				<nav className="hidden items-center gap-8 md:flex">
					{navLinks.map(link =>
						link.external ? (
							<a
								key={link.href}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="font-jakarta text-sm text-white/45 transition-colors hover:text-white/80"
							>
								{link.label}
							</a>
						) : (
							<Link
								key={link.href}
								to={link.href}
								className="font-jakarta text-sm text-white/45 transition-colors hover:text-white/80"
							>
								{link.label}
							</Link>
						)
					)}
				</nav>

				{/* CTA */}
				<Link
					to="/connect"
					className="rounded-sm border border-white/15 bg-white/[0.05] px-5 py-2 font-mono text-[10px] uppercase tracking-wider text-white/60 transition-all hover:border-white/30 hover:bg-white/[0.09] hover:text-white"
				>
					Connect Wallet
				</Link>
			</div>
		</header>
	);
}
