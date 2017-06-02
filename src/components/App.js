// http://redux.js.org/docs/basics/ExampleTodoList.html#componentsappjs
angular.module('todoApp.components.App', [])
	.component('taApp', {
		template: `
			<div>
				<ta-add-todo></ta-add-todo>
				<ta-visible-todo-list></ta-visible-todo-list>
				<ta-footer></ta-footer>
			</div>	
		`,
	});