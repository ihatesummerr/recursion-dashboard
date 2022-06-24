import React from 'react';
import {
	ChartComponent,
	SeriesCollectionDirective,
	SeriesDirective,
	Inject,
	Legend,
	Category,
	StackingColumnSeries,
	Tooltip,
} from '@syncfusion/ej2-react-charts';

const stackedChartData = [
	[
		{ x: 'Jan', y: 111.1 },
		{ x: 'Feb', y: 127.3 },
		{ x: 'Mar', y: 143.4 },
		{ x: 'Apr', y: 159.9 },
		{ x: 'May', y: 159.9 },
		{ x: 'Jun', y: 159.9 },
		{ x: 'July', y: 159.9 },
	],
	[
		{ x: 'Jan', y: 111.1 },
		{ x: 'Feb', y: 127.3 },
		{ x: 'Mar', y: 143.4 },
		{ x: 'Apr', y: 159.9 },
		{ x: 'May', y: 159.9 },
		{ x: 'Jun', y: 159.9 },
		{ x: 'July', y: 159.9 },
	],
];
const stackedCustomSeries = [
	{
		dataSource: stackedChartData[0],
		xName: 'x',
		yName: 'y',
		name: 'Успехи',
		type: 'StackingColumn',
		background: 'blue',
	},

	{
		dataSource: stackedChartData[1],
		xName: 'x',
		yName: 'y',
		name: 'Ошибки',
		type: 'StackingColumn',
		background: 'red',
	},
];

const stackedPrimaryXAxis = {
	majorGridLines: { width: 0 },
	minorGridLines: { width: 0 },
	majorTickLines: { width: 0 },
	minorTickLines: { width: 0 },
	interval: 1,
	lineStyle: { width: 0 },
	labelIntersectAction: 'Rotate45',
	valueType: 'Category',
};

const stackedPrimaryYAxis = {
	lineStyle: { width: 0 },
	minimum: 100,
	maximum: 400,
	interval: 100,
	majorTickLines: { width: 0 },
	majorGridLines: { width: 1 },
	minorGridLines: { width: 1 },
	minorTickLines: { width: 0 },
	labelFormat: '{value}',
};

const Stacked = ({ width, height }) => {
	return (
		<ChartComponent
			width={width}
			height={height}
			id='charts'
			primaryXAxis={stackedPrimaryXAxis}
			primaryYAxis={stackedPrimaryYAxis}
			chartArea={{ border: { width: 0 } }}
			tooltip={{ enable: true }}
			legendSettings={{ background: 'white' }}
		>
			<Inject
				services={[Legend, Category, StackingColumnSeries, Tooltip]}
			/>
			<SeriesCollectionDirective>
				{stackedCustomSeries.map((item, index) => (
					<SeriesDirective key={index} {...item} />
				))}
			</SeriesCollectionDirective>
		</ChartComponent>
	);
};

export default Stacked;
