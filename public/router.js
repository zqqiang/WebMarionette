define(
	[
		'backbone', 'app'
	],
	function(Backbone, app) {
		var Router = Backbone.Router.extend({
			routes: {
				"": "showIndex",
				"Editors": "showEditors",
				"Table": "showTable",
				"Dianping": "showDianping",
				"Dashboard": "showDashboard",
				"HighCharts": "showHighCharts",
				"3d": "show3d",
				"SignIn": "showSignIn",
				"Homepage": "showHomepage",
				"Products": "showProducts",
				"Marketing": "showMarketing",
				"Tour": "showTour",
				"Stock": "showStock",
				"Admin": "showAdmin",
				"*other": "defaultRouter",
			},
			showIndex: function() {
				app.navigateTo("");
			},
			showEditors: function() {
				app.navigateTo("Editors");
			},
			showTable: function() {
				app.navigateTo("Table");
			},
			showDianping: function() {
				app.navigateTo("Dianping");
			},
			showDashboard: function() {
				app.navigateTo("Dashboard");
			},
			showHighCharts: function() {
				app.navigateTo("HighCharts");
			},
			show3d: function() {
				app.navigateTo("3d");
			},
			showSignIn: function() {
				app.navigateTo("SignIn");
			},
			showHomepage: function() {
				app.navigateTo("Homepage");
			},
			showProducts: function() {
				app.navigateTo("Products");
			},
			showMarketing: function() {
				app.navigateTo("Marketing");
			},
			showTour: function() {
				app.navigateTo("Tour");
			},
			showStock: function() {
				app.navigateTo("Stock");
			},
			showAdmin: function() {
				app.navigateTo("Admin");
			},
			defaultRouter: function(other) {
				app.navigateTo("other");
			}
		});
		return Router;
	}
);