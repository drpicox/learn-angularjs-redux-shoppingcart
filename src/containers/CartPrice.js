angular.module('shoppingCartApp.containers.CartPrice', [])
	.component('scCartPrice', {
		template: 
			`{{$ctrl.getCartPrice()}}€`
		,
		controller: class MainViewLinkController {
			constructor(dispatcher, selector) {
				this._dispatcher = dispatcher;
				this._selector = selector;
			}
			getCartPrice() {
				return (15).toFixed(2);
			}
		}
	});