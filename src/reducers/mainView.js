angular.module('shoppingCartApp.reducers.mainView', [])
	.config((reducerProvider) => {
		const mainView = (state = 'catalog', action) => {
		  switch (action.type) {
		    case 'SET_MAIN_VIEW':
		      return action.name;
		    default:
		      return state;
		  }
		};

		reducerProvider.add('mainView', mainView);
	});