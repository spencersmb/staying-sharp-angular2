//angular.module('note',[
//
//])
//  .config(function ($stateProvider) {
//    $stateProvider
//      //.state('notewrangler.notes.note',{
//      //  url:'note/:noteId',
//      //  templateUrl:'app/notes/note/note.tmpl.html',
//      //  controller:'NoteListCtrl as noteListCtrl'
//      //});
//      //.state('notewrangler.notes.note',{
//      //  url:'notes/:noteId',
//      //  views:{
//      //    'note@':{
//      //      controller: 'NoteListCtrl as noteListCtrl',
//      //      templateUrl:'app/notes/note/note.tmpl.html'
//      //    }
//      //  }
//      //})
//  })
//  .controller('NoteListCtrl', function NotesListCtrl() {
//    var noteListCtrl = this;
//
//  })
//;

'use strict';

angular.module('NoteWrangler')
  .controller('NotesCtrl', function (NotesModel, $stateParams) {
    var ctrl = this,
      noteId = $stateParams.noteId;

    //pass in note id from URL first
    NotesModel.setCurrentId(noteId);

    ctrl.title = NotesModel.getCurrentNoteTitle;
    //NotesModel.getNotes().then(function (result) {
    //  ctrl.notes = result;
    //  console.log(result);
    //});

    //ctrl.getCurrentId = NotesModel.getCurrentNote;
  });