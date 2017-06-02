// http://redux.js.org/docs/basics/ExampleTodoList.html#containersvisibletodolistjs
angular.module('todoApp.containers.VisibleTodoList', [])
	.component('taVisibleTodoList', {
		template: `
		<div>
			<ta-todo-list 
				todos="$ctrl.getVisibleTodos()" 
				on-todo-click="$ctrl.toggleTodo($event)"
				></ta-todo-list>
		</div>
		`,
		controller: class VisibleTodoListController {
			constructor(dispatcher, selector) {
				this._dispatcher = dispatcher;
				this._selector = selector;
				this.newText = '';
			}
			getVisibleTodos() {
				return this._selector.getVisibleTodos();
			}
			toggleTodo(id) {
				this._dispatcher.toggleTodo(id);
			}
		}
	});