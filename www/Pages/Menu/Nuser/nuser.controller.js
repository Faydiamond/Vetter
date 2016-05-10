angular.module("starter")
  .controller('NuserCrtl', function($scope, $state, all, $ionicPopup) {
    // txt
    $scope.mi = {
      cliente: '',
      telefono: '',
      direccion: '',
      email: '',
      nma: ''
    };
    ////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////////////////////////////
    $scope.valida=function(){
      var mi=$scope.mi;
      if( (mi.cliente=="") || (mi.telefono=="") || (mi.direccion=="") || (mi.email=="") || (mi.nma=="") ){
        alert("Por favor llena los campos");
      }
      else{
        all.i({
          t: 'Cliente',
          v: " '" + mi.cliente + "','" + mi.telefono + "', '" + mi.direccion + "', '" + mi.email + "' " //la  llamo
        }).then(function(data) {
          console.log("estas en maquina");
            all.ud("Cliente").then(function(id){
              all.i({
                t: 'Maquina',
                v: " '" + mi.nma + "', '"+id+"' " //la  llamo
              }).then(function(data) {
              });
            });
        });
        alert("Bien Hecho");
      }
    }
///////////////////////////////////////////////////////////////////////////////////////////////////

  });
