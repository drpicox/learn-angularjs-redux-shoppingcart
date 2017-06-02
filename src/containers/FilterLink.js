// http://redux.js.org/docs/basics/ExampleTodoList.html#containersfilterlinkjs
angular.module('todoApp.containers.FilterLink', [])
	.component('taFilterLink', {
		template: 
			`<ta-link 
				active="$ctrl.isActive()"
				on-click="$ctrl.setVisibilityFilter()"
				><ng-transclude></ng-transclude></ta-link>`
		,
		bindings: {
			filter: '<',
		},
		transclude: true,
		controller: class FilterLinkController {
			constructor(dispatcher, selector) {
				this._dispatcher = dispatcher;
				this._selector = selector;
				this.newText = '';
			}
			isActive() {
				const visibilityFilter = this._selector.getVisibilityFilter();
				return visibilityFilter === this.filter;
			}
			setVisibilityFilter() {
				this._dispatcher.setVisibilityFilter(this.filter);
			}
		}
	});