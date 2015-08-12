app.config(function($stateProvider,$urlRouterProvider){
	// $urlRouterProvider.otherwise('/photo');
	$stateProvider.state('layout',{
		abstract: true,
		templateUrl: '/partials/layout.html'
	}).state('home',{
		parent: 'layout',
		url: '/home',
		views:{
			'menu':{
				templateUrl: '/partials/menu.html',
				controller: 'MenuCtrl as vm'
			},
			'content':{
				templateUrl: '/partials/intro.html',
				controller: 'IntroCtrl as vm'
			}
		}
	}).state('photo',{
		parent: 'layout',
		url: '/photo',
		views:{
			'menu':{
				templateUrl: '/partials/menu.html',
				controller: 'MenuCtrl as vm'
			},
			'content':{
				templateUrl: '/partials/photo.html',
				controller: 'PhotoCtrl as vm'
			}
		}
	}).state('timeaxi',{
		parent: 'layout',
		url: '/timeaxi',
		views: {
			'menu':{
				templateUrl: '/partials/menu.html',
				controller: 'MenuCtrl as vm'
			},
			'content':{
				templateUrl: '/partials/list.html',
				controller: 'ListCtrl as vm'
			}
		}
	})
})