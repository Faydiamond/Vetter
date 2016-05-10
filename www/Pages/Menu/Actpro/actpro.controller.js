angular.module("starter")
  .controller('acpm', function($scope, $state, $cordovaDialogs, $http, all, $ionicPopup, $timeout) {


    ///////////////////////////////////////////////////
    $scope.fi = {
      name: ''
    };

    $scope.add = function() {
      if ($scope.fi.name =="" ) {
        console.log("por favor agraga el nombre del producto");
        alert("por favor llena el campo");
      } else if ($scope.fi.name !== "") {
        var fi = $scope.fi;
        all.i({
          t: 'Producto',
          v: " '" + fi.name + "' " //la  llamo
        }).then(function(data) {

        });
      }
    }
    ////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////

  });
