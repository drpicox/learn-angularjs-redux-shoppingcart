// see http://redux.js.org/docs/basics/ExampleTodoList.html#actionsindexjs
angular.module('todoApp.actions.addTodo', [])
	.config((dispatcherProvider) => {
		let nextTodoId = 0;

		dispatcherProvider.add('addTodo', (text) => {
			return {
				type: 'ADD_TODO',
				id: nextTodoId++,
				text: text,
			};
		});
	});