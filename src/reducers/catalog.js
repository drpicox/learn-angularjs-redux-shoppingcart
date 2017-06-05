// DO NOT MODIFY DATA STRUCTURE
angular.module('shoppingCartApp.reducers.catalog', [])
	.config((reducerProvider) => {
		const catalog = (state = [
				{id: 'banana', name: 'Banana', image: 'images/banana.jpg', price: 6.00 },
				{id: 'tangerine', name: 'Tangerine', image: 'images/tangerine.jpg', price: 5.00 },
				{id: 'strawberry', name: 'Strawberry', image: 'images/strawberry.jpg', price: 3.00 },
			], action) => {
		  switch (action.type) {
		    default:
		      return state;
		  }
		};

		reducerProvider.add('catalog', catalog);
	});