angular.module('starter')
  .config(function($stateProvider) {
    $stateProvider
      .state('Nproducto', {
        url: '/Nproducto',
        templateUrl: 'Pages/Menu/Nproducto/nproducto.html',
        controller: 'npro'

      });
  });
