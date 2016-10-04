angular.module('user', [])
.controller('logarCtrl', function ($scope,logar,$stateParams,$location,$rootScope,$localStorage,$ionicPopup) {

 $scope.usuario = {};

 $scope.$storage = $localStorage;

$scope.logar = function() {
       logar.login($scope.usuario)
         .then(function(dados){
            if(!dados){
             $scope.showAlert();
            }else{

            $localStorage.userLogado = true;
            $localStorage.userId = dados.id;
            $localStorage.nomeUsuario = dados.nome;
            $localStorage.userIdEmpresa = dados.empresa_id;

            $rootScope.userLogado = true;
            $rootScope.userId = dados.id;
            $rootScope.nomeUsuario = dados.nome;
            $rootScope.userIdEmpresa = dados.empresa_id

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

});
