// http://redux.js.org/docs/basics/ExampleTodoList.html#reducers
angular.module('todoApp.selectors.getTodos', [])
	.config((selectorProvider) => {

		const getTodos = (state) => {
			return state.todos;
		};

		selectorProvider.add('getTodos', getTodos);		
	});