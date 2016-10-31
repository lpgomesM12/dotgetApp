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

    //cadastra cliente
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
      params = params + "cliente_id=" + cliente.id + "&";


      return $q(function(resolve,reject){
         $http.get('http://138.68.62.151/cadastrarCliente?'+params)
        //$http.get('http://localhost:3000/cadastrarCliente?'+params)
        .success(function(cliente){
          resolve(cliente);
        })
        .error(function(erro){
           reject({erro});
        });
      });
    };

  //busca cliente
    service.buscaCliente = function(identificador,empresa){
      return $q(function(resolve,reject){
        $http.get('http://138.68.62.151/buscaClientePonto?identificador='+identificador+'&empresa_id='+empresa)
        //$http.get('http://localhost:3000/buscaClientePonto?identificador='+identificador+'&empresa_id='+empresa)
        .success(function(cliente){
          resolve(cliente);
        })
        .error(function(erro){
           reject({erro});
        });
      });
    };

 //valida cliente
    service.validaCliente = function(cpf,empresa){
      return $q(function(resolve,reject){
        $http.get('http://138.68.62.151/buscaCliente?cpf='+cpf+'&empresa_id='+empresa)
      //$http.get('http://localhost:3000/buscaCliente?cpf='+cpf+'&empresa_id='+empresa)
        .success(function(cliente){
          resolve(cliente);
        })
        .error(function(erro){
           reject({erro});
        });
      });
    };

 //adicionar ponto
    service.addPonto = function(valor,empresa,user){
      return $q(function(resolve,reject){
        $http.get('http://138.68.62.151/addpontocliente?valor='+valor+'&empresa_id='+empresa+'&id='+user)
        //$http.get('http://localhost:3000/addpontocliente?valor='+valor+'&empresa_id='+empresa+'&id='+user)
        .success(function(cliente){
          resolve(cliente);
        })
        .error(function(erro){
           reject({erro});
        });
      });
    };

    service.listaclientes = function(empresa){
      return $q(function(resolve,reject){
        $http.get('http://138.68.62.151/addpontocliente?valor='+valor+'&empresa_id='+empresa+'&id='+user)
        //$http.get('http://localhost:3000/listaclientes?empresa_id='+empresa)
        .success(function(cliente){
          resolve(cliente);
        })
        .error(function(erro){
           reject({erro});
        });
      });
    };

    service.showcliente = function(cliente){
      return $q(function(resolve,reject){
        $http.get('http://138.68.62.151/addpontocliente?valor='+valor+'&empresa_id='+empresa+'&id='+user)
        //$http.get('http://localhost:3000/showcliente?cliente_id='+cliente)
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
