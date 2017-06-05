angular.module('shoppingCartApp.containers.CartCount', [])
	.component('scCartCount', {
		template: 
			`{{$ctrl.getCartCount()}}`
		,
		transclude: true,
		controller: class MainViewLinkController {
			constructor(dispatcher, selector) {
				this._dispatcher = dispatcher;
				this._selector = selector;
			}
			getCartCount() {
				return 3;
			}
		}
	});