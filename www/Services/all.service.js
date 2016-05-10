'use strict';

// CONEXOIN DEL TELEFONO CON EL REST API
angular.module('starter').service('all', function($http, $q) {

    var url ='http://186.29.68.122:8089';      //IP  PUBLICA
    //var url ='http://localhost:8080';      //IP LOCAL == localhost
    var id=0;

    var getId =  function(){
      return id;

    };

    var setId = function (_id){
      id = _id;
        console.log("el  numero es: " + id + " Del cliente " + id);
    };

  var sentencia = {
    table: '', //string
    val: '', //string
    where: '' //string
  };
  var query = function(ob) {
    return $q(function(resolve, reject) {
      $http.post(url+'/api/q', ob).then(function(response) {

        resolve(response.data);
      });
    });
  };
  ///////////////////////////////////////////////////////////////////////
  var insert = function(llk) {
    return $q(function(resolve, reject) {
      $http.post(url+'/api/i', llk).then(function(response) {
        resolve(response.data);
      });
    });
  };
///////////////////////////////////////////////////////////////////////
var lazo = function(rm) {
  return $q(function(resolve, reject) {
    $http.post(url+'/api/me', rm).then(function(response) {
      resolve(response.data);
    });
  });
};

  ///////////////////////////////////////////////////////////////////////////
  var ultimoId = function(table) {
    return $q(function(resolve) {
      var id = "id_" + table
      $http.post(url+'/api/q', {
        t: table,
        v: " top(1) " + id,
        w: " 1 = 1 order by " + id + " desc"
      }).then(function(respoonse){
        resolve(respoonse.data[0][id]);
      });
    });
  };
  ////////////////////////////////////////////////////////////////////////////////
var History=function(hh){
  console.log(hh);
  return $q(function(resolve, reject) {
    $http.post(url+'/api/q',
    {
      t:'Historial',
      v:'*',
      w:hh
    }).then(function(response) {
      console.log(response);
      console.log("Si??")
      resolve(response.data);
    });
  });
};
  /////////////////////////////////////////////////////////////////////////////////////
  return { /////Abreviaturas:
    i: insert,
    q: query,
    ud: ultimoId,
    hy: History,
    getId : getId,
    setId : setId,
    e: lazo
  };
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});
