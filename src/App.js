import React from 'react';
import Header from './components/Header';
import Shop from './components/Shop';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
		<Provider store={store}>
			<div className="App">
				<Header />
				<Shop />
			</div>
		</Provider>
  );
}

export default App;
