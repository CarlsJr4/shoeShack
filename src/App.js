import React from 'react';
import Header from './components/Header';
import Shop from './components/Shop';

// Online store app with Redux 
// This is a practice app. Focus on a few features. Don't worry so much about UI/UX and styling. 

// Features to build:
// Card components with "products"
// Add to cart
// Increment/decrement quantity
// Calculate price

// Build a static version first THEN use redux

// Component heirarchy blueprint:
// Feel free to merge components if the individual components aren't doing enough
// App
	// ItemsContainer
		// ItemsCard
			// ItemsAddToCart
	// CartContainer
		// CartItem
			// CartItemQty
		// CartTotals

function App() {
  return (
		<div className="App">
			<Header />
			<Shop />
		</div>
  );
}

export default App;
