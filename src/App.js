import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Homework from './pages/Homework';
import Learning from './pages/Learning';
import Lessons from './pages/Lessons';
import { useStateContext } from './contexts/ContextProvider';
import Students from './pages/Students';
import { loginUser } from './reducers/user';
import { useDispatch, useSelector } from 'react-redux';



const App = () => {
	const { activeMenu } = useStateContext();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
		  loginUser({
			login: "admin@admin",
			password: "admin",
		  })
		);
	  }, [])

	return (
		<div>
			<BrowserRouter>
				<div className='flex relative dark:bg-main-dark-bg'>
					<div
						className='fixed right-4 bottom-4'
						style={{ zIndex: '1000' }}
					>
						<TooltipComponent content='Settings' position='Top'>
							<button
								className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white'
								style={{
									background: 'blue',
									borderRadius: '50%',
								}}
							>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>
					{activeMenu ? (
						<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
							<Sidebar />
						</div>
					) : (
						<div className='w-0 dark:bg-secondary-dark-bg'>
							<Sidebar />
						</div>
					)}
					<div
						className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
							activeMenu ? 'md:ml-72' : ' flex-2'
						}`}
					>
						<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
							<Navbar />
						</div>
						<div>
							<Routes>
								{/* Dashboard */}
								<Route path='/' element={<Dashboard />} />
								<Route
									path='/dashboard'
									element={<Dashboard />}
								/>

								{/* Lessons */}
								<Route path='/lessons' element={<Lessons />} />

								{/* Schedules */}
								<Route
									path='/schedule'
									element={<Schedule />}
								/>

								{/* Homework */}
								<Route
									path='/homework'
									element={<Homework />}
								/>

								<Route
									path='/learning'
									element={<Learning />}
								/>

								<Route
									path='/students'
									element={<Students />}
								/>
							</Routes>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
