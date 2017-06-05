angular.module('shoppingCartApp.components.App', [])
	.component('scApp', {
		template: `
			<div>
				<br>
				<sc-header></sc-header>
				<sc-main-view></sc-main-view>
			</div>	
		`,
	});