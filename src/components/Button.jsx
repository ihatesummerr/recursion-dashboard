import React from 'react';

const Button = ({ bgColor, color, size, text, borderRadius }) => {
	return (
		<button
			type='button'
			style={{
				backgroundColor: bgColor,
				borderRadius: borderRadius,
				color: color,
			}}
			className={`text-${size} p-3 hover:drop-shadow-xl`}
		>
			{text}
		</button>
	);
};

export default Button;
