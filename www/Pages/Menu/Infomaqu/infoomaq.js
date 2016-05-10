angular.module('starter')                                   //MODULE
  .config(function($stateProvider) {                        //
    $stateProvider
      .state('infomaqu', {
        url: '/infomaqu',
        templateUrl: 'Pages/Menu/infomaqu/infoomaq.html',        //RUTA
        controller: 'InfmaqqCrtl'                       //ESTABLEZCO  EL   NOMBRE  DEL  CONTROLADOR

      });
  });
