import React from 'react';
import {
	Inject,
	SparklineComponent,
	SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

const SparkLine = ({ currentColor, id, type, data, color, height, width }) => {
	return (
		<SparklineComponent
			id={id}
			height={height}
			width={width}
			lineWidth={1}
			valueType='Numeric'
			tooltipSettings={{
				visible: true,
				format: '${x} : data ${yval}',
				trackLineSettings: { visible: true },
			}}
			fill={color}
			border={{ color: currentColor, width: 2 }}
			dataSource={data}
			xName='x'
			yName='yval'
			type={type}
		>
			<Inject services={[SparklineTooltip]} />
		</SparklineComponent>
	);
};

export default SparkLine;
