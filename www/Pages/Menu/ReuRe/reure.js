angular.module('starter')                                         //MODULO
  .config(function($stateProvider) {
    $stateProvider
      .state('reure', {
        url: '/reure',
        templateUrl: 'Pages/Menu/ReuRe/reure.html',               //ESTABLEZCO  LA  RUTA
        controller: 'ReMaqCrtl'                                   //ESTABLEZCO  UN  NOMBRE  PARA  EL  CONTROLADOR

      });
  });
