// http://redux.js.org/docs/basics/ExampleProductList.html#componentstodojs
angular.module('shoppingCartApp.components.Product', [])
	.component('scProduct', {
		template: `
			<div class="well well-sm">
				<div class="media">
					<div class="media-left">
						<a href><img style="max-width: 150px" class="media-object" src="images/tangerine.jpg"></a>
					</div>
					<div class="media-right">
						<h4 class="media-heading">Tangerine</h4>
						<p>5.00€</p>
						<p>
							<div class="input-group">
								<span type="button" class="btn btn-default input-group-addon">-</span>
							  	<input type="text" class="form-control" value="2">
							  	<span type="button" class="btn btn-default input-group-addon">+</span>
							</div>
							Total: 10.00€
						</p>
					</div>
				</div>
			</div>
		`,
	});