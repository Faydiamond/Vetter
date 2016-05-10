angular.module('starter')                                   //MODULE
  .config(function($stateProvider) {                        //
    $stateProvider
      .state('InPo', {
        url: '/InPo',
        templateUrl: 'Pages/Menu/InfoPos/InPo.html',        //RUTA
        controller: 'InfPosicionCrtl'                       //ESTABLEZCO  EL   NOMBRE  DEL  CONTROLADOR

      });
  });
