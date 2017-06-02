// http://redux.js.org/docs/basics/ExampleTodoList.html#reducers
angular.module('todoApp.reducers.visibilityFilter', [])
	.config((reducerProvider) => {

		const visibilityFilter = (state = 'SHOW_ALL', action) => {
			switch (action.type) {
				case 'SET_VISIBILITY_FILTER':
					return action.filter;
				default:
					return state;
			}
		};

		reducerProvider.add('visibilityFilter', visibilityFilter);
	});