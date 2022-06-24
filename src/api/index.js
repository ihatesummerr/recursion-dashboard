import axios from 'axios';

const api = axios.create({ baseURL: 'https://recursion-server.herokuapp.com' });

// User api

export const authUser = (login, password) => api.post('/user/login', { login, password });

export const putUser = () =>
	api.put('/user/create', { name: 'Test', email: 'test@example.com' });

export const getUsers = () => api.get('/user/get');

export const getUser = (id) => api.get(`/user/get/${id}`);

export const patchUser = (id) =>
	api.patch(`/user/update/${id}`, {
		name: 'Test',
		email: 'ihatesummer@example.com',
	});

export const deleteUser = (id) => api.delete(`/user/delete/${id}`);

// Event api

export const putEvent = (event) => api.put('/event/create', event);

export const getEvents = () => api.get('/event/get');

export const getEventsByUser = (user) => api.post('/event/get', user);

export const patchEvent = (event) => api.patch(`/event/update`, event);

export const deleteEvent = (event) => api.delete(`/event/delete`, { data: event });

// Student api

export const putStudent = (student) => api.put('/student/create', student);

export const patchStudent = (student) => api.patch('/student/update', student);

export const getStudents = () => api.get('/student/get');
