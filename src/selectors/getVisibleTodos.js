angular.module('todoApp.selectors.getVisibleTodos', [])
	.config((selectorProvider) => {

		const getVisibleTodos = (todos, visibilityFilter) => {
			switch (visibilityFilter) {
				case 'SHOW_ALL':
					return todos;
				case 'SHOW_COMPLETED':
					return todos.filter(t => t.completed);
				case 'SHOW_ACTIVE':
					return todos.filter(t => !t.completed);
			}
		};

		selectorProvider.add('getVisibleTodos', getVisibleTodos);		
	});