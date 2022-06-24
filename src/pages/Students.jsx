import React, { useEffect } from 'react';
import {
	GridComponent,
	ColumnsDirective,
	ColumnDirective,
	Resize,
	Sort,
	ContextMenu,
	Filter,
	Page,
	ExcelExport,
	PdfExport,
	Edit,
	Toolbar,
	Inject,
} from '@syncfusion/ej2-react-grids';

import { useDispatch, useSelector } from 'react-redux';
import {
	createStudent,
	fetchStudents,
	updateStudent,
} from '../reducers/students';

import Header from '../components/Header';

const directions = [{ name: 'Python' }, { name: 'JavaScript' }];

const studentsGrid = [
	{
		field: 'name',
		headerText: 'Имя',
		width: '150',
		textAlign: 'center',
		validationRules: {
			required: true,
		},
	},
	{
		field: 'phone',
		headerText: 'Телефон',
		width: '150',
		textAlign: 'center',
		validationRules: {
			required: true,
		},
	},
	{
		field: 'email',
		headerText: 'E-mail',
		width: '150',
		textAlign: 'center',
		validationRules: {
			required: true,
		},
	},
	{
		field: 'subscription.current_lesson',
		headerText: 'Текущее занятие',
		width: '150',
		textAlign: 'center',
		validationRules: {
			required: true,
			number: true,
		},
	},
	{
		field: 'subscription.max_lesson',
		headerText: 'Занятий всего',
		width: '150',
		textAlign: 'center',
		validationRules: {
			required: true,
			number: true,
		},
	},
	{
		field: 'direction.name',
		headerText: 'Направление',
		width: '150',
		textAlign: 'center',
		validationRules: {
			required: true,
		},
	},
];

const Students = () => {
	const { students } = useSelector((state) => state.students);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchStudents());
	}, []);

	const onActionComplete = ({ requestType, data, previousData }) => {
		switch (requestType) {
			case 'save':
				if (previousData.email !== undefined) {
					dispatch(updateStudent(data));
				} else {
					dispatch(createStudent(data));
				}
				break;
		}
	};

	return (
		<div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
			<Header title='Ученики' category='Список' />
			<GridComponent
				id='gridcomp'
				dataSource={[...students]}
				allowPaging
				allowSorting
				allowFiltering
				editSettings={{
					allowEditing: true,
					allowAdding: true,
					allowDeleting: true,
				}}
				toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel']}
				actionComplete={onActionComplete}
			>
				<ColumnsDirective>
					{studentsGrid.map((item, index) => (
						<ColumnDirective key={index} {...item} />
					))}
				</ColumnsDirective>
				<Inject
					services={[
						Resize,
						Sort,
						ContextMenu,
						Filter,
						Page,
						ExcelExport,
						PdfExport,
						Edit,
						Toolbar,
					]}
				/>
			</GridComponent>
		</div>
	);
};

export default Students;
