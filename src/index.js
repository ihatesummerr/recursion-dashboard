import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
	<Provider store={store}>
		<ContextProvider>
			<App />
		</ContextProvider>
	</Provider>,
	document.getElementById('root')
);
