angular.module('starter')
  .config(function($stateProvider) {                      //REDIRECCIONO
    $stateProvider
      .state('InMa', {                                    //
        url: '/InMa',                                     //URL
        templateUrl: 'Pages/Menu/InfoMaq/InMa.html',      //ESTABLEZCO  LA  RUTA
        controller: 'InMaCrtl'                            //ESTABELZCO  UN  NOMBRE PARA  EL  CONTROLADOR

      });

  });
