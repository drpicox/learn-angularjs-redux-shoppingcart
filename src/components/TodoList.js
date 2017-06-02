// http://redux.js.org/docs/basics/ExampleTodoList.html#componentstodolistjs
angular.module('todoApp.components.TodoList', [])
	.component('taTodoList', {
		template: `
			<ul>
				<ta-todo ng-repeat="todo in $ctrl.todos track by todo.id"
					completed="todo.completed"
					text="todo.text"
					on-click="$ctrl.onTodoClick({$event: todo.id})"
					></ta-todo>
			</ul>
		`,
		bindings: {
			todos: '<',
			onTodoClick: '&',
		},
	});