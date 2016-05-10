angular.module("starter")
  .controller('configuraCrtl', function($scope, $state, $cordovaDialogs, $ionicPopup,$http) {
    $scope.minutos=0;

    $scope.Message = function() {
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        template: '<input type="number" ng-model="minutos">',
        title: 'Tiempo  de  espera',
        subTitle: 'Por  favor  ingrese  la  cantidad  de  minutos  de  espera',
        scope: $scope,
        buttons: [{
          text: 'Cancelar'
        }, {
          text: '<b>Guardar</b>',
          type: 'button-positive',
          onTap: function(e) {
            if ($scope.minutos <=15) {
              e.preventDefault;
              console.log("Puedes realizar peticiones  con  un  tiempo  superior  a 15")
              var alertPopup = $ionicPopup.alert({
                title: 'Hey',
                template: 'Puedes realizar peticiones  con  un  tiempo  superior  a 15'
              });

            }
            else {
                console.log("estas  dentro")
            }
          }
        }]
      });

    };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$scope.confi = function() {                          //CREO  U8NA  FUNCIÓN

  $state.go('NewMaq');                              //VOY  AL  FRAME  RMAQ

}
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
