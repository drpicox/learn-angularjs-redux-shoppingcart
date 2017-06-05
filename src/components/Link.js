// http://redux.js.org/docs/basics/ExampleTodoList.html#componentslinkjs
angular.module('shoppingCartApp.components.Link', [])
	.component('scLink', {
		template:
			`<span ng-style="$ctrl.active && {color: 'white'}"
				ng-click="$event.preventDefault(); $ctrl.onClick()"
				ng-transclude></span>`
		,
		bindings: {
			onClick: '&',
			active: '<',
		},
		transclude: true,
	});