import React from 'react';
import {
	ScheduleComponent,
	Day,
	Week,
	WorkWeek,
	Month,
	Agenda,
	Inject,
	Resize,
	DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import Header from '../components/Header';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	createEvent,
	fetchEvents,
	removeEvent,
	updateEvent,
} from '../reducers/schedule';

const Schedule = () => {
	const dispatch = useDispatch();
	const { events } = useSelector((state) => state.schedule);

	useEffect(() => {
		dispatch(fetchEvents());
	}, []);

	const onActionComplete = ({ requestType, data }) => {
		switch (requestType) {
			case 'eventCreated':
				dispatch(createEvent({ ...data[0] }));

				break;

			case 'eventChanged':
				dispatch(updateEvent({ ...data[0] }));

				break;

			case 'eventRemoved':
				dispatch(removeEvent({ ...data[0] }));

				break;
		}
	};

	return (
		<div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
			<Header category='Обучение' title='Расписание' />
			<ScheduleComponent
				id='schedule'
				height='650px'
				eventSettings={{ dataSource: [...events] }}
				actionComplete={(action) => onActionComplete(action)}
			>
				<Inject
					services={[
						Day,
						Week,
						Month,
						WorkWeek,
						Agenda,
						Resize,
						DragAndDrop,
					]}
				/>
			</ScheduleComponent>
		</div>
	);
};

export default Schedule;
