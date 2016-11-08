angular.module('premio', [])
.controller('premioCtrl', function($scope,$stateParams,$location,$ionicLoading,$localStorage,$ionicPopup,servicoPremio,servicoCliente){

  $scope.premio = {};
  $scope.$storage = $localStorage;

  $scope.resgataPonto = function(){
     servicoPremio.resgatarpremio($scope.$storage.userIdEmpresa,$scope.premio_id,$scope.$storage.userId)
      .then(function(cliente) {
          $scope.showAlert("O prêmio foi resgatado com sucesso.");
      })
      .catch(function(erro){
        console.log(erro);
      })
  };

  $scope.buscaCliente = function(identificador){
       servicoCliente.buscaCliente(identificador,$scope.$storage.userIdEmpresa)
       .then(function(cliente){

         if(!cliente){
            $scope.limpaCliente();
            $scope.showAlert("Cliente não encontrado.");
         }

         for (var i in cliente) {
           $scope.buscaPremios();
           var item = cliente[i];
           $scope.nome_cliente = item.nome
           $scope.sobrenome = item.sobrenome;
           $scope.codigo_cliente = item.codigo;
           $scope.ponto_acumulado = item.qdtPonto;
           $scope.dadoscliente = true;
           $scope.id_clienteempresa = item.id;
           break;
         };
       })
       .catch(function(erro){
        console.log(erro);
       });
    };

    $scope.buscaPremios = function(){
         servicoPremio.buscapremios($scope.$storage.userIdEmpresa)
         .then(function(premios){
           $scope.premios = premios;
         })
         .catch(function(erro){
          console.log(erro);
         });
      };
});
