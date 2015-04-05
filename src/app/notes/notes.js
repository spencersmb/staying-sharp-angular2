
'use strict';

angular.module('NoteWrangler')
  //.config(function ($stateProvider) {
  //  $stateProvider
  //    .state('notewrangler.notes', {
  //      url: '/',
  //      views: {
  //        'mainView@': {
  //          controller: 'NotesListCtrl as ctrl',
  //          templateUrl: 'app/notes/notes.tmpl.html'
  //        }
  //      }
  //    })
  //})
  .controller('NotesListCtrl', function (NotesModel) {
    var ctrl = this;

    NotesModel.getNotes().then(function (result) {
    ctrl.notes = result;
      console.log(result)
    });

  });

