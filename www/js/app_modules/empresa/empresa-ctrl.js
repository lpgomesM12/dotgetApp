angular.module('empresa', [])
.controller('empresaCtrl', function($scope,$stateParams,$location,$ionicLoading,$localStorage,$ionicPopup,servicoEmpresa,$ionicModal){

  $scope.$storage = $localStorage;

  $ionicModal.fromTemplateUrl('js/app_modules/empresa/modal.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });


  $scope.chamaModal = function(empresa, clientefiel) {

    $scope.clientefiel = clientefiel;
    $scope.empresa_id = empresa;
    $scope.modal.show();
  }

  $scope.empresaLista = function(){
      servicoEmpresa.listaEmpresas($scope.$storage.userId)
          .then(function(empresas){
            $scope.empresas = empresas;
          }).catch(function(erro){
             console.log(erro);
          });
  };


  $scope.fidelizarCliente = function(){
      servicoEmpresa.fidelizaCliente($scope.empresa_id,$scope.$storage.pessoa_id)
          .then(function(retorno){
            if (retorno == true){
              $scope.empresaLista();
              $scope.modal.hide();
            };
          }).catch(function(erro){
             console.log(erro);
          });
  };


$scope.empresaLista();

});
