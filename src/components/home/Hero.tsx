import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const stats = [
	{ label: 'Keys traded on-chain' },
	{ label: 'Bonding curve pricing' },
	{ label: 'Soroban smart contracts' },
	{ label: 'Open source' },
	{ label: 'Built on Stellar' },
	{ label: 'No middleman' },
	{ label: 'Settles in seconds' },
	{ label: 'Creator-owned markets' },
	{ label: 'Early holders win' },
	{ label: 'Gated content access' },
];

export default function Hero() {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();

	function handleSearch(e: React.FormEvent) {
		e.preventDefault();
		const trimmed = query.trim();
		if (!trimmed) return;
		navigate(`/search?q=${encodeURIComponent(trimmed)}`);
	}

	return (
		<section className="relative h-[95vh] w-full overflow-hidden">
			{/* Background image */}
			<img
				src="/images/hero-bg.avif"
				alt=""
				className="absolute inset-0 h-full w-full object-cover"
			/>

			{/* Very light tint */}
			<div className="absolute inset-0 bg-[#04090f]/28" />

			{/* Bottom-to-top fade */}
			<div
				className="absolute inset-x-0 bottom-0 h-[45%] backdrop-blur-[2px]"
				style={{
					maskImage: 'linear-gradient(to top, black 0%, black 20%, transparent 100%)',
					WebkitMaskImage: 'linear-gradient(to top, black 0%, black 20%, transparent 100%)',
				}}
			/>
			<div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#04090f]/30 via-[#04090f]/5 to-transparent" />

			{/* Main content */}
			<div className="relative bottom-0 z-10 flex h-full flex-col items-center justify-center px-6 text-center">
				{/* Headline */}
				<h1 className="mt-6 font-pt-serif text-[clamp(2.4rem,5.5vw,3.8rem)] font-normal leading-[1.1] text-white">
					<span>
						Own a piece{' '}
						<img
							src="/icons/key.svg"
							alt=""
							className="hidden size-[0.75em] -translate-y-[0.1em] align-middle opacity-50 sm:inline"
						/>
						{' '}of every
					</span>
					<br />
					<span className="italic text-white/75">
						creator you believe in.
					</span>
				</h1>

				{/* Sub */}
				<p className="mt-5 max-w-md font-jakarta text-sm leading-relaxed text-white/50">
					Buy and sell creator keys on Stellar. Hold keys to unlock
					exclusive content. The earlier you believe, the more you gain.
				</p>

				{/* Search */}
				<form onSubmit={handleSearch} className="mt-10 w-full max-w-md">
					<div className="flex items-center rounded-full border border-white/15 bg-white/[0.18] backdrop-blur-sm">
						<input
							type="text"
							value={query}
							onChange={e => setQuery(e.target.value)}
							placeholder="Creator ID or wallet address…"
							className="min-w-0 flex-1 bg-transparent px-5 py-3.5 font-jakarta text-sm text-white placeholder-white/30 outline-none"
						/>
						<button
							type="submit"
							aria-label="Search"
							className="flex items-center justify-center border-l border-white/10 px-4 py-3.5 text-white/40 transition-colors hover:text-white"
						>
							<Search className="size-4" />
						</button>
					</div>
				</form>
			</div>

			{/* Infinite scrolling stats strip */}
			<div className="absolute inset-x-0 bottom-20 z-10 overflow-hidden">
				<div className="flex w-max animate-marquee items-center gap-0">
					{[...stats, ...stats].map((item, i) => (
						<div key={i} className="flex items-center gap-6 px-6">
							<span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">
								{item.label}
							</span>
							<span className="size-1 rounded-full bg-white/20" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
