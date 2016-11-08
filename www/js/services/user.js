angular.module('user')
      .factory('userservico',function($http,$q){
       var service = {};

       //login na aplicativo
        service.login = function(usuario){
         return $q(function(resolve, reject) {
 		     $http.get('http://138.68.62.151/logar?email='+usuario.email+'&password='+usuario.password)
        // $http.get('http://localhost:3000/logar?email='+usuario.email+'&password='+usuario.password)
        .success(function(user){
			  	resolve(user);
			  })
			  .error(function(erro){
			  	reject({erro});
			  });
        });
     };

    // cadastrar usuários
     service.cadastrar = function(usuario){

       var params = "primeironome=" + usuario.primeironome + "&";
       params = params + "segundonome=" + usuario.segundonome + "&";
       params = params + "email=" + usuario.email + "&";
       params = params + "password=" + usuario.password;

      return $q(function(resolve, reject) {
       $http.get('http://138.68.62.151/cadastrarUser?'+params)
      // $http.get('http://localhost:3000/cadastrarUser?'+params)
     .success(function(user){
      resolve(user);
    })
    .error(function(erro){
      reject({erro});
    });
     });
   };


    return service;
});
