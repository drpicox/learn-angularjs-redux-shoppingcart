// DO NOT MODIFY DATA STRUCTURE
angular.module('shoppingCartApp.reducers.shoppingList', [])
	.config((reducerProvider) => {
		const shoppingList = (state = [
				{id: 'banana', count: 2 },
				{id: 'strawberry', count: 1 },
			], action) => {
		  switch (action.type) {
		    default:
		      return state;
		  }
		};

		reducerProvider.add('shoppingList', shoppingList);
	});