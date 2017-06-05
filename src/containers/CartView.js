angular.module('shoppingCartApp.containers.CartView', [])
	.component('scCartView', {
		template: `
			<div>
				<h4>Total price: <sc-cart-price></sc-cart-price></h4>
				<sc-product-list></sc-product-list>
			</div>	
		`,
	});