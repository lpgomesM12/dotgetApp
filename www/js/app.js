// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','user','cliente','premio','ngStorage','ui.utils.masks',
'ion-floating-menu',
'empresa'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.login', {
    url: "/login",
    views: {
      'menuContent': {
       templateUrl: "js/app_modules/user/login.html",
        controller: 'logarCtrl'
      }
    }
  })

  .state('app.clientehome', {
    url: "/clientehome",
    views: {
      'menuContent': {
       templateUrl: "js/app_modules/cliente/homecliente.html",
        controller: 'clienteCtrl'
      }
    }
  })

  .state('app.cadcliente', {
    url: "/cadcliente",
    views: {
      'menuContent': {
       templateUrl: "js/app_modules/cliente/cadcliente.html",
        controller: 'clienteCtrl'
      }
    }
  })

  .state('app.addponto', {
    url: "/addponto",
    views: {
      'menuContent': {
       templateUrl: "js/app_modules/cliente/addponto.html",
        controller: 'clienteCtrl'
      }
    }
  })

  .state('app.resgatapremio', {
    url: "/resgatapremio",
    views: {
      'menuContent': {
       templateUrl: "js/app_modules/premio/resgatapremio.html",
        controller: 'premioCtrl'
      }
    }
  })

  .state('app.showcliente', {
    url: "/showcliente/:cliente",
    views: {
      'menuContent': {
       templateUrl: "js/app_modules/cliente/showcliente.html",
        controller: 'showclienteCtrl'
      }
    }
  })

  .state('app.listaempresas', {
    url: "/listaempresas",
    views: {
      'menuContent': {
       templateUrl: "js/app_modules/empresa/listaempresa.html",
        controller: 'empresaCtrl'
      }
    }
  })
// daqui para baixo são as rotas padrão

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    // .state('app.playlists', {
    //   url: '/playlists',
    //   views: {
    //     'menuContent': {
    //       templateUrl: 'templates/playlists.html',
    //       controller: 'PlaylistsCtrl'
    //     }
    //   }
    // })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
