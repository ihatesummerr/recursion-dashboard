import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/user';
import scheduleReducer from '../reducers/schedule';
import studentsReducer from '../reducers/students';

export default configureStore({
	reducer: {
		user: userReducer,
		schedule: scheduleReducer,
		students: studentsReducer,
	},
});
