angular.module("starter")
  .controller('InfPosicionCrtl',function($scope,$state,all,$ionicPopup){          //CONTROLADOR

$scope.algo={

}
    all.q({
      t : 'Historial',
      v: '*',
      w: '1=1'
    }).then(function(data){
      //console.log(data);
      console.log(data);
      $scope.algo = data;
    });

    $scope.udespiral= function(id) { //CREO  FUNCION ONG-CLICK
      console.log(id);
      all.setId(id);
      $state.go('InMa');
    };

    $scope.data = function() {
      numero1=prompt('Por favor ingrese la cantidad de vendidos del espiral', '');
          numero1=parseInt(numero1);
          console.log(numero1);
   };

   $scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Ingresa la cantidad de vendidos del espiral',
    subTitle: 'Digita la cantidad',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };


  });
