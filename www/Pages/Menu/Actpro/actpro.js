angular.module('starter')
  .config(function($stateProvider) {
    $stateProvider
      .state('Actpro', {
        url: '/Actpro',
        templateUrl: 'Pages/Menu/Actpro/actpro.html',
        controller: 'acpm'

      });
  });
