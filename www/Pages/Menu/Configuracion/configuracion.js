angular.module('starter')
  .config(function($stateProvider) {                      //REDIRECCIONO
    $stateProvider
      .state('configuracion', {                                    //
        url: '/configuracion',                                     //URL
        templateUrl: 'Pages/Menu/Configuracion/configuracion.html',      //ESTABLEZCO  LA  RUTA
        controller: 'configuraCrtl'                            //ESTABELZCO  UN  NOMBRE PARA  EL  CONTROLADOR

      });

  });
