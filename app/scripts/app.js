/**
 * Created by Administrator on 2015/6/17.
 */
angular.module(constVar.appName,[
    'ui.router',
    'ngSanitize',
    'ngDialog',
    'iframe.service',
    'infinite-scroll'
])
    .config(function($httpProvider) {//'iframe.service','iframe.grid','iframe.message','iframe.form'
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        //增加Content-Type = application/x-www-form-urlencoded;charset=utf-8,否则post时按request.getParameter 方式取不到，查可以通过request.getInputStream 方式取到
    })
    .config(function($stateProvider,$urlRouterProvider){
        $stateProvider.state('/',{
            url:'/',
            templateUrl:'views/login.html',
            controller:'loginController'
        })
            .state('login',{
                url:'/login',
                templateUrl:'views/login.html',
                controller:'loginController'
            })
            .state('my',{
                url:'/my',
                templateUrl:'views/my.html',
                controller:'myController'
            })
            .state('div',{
                url:'/div',
                templateUrl:'views/div.html',
                controller:'myController'
            })
            .state('mybak',{
                url:'/mybak',
                templateUrl:'views/test/my-bak.html'
            })
            .state('nologin',{
                url:'/nologin',
                templateUrl:'views/nologin.html'
            })
            .state('ngInfiniteScroll',{
                url:'/ngInfiniteScroll',
                templateUrl:'views/ngInfiniteScroll.html',
                controller:'ngInfiniteScrollController'
            })
        ;

        $urlRouterProvider.otherwise('/');
    });