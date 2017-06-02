// http://redux.js.org/docs/basics/ExampleTodoList.html#componentsfooterjs
angular.module('todoApp.components.Footer', [])
	.component('taFooter', {
		template: `
			<p>
				Show:
				<ta-filter-link filter="'SHOW_ALL'">All</ta-filter-link>,
				<ta-filter-link filter="'SHOW_ACTIVE'">Active</ta-filter-link>,
				<ta-filter-link filter="'SHOW_COMPLETED'">Completed</ta-filter-link>
			</p>	
		`,
	});