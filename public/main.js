require(
	[
		'jquery', 'app', 'views/tour', 'views/navbar', 'router',
		'views/table', 'views/dianping', 'views/dashboard', 'views/dummy',
		'models/session', 'views/panel', 'mobile-detect', 'views/signin',
		'views/homepage', 'views/products', 'views/footer', 'views/marketing',
		'views/stock', 'views/admin/admin',
		'bootstrap', 'highcharts'
	],
	function(
		$, app, Tour, Navbar, Router,
		Table, Dianping, Dashboard, Dummy, SessionModel, Panel, MobileDetect,
		SignIn, Homepage, Products, Footer, Marketing, Stock, Admin
	) {
		$(document).ready(function() {
			app.start({
				msg: "start up"
			});
		});

		var contextMap = {
			"": Homepage,
			"Homepage": Homepage,
			"Products": Products,
			"Marketing": Marketing,
			"Tour": Tour,
			"Stock": Stock,
			"Admin": Admin,
			"Editors": Dummy,
			"Table": Table,
			"Dianping": Dianping,
			"Dashboard": Dashboard,
			"HighCharts": Dummy,
			"3d": Dummy,
			"SignIn": SignIn,
			"other": Dummy,
		};

		app.navigateTo = function(context, options) {
			app.mainRegion.show(new contextMap[context](options));
		};

		app.addInitializer(function(options) {
			app.md = new MobileDetect(window.navigator.userAgent);

			app.router = new Router();
			app.session = new SessionModel();

			app.addRegions({
				headerRegion: 'header[role="banner"]',
				mainRegion: 'main[role="main"]',
				footerRegion: 'footer[role="contentinfo"]',
			});

			app.headerRegion.show(new Navbar());
			app.footerRegion.show(new Footer());

			app.session.checkAuth({
				complete: function() {
					Backbone.history.start();
				}
			});
		});
	}
);