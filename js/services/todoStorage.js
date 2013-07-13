/*global todomvc */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
 */
todomvc.factory('todoStorage', function () {
	var STORAGE_ID = 'todos-angularjs';

	return {
		get: function () {
			var todos = JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
			console.log(todos);
			return todos;
		},

		put: function (todos) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}
	};
});
