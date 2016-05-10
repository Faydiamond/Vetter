angular.module("starter")
  .controller('npro', function($scope, $state, $cordovaDialogs, $http, all) {
    $scope.enlaza = {}
    all.e({
        e: 'sp_enlace'
      }
    ).then(function(data) {
      console.log(data);
      $scope.enlaza = data;

    });
  });
