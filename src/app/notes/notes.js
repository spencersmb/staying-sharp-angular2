//angular.module('notes',[
//'NoteWrangler.models.notes'
//])
//  .config(function ($stateProvider) {
//    //$stateProvider
//      //.state('notewrangler.notes',{
//      //  url:'/',
//      //  views:{
//      //    'notes@':{
//      //      controller: 'NotesListCtrl as notesListCtrl',
//      //      templateUrl:'app/notes/notes.tmpl.html'
//      //    }
//      //  }
//      //})
//      //.state('notewrangler.notes',{
//      //  url:'/notes',
//      //  controller: 'NotesListCtrl as notesListCtrl',
//      //  templateUrl:'app/notes/notes.tmpl.html'
//      //})
//  })
//  .controller('NotesListCtrl', function (NotesModel) {
//    var notesListCtrl = this;
//
//    NotesModel.getNotes().then(function (result) {
//      notesListCtrl.notes = result;
//      console.log(result);
//    });
//
//  })
//;

'use strict';

angular.module('NoteWrangler')
  .controller('NotesListCtrl', function (NotesModel) {
    var ctrl = this;

    NotesModel.getNotes().then(function (result) {
    ctrl.notes = result;
    });

  });

