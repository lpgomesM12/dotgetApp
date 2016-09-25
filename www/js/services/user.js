angular.module('user')
      .factory('logar',function($http,$q){
       var service = {};
        service.login = function(usuario){
         return $q(function(resolve, reject) {
 		     //$http.get('http://138.68.62.151/logar?email='+usuario.email+'&password='+usuario.password)
         $http.get('http://localhost:3000/logar?email='+usuario.email+'&password='+usuario.password)
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
