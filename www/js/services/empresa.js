angular.module('empresa')
.factory('servicoEmpresa',function($http,$q){
var service = {};

 service.listaEmpresas = function(user_id){
   return $q(function(resolve,reject){
    $http.get('http://138.68.62.151/listaempresas?user_id='+user_id)
    //$http.get('http://localhost:3000/listaempresas?user_id='+user_id)
     .success(function(premio){
       resolve(premio);
     })
     .error(function(erro){
        reject({erro});
     });
   });
 };

 service.fidelizaCliente = function(empresa_id,pessoa_id){
   return $q(function(resolve,reject){
     $http.get('http://138.68.62.151/fidelizacliente?empresa_id='+empresa_id+'&pessoa_id='+pessoa_id)
    //$http.get('http://localhost:3000/fidelizacliente?empresa_id='+empresa_id+'&pessoa_id='+pessoa_id)
     .success(function(retorno){
       resolve(retorno);
     })
     .error(function(erro){
        reject({erro});
     });
   });
 };

 return service;
});
