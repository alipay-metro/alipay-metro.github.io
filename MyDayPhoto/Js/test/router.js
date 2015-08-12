app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/phoneList');
    $stateProvider
        .state('layout', {
            abstract: true,
            templateUrl: '/partials/layout.html'
        })
        .state('phone',{
            parent: 'layout',
            url:'/phoneList',
            views: {
                'content': {
                    templateUrl:'/partials/list.html',
                    controller:'PhoneCtrl'
                }
            }
           
        })
        .state('phone.info',{
            url:'/:id',
            views: {
                'menu@layout': {
                    template: '<h1>INFO title</h1>'
                },
                'content@layout': {
                    templateUrl:'/partials/info.html',
                    controller:'phoneInfoCtrl'
                }
            }
        })
        .state('test',{
            parent:'layout',
            url:'/test',
            views:{
                'menu':{
                    template:'<h1>TEST</h1>'
                },
                'content':{
                    templateUrl:'/partials/test.html',
                    controller:'TestCtrl as vm'
                }
            }
        })
      .state('test.form',{
          url:'/form',
          views:{
              'menu@layout':{
                  template:'<h1>Test - Form</h1>'
              },
              'content@layout':{
                  templateUrl:'/partials/test.form.html',
                  controller:'FormCtrl as vm'
              }
          }
      })
})