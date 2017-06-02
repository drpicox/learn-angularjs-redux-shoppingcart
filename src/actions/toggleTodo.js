// see http://redux.js.org/docs/basics/ExampleTodoList.html#actionsindexjs
angular.module('todoApp.actions.toggleTodo', [])
	.config((dispatcherProvider) => {

		dispatcherProvider.add('toggleTodo', (id) => {
			return {
				type: 'TOGGLE_TODO',
				id: id,
			};
		});
	});