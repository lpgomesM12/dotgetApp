angular.module('cliente', [])
.controller('clienteCtrl', function($scope,$stateParams,buscaCidades,servicoCliente,$rootScope,$location,$ionicLoading,$localStorage,$ionicPopup){

 $scope.cliente = {};
 $scope.$storage = $localStorage;
 $scope.cidades = [];
 $scope.btndesabilitado = false;

 $scope.valida_cpf = function() {
    servicoCliente.validaCliente($scope.cliente.cpf,$scope.$storage.userIdEmpresa)
        .then(function(cliente){

          for (var i in cliente) {
            var item = cliente[i];

            $scope.cliente.id = item.id;
            $scope.cliente.primeironome = item.nome_primeiro;
            $scope.cliente.segundonome = item.nome_sobrenome;
            $scope.cliente.email = item.email;
            $scope.cliente.dtnascimento =  new Date(item.data_nascimento);
            $scope.cliente.endereco = item.endereco;
            $scope.cliente.complemento = item.complemento;
            $scope.estado_id = item.estado_id;
            $scope.cliente.cidade_id = item.cidade_id;
            $scope.cliente.sexo = item.sexo;

            if(item.situacao == 1){
                $scope.showAlert("Encontramos uma pessoa cadastrada em nossa base de dados com esse CPF. Salve para torná-la um cliente fiel.");
                $scope.btndesabilitado = true;
             }else if (item.situacao == 2) {
               $scope.btndesabilitado = false;
               $scope.showAlert("Esse cliente fiel já está cadastrado.");

               //$scope.estado_id = "";
             }
            break;
          }

        }).catch(function(erro){
          console.log(erro);
        });
 };


 $scope.buscaCidades = function(estado_id) {
     buscaCidades.busca(estado_id)
       .then(function(dados) {
        $scope.cidades = dados;
          })
         .catch(function(erro) {
          console.log(erro);
      });
 };

 $scope.cadastrar = function(){
   $scope.cliente.empresa_id = $scope.$storage.userIdEmpresa;
   $scope.cliente.userId = $scope.$storage.userIdEmpresa.userId;

   $ionicLoading.show({
     content: 'Loading',
     animation: 'fade-in',
     showBackdrop: true,
     maxWidth: 200,
     showDelay: 0
   });

   servicoCliente.cadastrar($scope.cliente)
     .then(function(cliente){
       $ionicLoading.hide();
       $scope.cliente = {};
       $scope.showAlert("Cliente cadastrado com sucesso!.");
       $location.path('/app/clientehome');
     })
     .catch(function(erro){
       $ionicLoading.hide();
       console.log(erro);
     });
   };

 $scope.buscaCliente = function(identificador){

      servicoCliente.buscaCliente(identificador,$scope.$storage.userIdEmpresa)
      .then(function(cliente){

        if(!cliente){
           $scope.limpaCliente();
           $scope.showAlert("Cliente não encontrado.");
        }

        for (var i in cliente) {
          var item = cliente[i];
          $scope.nome_cliente = item.nome;
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

$scope.addPontoCliente = function(valr){
  var valor = valr.toString().replace(".",",");
  console.log($scope.id_clienteempresa);
//  return;
   servicoCliente.addPonto(valor,$scope.$storage.userIdEmpresa,$scope.id_clienteempresa)
    .then(function(cliente) {
        $scope.showAlert("Foi adicionado "+cliente.pontoadd+ " pontos para este cliente!");
        $scope.ponto_acumulado = cliente.qtd;
    })
    .catch(function(erro){
      console.log(erro);
    })
};

$scope.limpaCliente = function(){
  $scope.nome_cliente = "";
  $scope.sobrenome = "";
  $scope.codigo_cliente = "";
  $scope.ponto_acumulado = "";
  $scope.dadoscliente = false;
  $scope.id_cliente = "";
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

   $scope.estados = [
     {id : 1, nome : "Acre"},
     {id : 2, nome : "Alagoas"},
     {id : 3, nome : "Amazonas"},
     {id : 4, nome : "Amapá"},
     {id : 5, nome : "Bahia"},
     {id : 6, nome : "Ceará"},
     {id : 7, nome : "Distrito Federal"},
     {id : 8, nome : "Espírito Santo"},
     {id : 9, nome : "Goiás"},
     {id : 10, nome : "Maranhão"},
     {id : 11, nome : "Minas Gerais"},
     {id : 12, nome : "Mato Grosso do Sul"},
     {id : 13, nome : "Mato Grosso"},
     {id : 14, nome : "Pará"},
     {id : 15, nome : "Paraíba"},
     {id : 16, nome : "Pernambuco"},
     {id : 17, nome : "Piauí"},
     {id : 18, nome : "Paraná"},
     {id : 19, nome : "Rio de Janeiro"},
     {id : 20, nome : "Rio Grande do Norte"},
     {id : 21, nome : "Rondônia"},
     {id : 22, nome : "Roraima"},
     {id : 23, nome : "Rio Grande do Sul"},
     {id : 24, nome : "Santa Catarina"},
     {id : 25, nome : "Sergipe"},
     {id : 26, nome : "São Paulo"},
     {id : 27, nome : "Tocantins"},
   ];

});
