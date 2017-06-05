angular.module('shoppingCartApp.containers.MainViewLink', [])
	.component('scMainViewLink', {
		template: 
			`<sc-link 
				active="$ctrl.isActive()"
				on-click="$ctrl.setMainView()"
				><ng-transclude></ng-transclude></sc-link>`
		,
		bindings: {
			view: '<',
		},
		transclude: true,
		controller: class MainViewLinkController {
			constructor(dispatcher, selector) {
				this._dispatcher = dispatcher;
				this._selector = selector;
				this.newText = '';
			}
			isActive() {
				const mainView = this._selector.getMainView();
				return mainView === this.view;
			}
			setMainView() {
				this._dispatcher.setMainView(this.view);
			}
		}
	});