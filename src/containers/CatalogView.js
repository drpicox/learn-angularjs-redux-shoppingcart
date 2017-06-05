angular.module('shoppingCartApp.containers.CatalogView', [])
	.component('scCatalogView', {
		template: `
			<div>
				<sc-product-list></sc-product-list>
			</div>	
		`,
	});