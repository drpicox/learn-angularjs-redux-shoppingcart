// http://redux.js.org/docs/basics/ExampleTodoList.html#reducers
angular.module('shoppingCartApp.selectors.getMainView', [])
	.config((selectorProvider) => {

		const getMainView = (state) => {
			return state.mainView;
		};

		selectorProvider.add('getMainView', getMainView);		
	});