angular.module('starter')                                   //MODULE
  .config(function($stateProvider) {                        //
    $stateProvider
      .state('Nuser', {
        url: '/Nuser',
        templateUrl: 'Pages/Menu/Nuser/nuser.html',        //RUTA
        controller: 'NuserCrtl'                       //ESTABLEZCO  EL   NOMBRE  DEL  CONTROLADOR

      });
  });
