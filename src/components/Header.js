angular.module('shoppingCartApp.components.Header', [])
	.component('scHeader', {
		template: `
			<div class="container">
				<nav class="navbar navbar-inverse">
        			<div class="navbar-header">
          				<a class="navbar-brand" href>Shopping Cart</a>
        			</div>
        			<div>
          				<ul class="nav navbar-nav">
				            <li>
                      <a href>
                        <sc-main-view-link view="'catalog'">
                          Catalog
                        </sc-main-view>
                      </a>
                    </li>
				            <li>
                      <a href>
                        <sc-main-view-link view="'cart'">
                          Cart (<sc-cart-count></sc-cart-count>)
                        </sc-main-view>
                      </a>
                    </li>
          				</ul>
        			</div>
      			</nav>
      		</div>
		`,
	});