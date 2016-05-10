angular.module("starter")
  .controller('InMaCrtl', function($scope, $state, $cordovaDialogs, $http, all, $ionicPopup, $timeout) { //REDIRECCIONA
    $scope.Posicion = function() { //CREO  UNA  FUNCION
      $state.go('InMa'); //ESTABLEZCO  EL  FRAMW  INPO
    };
//////////////////////////////////////////////////////////////////
  
    $scope.ve = function() {
      console.log("estas adentro cabron");
      $state.go('Nproducto');
    }
    $scope.veac = function() {
        console.log("estas adentro Recabron");
        $state.go('Actpro');
      }
      /////////////////////////////////////////////////////
    $scope.infooo = function() { //informe

        $state.go('infomaqu');
      }
      ///////////////////////////////////////////////
    $scope.Inmacion = function() { //voy al frame  ionformacion
        console.log("adentro");
        $state.go('Nproducto');
      }
      //////////////////////////////////////////////////////
    $scope.NMAquina = function() {
      console.console.log("B");
    }
    ///////////////////////////////////////////////////////
    $scope.showPopup = function() {
      $scope.data = {};
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="numeric" ng-model="data.wifi"><br><br><input type="numeric" ng-model="data.wifii">',
        title: 'Ingresa la cantidad de vendidos ',
        subTitle: 'Ingresa la cantidad actual',
        scope: $scope,
        buttons: [{
          text: 'Cancelar'
        }, {
          text: '<b>Guardar</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.data.wifi ) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
              alert("por favor llena  los campos");
              console.log("adentro");
            } else if (($scope.data.wifi!="") && ($scope.data.wifi!="") ){                                  //hay datosd

              console.log("deberia haber datos");
              console.log($scope.data.wifi);
              console.log($scope.data.wifii);

              all.i({
                t: 'ProActual',
                v: " '" + $scope.data.wifi + "','" + $scope.data.wifii + "' " //la  llamo
              }).then(function(data) {
              });
            }
          }
        }]
      });
    };
    ///////////////////////////////////////////////////////////////////



    /////////////////////////////////////////////////////////////////
  });
