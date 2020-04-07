import React from 'react';
import Header from './components/Header';
import Shop from './components/Shop';

// Online store app with Redux 
// This is a practice app. Focus on a few features. Don't worry so much about UI/UX and styling. 

// Build a static version first THEN use redux

function App() {
  return (
		<div className="App">
			<Header />
			<Shop />
		</div>
  );
}

export default App;
