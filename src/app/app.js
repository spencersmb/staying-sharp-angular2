//MAIN APP FILE
angular.module('NoteWrangler', [
  'ngResource',
  'ui.router',
  'NoteWrangler.models.notes',
  'NoteWrangler.models.users',
  'NoteWrangler.models.categories'
])
.config(function($stateProvider, $urlRouterProvider) {
  //  $stateProvider
  //    .state('notewrangler', {
  //      url: '', //dont usee / in the url for main index
  //      abstract: true
  //      //templateUrl: 'app/categories/categories.tmpl.html',
  //      //controller: 'MainCtrl'
  //    });
  //
  //  $urlRouterProvider.otherwise('/')
  //})
  //Alternate state where all the views are in the same view
    $urlRouterProvider.otherwise('/notes');
    $stateProvider
      //.state('notewrangler',{
      //  url:'',
      //  //templateUrl:'app/notes/notes.tmpl.html'
      //  abstract:true
      //});
      .state('notes',{
        url:'/notes',
        templateUrl:'app/notes/notes.tmpl.html',
        controller: 'NotesListCtrl',
        controllerAs:'ctrl'
      })
      .state('note',{
        url:'/notes/:noteId',
        templateUrl:'app/notes/note/note.tmpl.html',
        controller:'NotesCtrl',
        controllerAs: 'ctrl'
      })
      .state('edit',{
        url:'/notes/:noteId/edit',
        templateUrl:'app/notes/note/edit/edit.tmpl.html',
        controller:'NotesEditCtrl',
        controllerAs: 'ctrl'
      })
      .state('create',{
        url:'/notes/create',
        templateUrl:'app/notes/note/create/create.tmpl.html',
        controller:'NotesCreateCtrl',
        controllerAs: 'ctrl'
      });
      //.state('edit',{
      //  url:'/notes/:noteId/edit',
      //  views:{
      //    'editView@': {
      //      templateUrl:'app/notes/note/edit/edit.tmpl.html',
      //      controller:'NotesEditCtrl',
      //      controllerAs: 'ctrl'
      //    }
      //  }
      //
      //});
  })
  //.run(function ($rootScope, $state) {
  //  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
  //    event.preventDefault();
  //    if (error === 'AUTH_REQUIRED') {
  //      $state.go('login');
  //    }
  //  });
  //})
;