// see http://redux.js.org/docs/basics/ExampleTodoList.html#actionsindexjs
angular.module('todoApp.actions.setVisibilityFilter', [])
	.config((dispatcherProvider) => {

		dispatcherProvider.add('setVisibilityFilter', (filter) => {
			return {
				type: 'SET_VISIBILITY_FILTER',
				filter: filter,
			};
		});	
	});