angular.module('shoppingCartApp.containers.MainView', [])
	.component('scMainView', {
		template: `
			<div class="container">
				<sc-cart-view ng-if="$ctrl.getMainView() == 'cart'"></sc-cart-view>
				<sc-catalog-view ng-if="$ctrl.getMainView() == 'catalog'"></sc-catalog-view>
			</div>
		`,
		controller: class AddTodoController {
			constructor(selector) {
				this._selector = selector;
			}
			getMainView() {
				return this._selector.getMainView();
			}
		}
	});