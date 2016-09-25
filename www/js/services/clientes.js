angular.module('cliente')
.factory('buscaCidades',function($http,$q){
 var service = {};

  service.busca = function(estado){
          return $q(function(resolve,reject) {
          $http.get('http://138.68.62.151/listarCidade?id='+estado)
          //$http.get('http://localhost:3000/listarCidade?id='+estado)
          .success(function(cidades) {
            resolve(cidades);
          })
          .error(function(erro){
            reject({erro});
          });
        });
    };

 return service;
})
.factory('servicoCliente',function($http,$q,$ionicSlideBoxDelegate){
    var service = {};
    service.cadastrar = function(cliente){

      var params = "cpf="+cliente.cpf + "&";
      params = params + "primeironome=" + cliente.primeironome + "&";
      params = params + "segundonome=" + cliente.segundonome + "&";
      params = params + "email=" + cliente.email + "&";
      params = params + "sexo=" + cliente.sexo + "&";
      params = params + "dtnascimento=" + cliente.dtnascimento + "&";
      params = params + "endereco=" + cliente.endereco + "&";
      params = params + "complemento=" + cliente.complemento + "&";
      params = params + "cidade_id=" + cliente.cidade_id + "&";
      params = params + "user_id=" + cliente.userId + "&";
      params = params + "empresa_id=" + cliente.empresa_id + "&";

      return $q(function(resolve,reject){
        $http.get('http://localhost:3000/cadastrarCliente?'+params)
        .success(function(cliente){
          resolve(cliente);
        })
        .error(function(erro){
           reject({erro});
        });
      });
    };
    return service;
});
