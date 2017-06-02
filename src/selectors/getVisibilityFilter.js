angular.module('todoApp.selectors.getVisibilityFilter', [])
	.config((selectorProvider) => {

		const getVisibilityFilter = (state) => {
			return state.visibilityFilter;
		};

		selectorProvider.add('getVisibilityFilter', getVisibilityFilter);		
	});