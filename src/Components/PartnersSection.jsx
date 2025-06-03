import React from 'react';

const partners = [
	{
		name: '',
		img: 'https://icblabs.com/assets/piena-Cn9RbyQb.png',
		subtitle: 'FINANCE',
	},
	{
		name: '',
		img: 'https://icblabs.com/assets/neoteh-lx6LWM22.png',
	},
	{
		name: '',
		img: 'data:image/png;base64,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',
	},
	{
		name: '',
		img: 'data:image/png;base64,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',
	},
	{
		name: '',
		img: 'https://icblabs.com/assets/biconomy-B_y0tFDI.png',
	},
];

const PartnersSection = () => {
	return (
		<section
			className="w-full bg-[#120f1b] py-16 px-2 relative overflow-hidden"
			style={{
				backgroundImage: "url('https://icblabs.com/assets/partnerBg-eSi8V2UY.png')",
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			{/* Title */}
			<div className="text-center mb-10">
				<div className="text-xs text-purple-400 tracking-widest mb-4 uppercase">
					OUR PARTNERS
				</div>
				<h2 className="text-4xl md:text-5xl font-extrabold text-gray-200 mb-4">
					Powering Innovation Together
				</h2>
			</div>
			{/* Cards */}
			<div className="w-full flex flex-wrap justify-center gap-8 md:gap-12 mt-20 mb-16">
				{partners.map((partner, idx) => (
					<div
						key={partner.name}
						className="relative w-full max-w-xs xs:w-1/2 sm:w-64 sm:h-40 h-32 bg-gradient-to-br from-[#181325] to-[#1a1025] rounded-2xl border-2 border-purple-700/40 shadow-lg flex flex-col items-center justify-center"
						style={{
							transform: 'rotate(15deg) skewY(10deg)',
							boxShadow: '0 0 24px 0 #a21caf44',
						}}
					>
						<div
							className="absolute inset-0 rounded-2xl pointer-events-none"
							style={{
								border: '2px solid #a21caf44',
								boxShadow: '0 0 16px 2px #a21caf33',
							}}
						/>
						<div className="relative flex flex-col items-center justify-center z-10">
							<img
								src={partner.img}
								alt={partner.name}
								className="w-24 h-12 object-contain mb-2"
								draggable={false}
							/>
							<span className="text-white font-bold text-lg tracking-wide">
								{partner.name === 'plena' ? (
									<>
										plena{' '}
										<span className="block text-xs font-normal text-gray-400">
											{partner.subtitle}
										</span>
									</>
								) : (
									partner.name
								)}
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default PartnersSection;