angular.module('shoppingCartApp.actions.setMainView', [])
	.config((dispatcherProvider) => {
		let nextTodoId = 0;

		dispatcherProvider.add('setMainView', (name) => {
			return {
				type: 'SET_MAIN_VIEW',
				name: name,
			};
		});
	});