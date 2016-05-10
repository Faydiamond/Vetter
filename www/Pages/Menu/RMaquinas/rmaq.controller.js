angular.module("starter") //MODULOS
  .controller('MaCrtl', function($scope, $state, $http, all) {
    //Traerlo  de la bd
    $scope.clima = { //clientemaquina

    }
    all.q({
      t: ' Maq_client ',
      v: ' * ',
      w: ' 1=1 '
    }).then(function(data) {
      console.log("Cagado");
      //console.log(data);

      $scope.clima = data;

    });

    $scope.Ocultar = false;
    $scope.revision = function() { //CREO  FUNCION ON  HOLD ="TAP  SOSTENIDO"

      $state.go('reure');
    };

    $scope.consulta = function(id) { //CREO  FUNCION ONG-CLICK
      all.setId(id);
      $state.go('InPo')
    };


    $scope.con = function() { //CREO  U8NA  FUNCIÓN

      $state.go('configuracion'); //VOY  AL  FRAME  RMAQ

    };

    $scope.mensaje = function() {
      $scope.message = 'Hola, Mundo!';
      alert($scope.message);
      console.log($scope.message);

    }
///////////////////////////////////////////////////////////////////////////////////////
  $scope.numaqu=function(){
    console.log("Si?")
    $state.go('Nuser');
  }

////////////////////////////////////////////////////////////////////////////////////////
  });
