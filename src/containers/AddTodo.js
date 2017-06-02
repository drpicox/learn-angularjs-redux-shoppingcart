// http://redux.js.org/docs/basics/ExampleTodoList.html#containersaddtodojs
angular.module('todoApp.containers.AddTodo', [])
	.component('taAddTodo', {
		template: `
			<div>
				<form ng-submit="$ctrl.addTodo()">
					<input ng-model="$ctrl.newText" minlength="1" required>
					<button type="submit">Add Todo</button>
				</form>
			</div>
		`,
		controller: class AddTodoController {
			constructor(dispatcher) {
				this._dispatcher = dispatcher;
				this.newText = '';
			}
			addTodo() {
				this._dispatcher.addTodo(this.newText);
				this.newText = '';
			}
		}
	});