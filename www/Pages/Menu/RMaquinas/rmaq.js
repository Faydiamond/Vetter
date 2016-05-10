angular.module('starter')
  .config(function($stateProvider) {
    $stateProvider
      .state('rmaq', {
        url: '/',
        templateUrl: 'Pages/Menu/RMaquinas/rmaq.html',
        controller: 'MaCrtl'

      });
  });
