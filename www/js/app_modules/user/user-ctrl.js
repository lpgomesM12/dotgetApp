angular.module('user', [])
.controller('logarCtrl', function ($scope,userservico,$stateParams,$location,$rootScope,$localStorage,$ionicPopup) {

 $scope.usuario = {};

  $scope.$storage = $localStorage;

$scope.logar = function() {
       userservico.login($scope.usuario)
         .then(function(dados){
            if(!dados){
             $scope.showAlert();
            }else{

            $localStorage.userLogado = true;
            $localStorage.userId = dados.id;
            $localStorage.nomeUsuario = dados.nome;
            $localStorage.userIdEmpresa = dados.empresa_id;
            $localStorage.userRole = dados.role;
            $localStorage.codigo_cliente = dados.codigo_cliente;
            $localStorage.sobrenome = dados.sobrenome;
            $localStorage.pessoa_id = dados.pessoa_id;

            // console.log(dados.role);
            $rootScope.userLogado = true;
            $rootScope.userId = dados.id;
            $rootScope.nomeUsuario = dados.nome;
            $rootScope.userIdEmpresa = dados.empresa_id;
            $rootScope.userRole = dados.role;

            $location.path('/app/home');

            }
         })
         .catch(function(erro) {
				console.log(erro);
	   });
    }

 $scope.deslogar = function() {
        $localStorage.$reset();

        $localStorage.userLogado = false;
        //$scope.logado = false;
        $location.path('/app/login');
}

    $scope.showAlert = function() {
          var alertPopup = $ionicPopup.alert({
             title: 'Aviso',
             template: 'Dados de acesso estão incorretos'
          });

          alertPopup.then(function(res) {
             // Custom functionality....
          });
  };

})
.controller('cadUserCtrl', function ($scope,userservico,$stateParams,$location,$rootScope,$localStorage,$ionicPopup) {

 $scope.user = {};
 $scope.$storage = $localStorage;

 $scope.cadastrar = function() {

      if ($scope.user.password != $scope.user.confirmpassword){
           $scope.showAlert('Senhas não conferem');
           return;
        };

        userservico.cadastrar($scope.user)
          .then(function(dados){
             if(dados == true){
               $scope.showAlert('Usuário cadastrado com sucesso.');
               $location.path('/app/login');
             }
          })
        .catch(function(erro) {
        console.log(erro);
     });

  };

  $scope.showAlert = function(msg) {
          var alertPopup = $ionicPopup.alert({
             title: 'Aviso',
             template: msg
      });

          alertPopup.then(function(res) {
             // Custom functionality....
          });
    };

});
