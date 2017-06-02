// http://redux.js.org/docs/basics/ExampleTodoList.html#componentstodojs
angular.module('todoApp.components.Todo', [])
	.component('taTodo', {
		template: `
			<li ng-click="$ctrl.onClick()"
				ng-style="{textDecoration: $ctrl.completed ? 'line-through' : 'none' }"
				>

			{{ $ctrl.text }}

			</li>
		`,
		bindings: {
			onClick: '&',
			completed: '<',
			text: '<'
		},
	});