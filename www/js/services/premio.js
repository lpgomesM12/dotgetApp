angular.module('premio')
.factory('servicoPremio',function($http,$q){
var service = {};

 service.resgatarpremio = function(clienteempresa,premio,user_id){
   return $q(function(resolve,reject){
     $http.get('http://138.68.62.151/resgatapremio?id='+clienteempresa+'&premio_id='+premio+'$user_id='+user_id)
    //  $http.get('http://localhost:3000/resgatapremio?id='+clienteempresa+'&premio_id='+premio+'$user_id='+user_id)
     .success(function(premio){
       resolve(premio);
     })
     .error(function(erro){
        reject({erro});
     });
   });
 };

 return service;
});
