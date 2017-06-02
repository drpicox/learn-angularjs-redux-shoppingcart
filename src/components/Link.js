// http://redux.js.org/docs/basics/ExampleTodoList.html#componentslinkjs
angular.module('todoApp.components.Link', [])
	.component('taLink', {
		template:
			`<span ng-if="$ctrl.active" ng-transclude></span>` +
			`<a ng-if="!$ctrl.active"
				href="#" ng-click="$event.preventDefault(); $ctrl.onClick()"
				ng-transclude></a>`
		,
		bindings: {
			onClick: '&',
			active: '<',
		},
		transclude: true,
	});