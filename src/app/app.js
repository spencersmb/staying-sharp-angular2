//MAIN APP FILE
angular.module('NoteWrangler', [
  'ngResource',
  'ui.router',
  'NoteWrangler.models.notes'

  //'notes'
])
.config(function($stateProvider, $urlRouterProvider){
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
        url:'/notes/note/:noteId',
        templateUrl:'app/notes/note/note.tmpl.html',
        controller:'NotesCtrl',
        controllerAs: 'ctrl'
      });
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