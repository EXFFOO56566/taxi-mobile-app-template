alotaxi.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
        url: '/app',
        controller: 'alotaxiCtrl',
        template: '<ion-nav-view></ion-nav-view>',
        abstract: true,
    })
    .state('app.login', {
        cache: false,
        url: '/login',
        controller: 'alotaxiCtrl',
        templateUrl: 'templates/login.html'
    })
    .state('app.requestCar', {
        cache: false,
        url: '/requestCar',
        controller: 'alotaxiCtrl',
        templateUrl: 'templates/request-car.html'
    })
    .state('app.confirm', {
        cache: false,
        url: '/confirm',
        controller: 'alotaxiCtrl',
        templateUrl: 'templates/confirm.html'
    })
    .state('app.passengerStarting', {
        cache: false,
        url: '/passengerStarting',
        controller: 'alotaxiCtrl',
        templateUrl: 'templates/passenger-starting.html'
    })
    .state('app.passengerEnd', {
        cache: false,
        url: '/passengerEnd',
        controller: 'alotaxiCtrl',
        templateUrl: 'templates/passenger-end.html'
    })
    .state('app.driverStarting', {
        cache: false,
        url: '/driverStarting',
        controller: 'alotaxiCtrl',
        templateUrl: 'templates/driver-starting.html'
    })
    .state('app.driverEnd', {
        cache: false,
        url: '/driverEnd',
        controller: 'alotaxiCtrl',
        templateUrl: 'templates/driver-end.html'
    });
  $urlRouterProvider.otherwise("/app/login");
});
